import { PropTypes } from 'prop-types';
import css from './ErrorView.module.css';

const ErrorView = ({ message, tryAgain }) => {
  return (
    <div className={css.container}>
      <p className={css.text} data-text="Error, some went wrong...">
        Error, some went wrong...
      </p>
      <button className={css.button} type="button" onClick={tryAgain}>
        Try again
      </button>
      <span className={css.message}>{message}</span>
    </div>
  );
};
ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
  tryAgain: PropTypes.func.isRequired,
};
export default ErrorView;