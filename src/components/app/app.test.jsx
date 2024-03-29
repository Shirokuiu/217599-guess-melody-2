import React from "react";
import renderer from "react-test-renderer";

import App from "./app";
import {gameSetting, questions} from "../../mocks/mocks";

it(`App is render`, () => {
  const tree = renderer
    .create(<App
      gameSetting={gameSetting}
      questions={questions}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
