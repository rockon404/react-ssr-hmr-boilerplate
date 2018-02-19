import http from 'http';
import app from './server';

let currentApp = app.callback();
const server = http.createServer(currentApp);
server.listen(3000, () => console.log('server listens on 3000')); // eslint-disable-line no-console

if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp);
    currentApp = app.callback();
    server.on('request', currentApp);
  });
}
