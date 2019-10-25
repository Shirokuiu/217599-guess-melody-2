import React from "react";
import renderer from "react-test-renderer";

import GenrePage from "./genre-page";
import {gameSetting, questions} from "../../mocks/mocks";

it(`Is genre is rendered`, () => {
  const tree = renderer
    .create(<GenrePage
      gameSetting={gameSetting}
      question={questions[0]}
      onAnswerClick={jest.fn()}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
