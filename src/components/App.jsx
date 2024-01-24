
import { Section } from './Section/Section';
import { GlobalStyle } from './GlobalStyled';
import { Container } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { useState } from 'react';

export const App = () => {
 const [good, setGood] = useState(0);
 const [neutral, setNeutral] = useState(0);
 const [bad, setBad] = useState(0);

const onLeaveFeedback = evt => {
  const value = evt.target.textContent.toLowerCase();
  switch (value) {
    case "good": 
    setGood(good => good+1)
      break;

      case "neutral": 
      setNeutral(neutral => neutral + 1)
      break;

      case "bad":
        setBad(bad => bad + 1)
      break;
  
    default:
      break;
  }
};


const countTotalFeedback = () => {
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  const total = countTotalFeedback();
  return Math.round((good / total) * 100);
};


return (
  <Container>
    <Section title="Please leave feedback">
      <FeedbackOptions
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>

    <Section title="Statistics">
      <Statistics
        good={good} neutral={neutral} bad={bad}
        total={countTotalFeedback()}
        countPositiveFeedback={countPositiveFeedbackPercentage}
      />
    </Section>
    <GlobalStyle />
  </Container>
      );

};






// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

  // onLeaveFeedback = evt => {
  //   const value = evt.target.textContent.toLowerCase();
  //   this.setState(prevState => {
  //     return {
  //       [value]: prevState[value] + 1,
  //     };
  //   });
  // };

  // countTotalFeedback = () => {
  //   const { good, neutral, bad } = this.state;
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;
  //   const total = this.countTotalFeedback();
  //   return Math.round((good / total) * 100);
  // };

//   render() {
//     const options = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const countPositiveFeedback = this.countPositiveFeedbackPercentage();
    // return (
    //   <Container>
    //     <Section title="Please leave feedback">
    //       <FeedbackOptions
    //         options={options}
    //         onLeaveFeedback={this.onLeaveFeedback}
    //       />
    //     </Section>

    //     <Section title="Statistics">
    //       <Statistics
    //         state={this.state}
    //         total={total}
    //         countPositiveFeedback={countPositiveFeedback}
    //       />
    //     </Section>
    //     <GlobalStyle />
    //   </Container>
//     );
//   }
// }
