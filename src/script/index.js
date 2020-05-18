import mapStyle from './map-style.js'
const $map = document.querySelector('#map')
const map = new window.google.maps.Map($map, {
  center: {
    lat: 37.09024,
    lng: -95.712891
  },
  zoom: 4.7,
  // zoom: 3,
  styles: mapStyle,
})

function traer() {
  let date = new Date();
  let datedos = Date.parse(date);
  let totalCases, deadCases, recoveredCases, title, country_code, updated;
  fetch('https://www.trackcorona.live/api/countries')
  .then(res => res.json())
  .then(data => {
    for (let i = 0; i < data.data.length; i++) {
      if (data.data[i].country_code == "us") {
        totalCases = data.data[i].confirmed;
        deadCases = data.data[i].dead;
        recoveredCases = data.data[i].recovered;
        title = data.data[i].location;
        country_code = data.data[i].country_code;
        updated = data.data[i].updated;
      }
    }
    document.getElementById('title').innerHTML = `${title} - ${country_code.toUpperCase()}`;
    document.getElementById('totalCases').innerHTML = totalCases;
    document.getElementById('activeCases').innerHTML = totalCases - deadCases -recoveredCases;
    document.getElementById('deadCases').innerHTML = deadCases;
    document.getElementById('recoveredCases').innerHTML = recoveredCases;
    document.getElementById('updated').innerHTML = ((datedos - Date.parse(updated)) / 60000).toFixed(0) + ` min`;    
  })
}
traer();



function sortJSON(data, key, orden) {
  return data.sort(function (a, b) {
      var x = a[key],
      y = b[key];
      if (orden === 'asc') {
          return ((x < y) ? -1 : ((x > y) ? 1 : 0));
      }
      if (orden === 'desc') {
          return ((x > y) ? -1 : ((x < y) ? 1 : 0));
      }
  });
}

function pintar(dataBase) {
  var completarTabla = "";
  let cuerpoTabla = document.getElementById("cuerpoTabla")
  let indice = 2;
  for (let i = 1; i < dataBase.length; i++) {
    if (i % indice == 0) {
      completarTabla += `<tr class="table__filas "><td class="number">${i}</td><td class="stade">${dataBase[i].location}</td><td class="conf">${dataBase[i].confirmed}</td></tr>`;
    } else {
      completarTabla += `<tr class="table__filas uno"><td class="number">${i}</td><td class="stade">${dataBase[i].location}</td><td class="conf">${dataBase[i].confirmed}</td></tr>`;
    }
  }
  cuerpoTabla.innerHTML = completarTabla;
}


renderData()
async function getData() {
  const response = await fetch('https://www.trackcorona.live/api/provinces')
  const data = await response.json();
  var dataBase = [{},];
  for (let i = 0; i < data.data.length; i++) {
    if (data.data[i].country_code == "us") {
      var place = { 
        "confirmed":     data.data[i].confirmed,
        "country_code":  data.data[i].country_code,
        "dead":          data.data[i].dead,
        "latitude":      data.data[i].latitude,
        "location":      data.data[i].location,
        "longitude":     data.data[i].longitude,
        "recovered":     data.data[i].recovered,
        "updated":       data.data[i].updated,
      }
      dataBase.push(place);
    }
  }
  delete dataBase[0];
  console.log(dataBase)
  pintar(dataBase)
  return dataBase
}


function renderExtraData({ location, country_code, recovered, dead, confirmed }) {
  return (`
  <div>
  <p> <strong>${country_code.toUpperCase()} - ${location}</strong> </p>
  <p> confirmados: ${confirmed} </p>
  <p> muertes: ${dead} </p>
  <p> recuperados: ${recovered} </p>
  </div>
  `)
}
// const icon = 'https://raw.githubusercontent.com/LeonidasEsteban/covid-19-map/master/icon.png'
const icon = './images/point.png'
const popup = new window.google.maps.InfoWindow()

async function renderData() {
  const data = await getData() 
  data.forEach(item => {
    const marker = new window.google.maps.Marker({
      position: {
        lat: item.latitude,
        lng: item.longitude,
      },
      map,
      icon,
      animation: google.maps.Animation.DROP,
      title: String(`${item.location}-${item.confirmed}`),
    })
    marker.addListener('click', () => {
      popup.setContent(renderExtraData(item))
      popup.open(map, marker)
    })
  })
}