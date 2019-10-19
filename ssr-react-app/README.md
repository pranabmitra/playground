# SSR - Server Side Rendering with React

## non-ssr-version

```sh
npm install
npm run build
```

This will create the `bundle.js` file inside the `public` folder. Now we can serve the `index` file to get the non-ssr output:
```sh
# create a python server
python -m SimpleHTTPServer 8787
# browse
http://localhost:8787/
```

If we open the `view-source` we can see the `root` element is empty because content will be loaded after the js render.
```sh
# empty root element
<div id="root"><!-- ::APP::  --></div>
```

## ssr-version

Install `express` and added the following script in the `package.json` file to transpile the files and moved to the `ssr` folder.

```sh
"convert": "babel src --out-dir ssr/src --presets=@babel/preset-env && babel index.js --out-dir ssr --presets=@babel/preset-env"
```

```sh
npm run convert

# run the server
node ssr/index.js

# browse: as it is running on 3000 port and check the view-source
http://localhost:3000/
```