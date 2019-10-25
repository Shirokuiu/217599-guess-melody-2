import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/app/app";
import {gameSetting, questions} from "./mocks/mocks";

const init = () => {
  ReactDOM.render(<App gameSetting={gameSetting} questions={questions} />, document.querySelector(`#root`));
};

init();
