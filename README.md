# EDcupcake, tienda que vende cupcakes

Este proyecto al inicio fue creado con `npx create-react-app project-name` y usaba yarn 2 (3.0.2). Luego de un error desconocido, se creo un nuevo proyecto con VITE, `yarn create vite project-name` y solo se paso la carpeta "src" y se corrigio algunas importaciones de "src" e index.html, esta version usa yarn 1. 

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

IMPORTANTE: para subirlo a `github pages` , en el archivo "index.html" de la carpeta "dist" se debe eliminar la primera barra `/` de las rutas en <link> y <script>