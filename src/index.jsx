import React from 'react';
import ReactDOM from 'react-dom';

import {App} from "./components/app/app.jsx";

const APP_SETTINGS = {
  time: 5,
  mistakes: 3
};

const init = () => {
  ReactDOM.render(<App settings={APP_SETTINGS} />, document.querySelector(`#root`));
};

init();
