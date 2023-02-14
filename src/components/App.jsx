import { Container } from 'components/container/Container.styled';
import { FirstLetter, LogoTitle } from 'components/logo';
import { Statistics } from 'components/statistics/Statistics';
import { Section } from 'components/Section/Section';
import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackBtnsSet = ['good', 'neutral', 'bad'];

  const feedbackCountIncrement = event => {
    const value = event.target.value;

    switch (value) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return Math.round((good / countTotalFeedback()) * 100);
    }
  };
  return (
    <Container>
      <LogoTitle href="#">
        <FirstLetter>E</FirstLetter>xpresso <FirstLetter>C</FirstLetter>afe
      </LogoTitle>
      <Section title="Please, leave your feedback" className="Button-container">
        <FeedbackOptions
          options={feedbackBtnsSet}
          onLeaveFeedback={feedbackCountIncrement}
        ></FeedbackOptions>
      </Section>
      {countTotalFeedback() === 0 ? (
        <Notification message="There is no feedback"></Notification>
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            positivePercentage={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          ></Statistics>
        </Section>
      )}
    </Container>
  );
};
