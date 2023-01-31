import PT from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <List>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positiv feedback {positive}%</li>
    </List>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PT.number.isRequired,
  neutral: PT.number.isRequired,
  bad: PT.number.isRequired,
  total: PT.number.isRequired,
  positive: PT.number.isRequired,
};
