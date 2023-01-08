// import PropTypes from 'prop-types';
import React from 'react';
import css from './GiveFeedback.module.css';

class GiveFeedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const percentPositiveFeedbacks = Math.round(
      (this.state.good * 100) / this.countTotalFeedback()
    );
    return this.state.good ? percentPositiveFeedbacks : 0;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2 className={css.title}>Please leave feedback</h2>
        <ul className={css.button__list}>
          <li>
            <button
              className={css.button}
              onClick={this.handleIncrementGood}
              type="button"
            >
              Good
            </button>
          </li>
          <li>
            <button
              className={css.button}
              onClick={this.handleIncrementNeutral}
              type="button"
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className={css.button}
              onClick={this.handleIncrementBad}
              type="button"
            >
              Bad
            </button>
          </li>
        </ul>
        <h2 className={css.title}>Statistics</h2>
        <ul className={css.statistics__list}>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{this.countTotalFeedback()}</span>
          </li>
          <li>
            Positive feedback:{' '}
            <span>{this.countPositiveFeedbackPercentage()} %</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default GiveFeedback;

// в App

// import React from "react";
// import GiveFeedback from "./GiveFeedback/GiveFeedback"

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,

//         color: '#010101'
//       }}
//     >
//      <GiveFeedback/>
//     </div>
//   );
// };
