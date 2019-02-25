import React from 'react';
import ReactDOM from 'react-dom';
import axe from 'react-axe'; // eslint-disable-line import/no-extraneous-dependencies

function configureApp() {
  axe(React, ReactDOM, 1000);
}

export default configureApp;
