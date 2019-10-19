import React from "react";
import PropTypes from "prop-types";

export const WelcomePage = (props) => {
  const {settings, startGame} = props;

  return <section className="welcome">
    <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" /></div>
    <button className="welcome__button" onClick={startGame}><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {settings.TIME} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {settings.MISTAKES} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

WelcomePage.propTypes = {
  settings: PropTypes.exact({
    TIME: PropTypes.number.isRequired,
    MISTAKES: PropTypes.number.isRequired
  }),
  startGame: PropTypes.func
};

