import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import GenrePage from "../genre-page/genre-page";
import ArtistPage from "../artist-page/artist-page";

import {WelcomePage} from "../welcome-page/welcome-page";

export default class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {gameSetting} = props;

      return <WelcomePage settings={gameSetting} onStartClick={onUserAnswer}/>;
    }
    const {gameSetting, questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`:
        return <GenrePage
          gameSetting={gameSetting}
          question={currentQuestion}
          onAnswerClick={onUserAnswer}
        />;
      case `artist`:
        return <ArtistPage
          gameSetting={gameSetting}
          question={currentQuestion}
          onAnswerClick={onUserAnswer}
        />;
    }

    return null;
  }

  constructor(props) {
    super(props);

    this.state = {
      questionsCount: props.questions.length,
      currentQuestion: -1
    };
  }

  render() {
    const {currentQuestion} = this.state;

    return App.getScreen(currentQuestion, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.currentQuestion + 1;
        const isEnd = nextIndex >= this.state.questionsCount;

        return {
          currentQuestion: !isEnd ? nextIndex : -1
        };
      });
    });
  }
}

App.propTypes = {
  gameSetting: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired
};

