const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/rest', {
    target: 'http://127.0.0.1:8008',
    changeOrigin: true
  }));
};
