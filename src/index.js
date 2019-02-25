import './polyfills'; // this must be the first line in src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './modules/App/App';
import Localization from './modules/Localization';
import * as serviceWorker from './serviceWorker';
import configureApp from './common/helpers/configureApp';

configureApp();

ReactDOM.render(
  <Localization>
    <App />
  </Localization>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
