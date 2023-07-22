import React, { useState, useCallback } from 'react';
import style from './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const App = () => {
  const [feedback, setFedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = useCallback(state => {
    setFedback(prevState => ({
      ...prevState,
      [state]: prevState[state] + 1,
    }));
  }, []);

  const countTotalFeedback = useCallback(() => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  }, [feedback]);

  const countPositiveFeedbackPercentage = useCallback(() => {
    const { good } = feedback;
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }, [feedback, countTotalFeedback]);

  const { good, neutral, bad } = feedback;
  const options = Object.keys(feedback);

  return (
    <div className={style.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
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
