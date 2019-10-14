# Webpack

Here, we're going to create a React project.

At first, we need to install the some react libraries:

```sh
npm install --save react react-dom
```

As _React_ uses *jsx* syntax and that is not a part of the standard javascript, we need _Babel_ to transpile the _JSX_.

We need to install the following dependency:
```sh
npm install --save-dev @babel/preset-react
```

In the _.babelrc_ file, we need to add this:
```sh
{
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
}
```

We need to tell _webpack_ to transpile the _jsx_.
```sh
test: /\.(js|jsx)$/,
```

Beacause of the _webpack_, we can import a module without writing the extension. For instance, we want to import _Test.js_ file in our _index.js_ file. We can do the following:
```sh
import Test from 'directory/Test'
```

We didn't have to use the _js_ extension because webpack knew which file to import anyway. By default _webpack_ automatically resolves _js_ files. Hence, to resolve the _jsx_ files we have to configure the webpack config.

```sh
resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
```

Here, we have to provide the both (js and jsx) otherwise webpack will overwrites the old default resolver config with whatever we provide in the webpack config.

```sh
# development build
npm run dev

# production build
npm run prod
```


Since we're not using any server yet, we can just run a quick python server to check the output. Suppose we're running the following command from the _step-3/dist_ directory:

```sh
python -m SimpleHTTPServer 8787
``` 

Now check it in the browser:
```sh
http://localhost:8787
```