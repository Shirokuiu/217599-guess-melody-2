import React from 'react';

import {WelcomePage} from "../welcome-page/welcome-page";

const AppSettings = {
  TIME: 5,
  MISTAKES: 3
};

export const App = () => {
  return <WelcomePage settings={AppSettings}/>;
};
