# Contenido
- Descripción del proyecto
- Herramientas Usadas
- Versión
- Metodogias
- API
- Procedimiento para deploy

## Descripción del proyecto
The Coronavirus App, es una aplicación que pretende realizar un dashboard de la data proveniente de una API, que contienen información sobre el progreso de la pandemia C-19 en USA, para esto en su primera versión se han empleado herramientas que permiten el plot sobre el map de USA tomado de la herramienta google maps. 

## Herramientas Usadas
Las herramientas empleadas en este proyecto son listadas a continuación:

- Editor Visual Studio Code
- HTML5
- CSS3
- JavaScript (puro en su mayoria)
- JQuery (tomado del sitio oficial como un link)
- Preprocesador de Styles SASS
- NPM, node, gestor de paquetes y dependencias
- Dependencia live-server, genera un servidor local (localHost), para desarrollo de proyecto
- Dependencia node-sass, para compilar codigo .sass o scss en archivo .css CSS3
- Google maps, con API_KEY suministrada por el cliente.
- API data suministrada por el cliente: https://www.trackcorona.live/api
- Postman, para descripción de API
- Repocitorio de GitHub con contenido Cartografico: https://github.com/unitedstates/districts/tree/gh-pages/states

## Vesión
En la actualidad se cuenta con la v1.0.0, que nos permite el uso de herramientas basicas para la visualización de usuario final.

## Metodologias 
En este proyecto se emplearon las siguientes metodologias con el objetivo de hacer codigo más limpio y facil de leer.

- Metodologia BEM, Bloque-Elemento-Modificador, es empleada en los archivos de SASS que compilan en CSS
- Asignación de variables empleado camelCase, especificamente en JavaScript

## API
Las API y recursos se encuentran en los siguientes links

`<link>` :<https://www.trackcorona.live/api/countries>
`<link>` :<https://www.trackcorona.live/api/provinces>
`<link>` :<https://www.trackcorona.live/api/cities>

## Procedimiento para deploy

- Debes clonar el repo con el siguiente codigo `$ git clone https://github.com/hadiazb/testFront.git`
- Luego de la descarga debes instalar node y npm como se muestra `$ node install` y `$ npm install`
- Verificar versión con  `$ node -v` y `$ npm -v`
- Ahora debes instalar la unica dependencia necesaria, ya que el codigo .sass ya fue compilado es `$ npm i -D live-server`, para generar localHost.
- Para correr este proyecto en local ya esta configurado el script en el package como `$"start": "live-server"`, por lo cual la linea de codigo en la terminal sera `$ npm run start`, con esto se abrira el proyecto en el navegador que tengas predeterminado.
- Dado que el archivo se indexa en un html, pensando en el modelo vista controlador,  debes entrar a la carpeta raiz que src/ que se mostrara en el navegador, luego darle click en index.html, con esto sera suficiente para plotear el proyecto.
- Si nada de lo anterior funciona, puedes entrar a al link que te ofrece el repositorio de gitHub, allí tambien podras verlo!!!
- Suerte con ello.

![](./images/LogoBlanco.png)
