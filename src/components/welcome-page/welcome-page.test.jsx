import React from "react";
import renderer from "react-test-renderer";

import {WelcomePage} from "./welcome-page";

it(`Welcome page is render`, () => {
  const tree = renderer
    .create(<WelcomePage
      settings={
        {
          TIME: 5,
          MISTAKES: 3
        }
      }
      startGame={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
