import PT from 'prop-types';
import { Button, List } from './Feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map((option, index) => (
        <Button
          type="button"
          key={index}
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {option}
        </Button>
      ))}
    </List>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PT.func.isRequired,
  options: PT.arrayOf(PT.string).isRequired,
};
