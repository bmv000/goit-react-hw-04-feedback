import { useState } from 'react';

import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const optionsForFeedback = ['good', 'neutral', 'bad'];
  const total = good + neutral + bad;

  const onLeaveFeedback = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;
      default:
        return;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedbackPercentage = Math.round((good * 100) / total);
    return good ? positiveFeedbackPercentage : 0;
  };

  return (
    <>
      <Section title="Please leave your feedback for us">
        <FeedbackOptions
          options={optionsForFeedback}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(good, total)}
          />
        )}
      </Section>
    </>
  );
};
export default App;
