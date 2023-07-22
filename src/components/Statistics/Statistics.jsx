import style from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={style.list}>
      <li className={style.item}>Good: {good}</li>
      <li className={style.item}>Neutral: {neutral}</li>
      <li className={style.item}>Bad: {bad}</li>
      <p>___________</p>
      <li className={style.item}>Total: {total}</li>
      <li className={style.item}>Positive feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
