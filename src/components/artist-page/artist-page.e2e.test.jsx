import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ArtistPage from "./artist-page";

import {gameSetting, questions} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Is answer`, () => {
  const clickHandler = jest.fn();
  const artistPage = shallow(<ArtistPage
    gameSetting={gameSetting}
    question={questions[2]}
    onAnswerClick={clickHandler}
  />);

  const tracks = artistPage.find(`.artist__input`);

  tracks.forEach((track) => track.simulate(`change`, {target: ``}));

  expect(clickHandler).toHaveBeenCalledTimes(3);
});
