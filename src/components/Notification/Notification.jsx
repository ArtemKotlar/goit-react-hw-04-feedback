import PT from 'prop-types';
import { Item } from './Notification.styled';

const Notification = ({ message }) => {
  return <Item>{message}</Item>;
};

export default Notification;

Notification.propTypes = {
  massage: PT.string,
};
