// @flow
const https = require('https');
const path = require('path');
const express = require('express'); //eslint-disable-line
const devcert = require('devcert-with-localhost').default; //eslint-disable-line
const webpack = require('webpack'); //eslint-disable-line
const webpackDevMiddleware = require('webpack-dev-middleware'); //eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware'); //eslint-disable-line
const config = require('./webpack.config.js')();

const DIST_DIR = path.join(__dirname, 'dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const DEFAULT_PORT = process.env.POST || 4000;

const isSSL = process.env.SSL || false;

const compiler = webpack(config);
const app = express();

app.set('port', process.env.PORT || DEFAULT_PORT);
app.use(express.static(path.join(__dirname, 'dist')));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);
app.use(webpackHotMiddleware(compiler));

app.get('*', (req, res, next) => {
  compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

if (isSSL === true) {
  devcert('my-app', { installCertutil: true }).then(ssl => {
    https.createServer(ssl, app).listen(app.get('port'));
    console.log(`app listen ${app.get('port')}`); // eslint-disable-line
  });
} else {
  app.listen(app.get('port'));
}
