import { useState, useCallback } from 'react';

export const useFeedback = initialState => {
  const [feedback, setFeedback] = useState(initialState);

  const onLeaveFeedback = useCallback(type => {
    setFeedback(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  }, []);

  const countTotalFeedback = useCallback(() => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  }, [feedback]);

  const countPositiveFeedbackPercentage = useCallback(() => {
    const total = countTotalFeedback();
    return total ? Math.round((feedback['good'] / total) * 100) : 0;
  }, [feedback, countTotalFeedback]);

  return {
    feedback,
    onLeaveFeedback,
    countTotalFeedback,
    countPositiveFeedbackPercentage,
  };
};
