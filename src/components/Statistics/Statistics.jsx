import { Notification } from '../Notification/Notification';
import { Container } from './Statistics.styled';
export const Statistics = ({
  state: { good, neutral, bad },
  countPositiveFeedback,
  total,
}) => {
  return (
    <div>
      {total > 0 ? (
        <Container>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {countPositiveFeedback}%</p>
        </Container>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
