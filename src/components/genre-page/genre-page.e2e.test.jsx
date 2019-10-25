import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GenrePage from "./genre-page";
import {questions, gameSetting} from "../../mocks/mocks";

Enzyme.configure({adapter: new Adapter()});

it(`Genre is answered`, () => {
  const clickHandler = jest.fn();
  const genrePage = shallow(<GenrePage
    gameSetting={gameSetting}
    question={questions[0]}
    onAnswerClick={clickHandler}
  />);

  const form = genrePage.find(`.game__tracks`);

  form.simulate(`submit`, {preventDefault: () => {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
