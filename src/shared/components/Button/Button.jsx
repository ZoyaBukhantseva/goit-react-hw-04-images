import PropTypes from 'prop-types';
import css from './button.module.css';

const Button = ({ onLoadMore }) => {
  return (
    <button className={css.button} onClick={onLoadMore} type="button">
      Load more...
    </button>
  );
};

export default Button;
Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired
};