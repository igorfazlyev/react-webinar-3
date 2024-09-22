import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head(props) {
  const { title, showingCart = false, onCloseCart = () => {} } = props;
  //console.log(showingCart);
  const callbacks = {
    onCloseCart: () => {
      onCloseCart();
    },
  };
  return (
    <div className={`Head ${showingCart ? 'Rounded-corners' : ''}`}>
      <h1>{title}</h1>
      <div className="Head-actions">
        {showingCart ? <button onClick={callbacks.onCloseCart}>Закрыть</button> : ''}
      </div>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node.isRequired,
  showingCart: PropTypes.bool,
  onCloseCart: PropTypes.func,
};
export default React.memo(Head);
