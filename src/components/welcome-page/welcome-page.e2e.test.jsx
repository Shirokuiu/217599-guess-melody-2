import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {WelcomePage} from "./welcome-page";
import {gameSetting} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is game start`, () => {
  const clickHandler = jest.fn();
  const welcomePage = shallow(<WelcomePage
    settings={gameSetting}
    onStartClick={clickHandler}
  />);

  const welcomeButton = welcomePage.find(`.welcome__button`);

  welcomeButton.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
