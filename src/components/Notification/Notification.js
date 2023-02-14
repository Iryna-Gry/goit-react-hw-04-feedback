import PropTypes from 'prop-types';
import css from 'components/Notification/Notification.module.css';

export const Notification = ({ message }) => {
  return <p className={css.Feedback__text}>{message}</p>;
};
Notification.propTypes = {
  message: PropTypes.PropTypes.string.isRequired,
};
