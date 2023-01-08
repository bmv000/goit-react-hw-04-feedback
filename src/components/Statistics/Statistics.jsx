import { PropTypes } from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul className={css.statistics__list}>
      <li className={css.statistics__item}>
        Good: <span>{good}</span>
      </li>
      <li className={css.statistics__item}>
        Neutral: <span>{neutral}</span>
      </li>
      <li className={css.statistics__item}>
        Bad: <span>{bad}</span>
      </li>
      <li className={css.statistics__item}>
        Total: <span>{total}</span>
      </li>
      <li className={css.statistics__item}>
        Positive feedback:
        <span>{positivePercentage} %</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
