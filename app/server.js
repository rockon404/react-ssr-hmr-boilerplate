import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';
import App from './App';

const renderApp = async ctx => {
  const context = {};
  const sheet = new ServerStyleSheet();
  const client =
    process.env.NODE_ENV === 'production'
      ? require("public/assets").main.js // eslint-disable-line
      : 'http://localhost:3001/client.js';
  const body = renderToString(
    sheet.collectStyles(
      <StaticRouter context={context} location={ctx.url}>
        <App />
      </StaticRouter>,
    ),
  );
  const styles = sheet.getStyleTags();

  if (context.url) {
    ctx.redirect(context.url);
  } else {
    ctx.body = `
      <!doctype html>
      <html lang="">
      <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charset="utf-8" />
        <title>React SSH HMR Boilerplate.</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${styles}
      </head>
      <body>
        <div id="root">${body}</div>
        <script src="${client}"></script>
      </body>
      </html>
    `;
  }
};

export default renderApp;
