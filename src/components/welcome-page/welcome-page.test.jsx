import React from "react";
import renderer from "react-test-renderer";

import {WelcomePage} from "./welcome-page";
import {gameSetting} from "../../mocks/mocks";

it(`Welcome page is render`, () => {
  const tree = renderer
    .create(<WelcomePage
      settings={gameSetting}
      onStartClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
