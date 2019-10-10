# Webpack

Configure webpack to transpile some ES6 code to regular javascript that browsers can read.

To make the webpack understand other types of files such as ES6 code, PNG/SVG files, LESS/SASS, etc, we need to add loaders for each of those file types to our webpack config files.

We have to put the configurations for all loaders under the `module` because a loader converts the file to a valid module.

Loaders:

__Babel__
```sh
banel-loader, @babel/core, @babel/preset-env
@babel/preset-react -> for react app
```
In the webpackconfig, we have to add some rules. A rule has at least two keys: `test` and `use`. *test* is a regex that describes what files webpack should run with the loader and *use* is the name of the loader.

Sample rules for babel:

```sh
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  ]
},
resolve: {
  extensions: [
    '.js',
    '.jsx'
  ]
}
```

Need to add _.babelrc_ file in the root folder.
Sample _.babelrc_ file:
```sh
{
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    '@babel/preset-react'
  ]
}
```

__Typescirpt__
```sh
typescript, ts-loader
For react app, need to add below also:
@types/react, @types/react-dom
```

Webpackconfig changes:
```sh
module: {
  rules: [
    {
      test: /\.(ts|tsx)?$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }
  ]
},
resolve: {
  extensions: [
    '.tsx',
    '.ts',
    '.js'
  ]
}
```

We have to add the _tsconfig.json_ file with like the following sample config:

```sh
{
  "compilerOptions": {
    "outDir": "./dist/",
    "sourceMap": true,
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitAny": true,
    "module": "es6",
    "moduleResolution": "node",
    "target": "es5",
    "allowJs": true,
    "jsx": "react",
  },
  "include": [
    "./src/**/*"
  ]
}
```

__CSS / CSS Modules__
```sh
css-loader, style-loader
```

Webpackconfig changes:
```sh
{
  test: /\.css$/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

# for css moduels
{
   test: /\.css$/,
   use: [
     'style-loader',
     {
        loader: 'css-loader',
        options: {
        importLoaders: 1,
        modules: true
      }
    }
  ]
}
```

__LESS__

```sh
css-loader, less, less-loader, style-loader
```

Webpackconfig changes:

```sh
{
  test: /\.less$/,
  use: [
    'style-loader',
    'css-loader',
    'less-loader'
  ]
}
```

Let's say we have a _src/styles.less_ file like the below:

```sh
@primary-color: white;
@bg: grey;
body {
  color: @primary-color;
  background-color: @bg;
}
```
Don't forget to import this in the `index` file.
```
import "./styles.less";
```

__SASS__
```sh
css-loader, sass-loader, node-sass, style-loader
```

Webipackconfig changes:
```sh
{
  test: /\.scss$/,
  use: [
    'style-loader',
    'css-loader',
    'sass-loader'
  ]
}
```

__SVG__
```sh
file-loader
```

Webpackconfig changes:
```sh
{
  test: /\.svg$/,
  use: 'file-loader'
}
```

__PNG__
```sh
url-loader
```

Webpackconfig changes:
```sh
{
  test: /\.png$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        mimetype: 'image/png'
      }
    }
  ]
}
```

If we want to use some utilities lib (e.g lodash, moment), we might need to install plugins.

__Lodash__
```sh
lodash, lodash-webpack-plugin
```

Webpackconfig changes:
```sh
# Above the config
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

# Add plugins in the config
plugins: [
  new LodashModuleReplacementPlugin
]
```

```sh
# development build
npm run dev

# production build
npm run prod
```

_Ref:_ [Create App](https://createapp.dev/)
