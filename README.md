# EDcupcake: e-commerce

It is a shop that sells cupcakes from an API consumed with Fetch API.
The user can view and save the cupcakes in the cart.
REDUX is used to handle the state of the cart and the cupcakes, sass and css modules for the styles and json-server for the API.
Single Page Aplication (SPA).

### Activate `cupcakes` and `services` (OPTIONAL)

If json-server is not activated, the local data will be used and they are the same than json-server.

1. install json-server: npm install -g json-server
2. click right and then "Save as" on the page: `https://raw.githubusercontent.com/devfjavier/Proyecto-de-EDcupcake/gh-pages/db.json` and in the download path, from terminal run: json-server --watch db.json --port 3050
## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

FOR GITHUB PAGES: open the file `vite.config.js` and `defineConfig` should have the property `base: "/BasePath/"` in the object of its parameter
