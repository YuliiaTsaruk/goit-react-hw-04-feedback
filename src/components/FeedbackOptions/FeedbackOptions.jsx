import { Button, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options}) => {
  return (
    <Container>
      {options.map(option => {
        return (
          <Button onClick={onLeaveFeedback} key={option}>
            {option}
          </Button>
        );
      })}
    </Container>
  );
};
