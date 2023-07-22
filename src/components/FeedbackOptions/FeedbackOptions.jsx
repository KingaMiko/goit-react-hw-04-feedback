import style from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={style.btn}
      >
        {option}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
