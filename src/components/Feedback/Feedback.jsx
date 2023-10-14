import { useState } from 'react';
import { FeedbackStyle } from './Feedback.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { NotificationMassage } from './NotificationMassage/NotificationMassage';
import { Section } from './Section/Section';

const Feedback = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;
  const positiveFeedbackPercentage = Math.round(
    (good / (good + neutral + bad)) * 100
  );

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => {
          return prev + 1;
        });
        break;
      case 'neutral':
        setNeutral(prev => {
          return prev + 1;
        });
        break;
      case 'bad':
        setBad(prev => {
          return prev + 1;
        });
        break;
      default:
        console.log('Error');
    }
  };

  return (
    <FeedbackStyle>
      <Section title={'Please leave your feedback'} />
      <Section>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onChooseFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        {totalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        ) : (
          <NotificationMassage message={'There is no feedback'} />
        )}
      </Section>
    </FeedbackStyle>
  );
};

export default Feedback;
