import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class ArtistPage extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      answers: []
    };

    this.trackChangeHandler = this.trackChangeHandler.bind(this);
  }

  trackChangeHandler(evt) {
    const {onAnswerClick} = this.props;
    const {target} = evt;

    if (target.checked) {
      this.setState((prevState) => {
        prevState.answers.push(target.value);
      });
    }

    onAnswerClick([...new Set(this.state.answers)]);
  }

  render() {
    const {gameSetting, question} = this.props;

    return <section className="game game--artist">
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
          {Array(gameSetting.mistakes).fill().map((it, idx) => <div key={Math.random() + idx} className="wrong"/>)}
        </div>
      </header>

      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <div className="game__track">
          <div className="track">
            <button className="track__button track__button--play" type="button"/>
            <div className="track__status">
              <audio/>
            </div>
          </div>
        </div>

        <form className="game__artist">
          {question.answers.map(({picture, artist}, idx) => <div key={Math.random() + idx} className="artist">
            <input
              className="artist__input visually-hidden"
              type="radio"
              name="answer"
              value={`artist-${idx + 1}`}
              id={`answer-${idx + 1}`}
              onChange={this.trackChangeHandler}
            />
            <label className="artist__name" htmlFor={`answer-${idx + 1}`}>
              <img className="artist__picture" src={picture} alt={artist} />
              {artist}
            </label>
          </div>)}
        </form>
      </section>
    </section>;
  }
}

ArtistPage.propTypes = {
  gameSetting: PropTypes.exact({
    time: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired
  }),
  question: PropTypes.exact({
    type: PropTypes.string,
    song: PropTypes.exact({
      artist: PropTypes.string,
      src: PropTypes.string
    }),
    answers: PropTypes.arrayOf(PropTypes.exact({
      picture: PropTypes.string,
      artist: PropTypes.string
    })).isRequired
  }).isRequired,
  onAnswerClick: PropTypes.func
};
