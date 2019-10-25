import React from "react";
import renderer from "react-test-renderer";

import ArtistPage from "./artist-page";

import {gameSetting, questions} from "../../mocks/mocks";

it(`Is artist page rendered`, () => {
  const tree = renderer
    .create(<ArtistPage
      gameSetting={gameSetting}
      question={questions[2]}
      onAnswerClick={jest.fn()}
    />);

  expect(tree).toMatchSnapshot();
});
