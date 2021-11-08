# EDcupcake, tienda que vende cupcakes

Este proyecto al inicio fue creado con `npx create-react-app project-name` y usaba yarn 2 (3.0.2). Luego de un error de importacion, se creo un nuevo proyecto con VITE, `yarn create vite project-name` y solo se paso la carpeta "src", se corrigio las importaciones y se agrego index.jsx al index.html, esta version usa yarn 1. 

## Activar `cupcakes` y `services`
1. instalar json-server: npm install -g json-server
2. click derecho y luego "Guardar como" o "Save as" en la pagina: `https://raw.githubusercontent.com/devfjavier/Proyecto-de-EDcupcake/gh-pages/db.json` y desde la terminal, en la ruta de la descarga ejecutar:json-server --watch db.json --port 3050
## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode (lo mismo que `yarn start`).\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

IMPORTANTE: para subirlo a `github pages` , en el archivo "index.html" de la carpeta "dist" se debe eliminar la primera barra `/` de las rutas en las etiquetas "link" y "script"