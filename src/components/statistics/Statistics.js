import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  positivePercentage,
  total,
}) => {
  return (
    <ul className={css.Stats__list}>
      <li className={css.Stats__item}>
        Good:<span>{good}</span>
      </li>
      <li className={css.Stats__item}>
        Neutral:<span>{neutral}</span>
      </li>
      <li className={css.Stats__item}>
        Bad:<span>{bad}</span>
      </li>
      <li className={css.Stats__item}>
        Total:<span>{total}</span>
      </li>
      <li className={css.Stats__item}>
        Positive Feedback:<span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
