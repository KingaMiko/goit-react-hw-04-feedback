import React from 'react';
import { useFeedback } from './hooks/useFeedback';
import style from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const GOOD = 'good';
const NEUTRAL = 'neutral';
const BAD = 'bad';

const INITIAL_STATE = { [GOOD]: 0, [NEUTRAL]: 0, [BAD]: 0 };

const App = () => {
  const {
    feedback,
    onLeaveFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  } = useFeedback(INITIAL_STATE);

  const options = Object.keys(INITIAL_STATE);

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={feedback[GOOD]}
            neutral={feedback[NEUTRAL]}
            bad={feedback[BAD]}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
