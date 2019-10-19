import React from "react";

import {WelcomePage} from "../welcome-page/welcome-page";

const AppSettings = {
  TIME: 5,
  MISTAKES: 3
};

export const App = () => {
  const startGame = () => {};

  return <WelcomePage settings={AppSettings} startGame={startGame} />;
};
