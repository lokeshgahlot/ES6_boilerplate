{
  "name": "D3-brush",
  "version": "1.0.0",
  "description": "D3 brush",
  "main": "index.js",
  "scripts": {
    "dev": "cross-env NODE_ENV=development webpack-dev-server --progress --colors",
    "build": "cross-env NODE_ENV=production webpack"
  },
  "author": "Lokesh Gahlot",
  "dependencies": {
    "bootstrap": "4.0.0-beta.2",
    "d3": "^4.12.0"
  },
  "devDependencies": {
    "babel-core": "^6.17.0",
    "babel-loader": "^7.1.0",
    "babel-polyfill": "^6.26.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-es2016": "^6.24.1",
    "babel-preset-es2017": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "compression-webpack-plugin": "^0.3.2",
    "concurrently": "^3.4.0",
    "cross-env": "^5.0.0",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "2.1.2",
    "node-sass": "^4.7.2",
    "postcss-loader": "^2.0.9",
    "precss": "^2.0.0",
    "sass-loader": "^6.0.6",
    "script-loader": "^0.7.0",
    "style-loader": "^0.19.0",
    "url-loader": "^0.5.7",
    "webpack": "^2.6.0",
    "webpack-dev-server": "^2.5.1"
  }
}
