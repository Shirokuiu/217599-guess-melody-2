import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class GenrePage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };

    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.checkboxChangeHandler = this.checkboxChangeHandler.bind(this);
  }

  formSubmitHandler(evt) {
    evt.preventDefault();

    const {onAnswerClick} = this.props;

    onAnswerClick([...new Set(this.state.answers)]);
  }

  checkboxChangeHandler(evt) {
    const {target} = evt;

    if (target.checked) {
      this.setState((prevState) => {
        prevState.answers.push(target.value);
      });
    }
  }

  render() {
    const {gameSetting, question} = this.props;

    return <section className="game game--genre">
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <div className="game__mistakes">
          {Array(gameSetting.mistakes).fill().map((genre, idx) => <div key={Math.random() + idx} className="wrong"/>)}
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Выберите инди-рок треки</h2>
        <form className="game__tracks" onSubmit={this.formSubmitHandler}>
          {question.answers
            .map(({genre}, idx) => <div key={Math.random() + idx} className="track">
              <button className="track__button track__button--play" type="button"/>
              <div className="track__status">
                <audio/>
              </div>
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={genre}
                  id={`answer-${idx + 1}`}
                  onChange={this.checkboxChangeHandler}
                />
                <label className="game__check" htmlFor={`answer-${idx + 1}`}>Отметить</label>
              </div>
            </div>)}

          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    </section>;
  }
}

GenrePage.propTypes = {
  gameSetting: PropTypes.exact({
    time: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired
  }),
  question: PropTypes.exact({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.exact({
      src: PropTypes.string,
      genre: PropTypes.string,
      picture: PropTypes.string,
      artist: PropTypes.string
    })).isRequired
  }).isRequired,
  onAnswerClick: PropTypes.func
};


