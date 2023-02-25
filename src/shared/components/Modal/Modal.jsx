import { Component } from 'react';
import { createPortal } from 'react-dom';
import  PropTypes from 'prop-types';
import styles from './modal.module.css';

const port = document.querySelector('#root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handlerKey);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlerKey);
  }
  handlerKey = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlerOverlay = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { largeImageURL, tags } = this.props.item;
    return createPortal(
      <div className={styles.overlay} onClick={this.handlerOverlay}>
        <div className={styles.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      port
    );
  }
}
Modal.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags:  PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
export default Modal;