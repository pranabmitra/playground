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