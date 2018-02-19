import React from 'react';
import { hydrate } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const render = Component =>
  hydrate(
    <AppContainer>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </AppContainer>,
    document.getElementById('root'),
  );

render(App);

if (module.hot) {
  module.hot.accept('./App', () => render(App));
}
