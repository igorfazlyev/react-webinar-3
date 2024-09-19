import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CartContents from '../cart-contents';

function Controls({ cart, onAdd }) {
  return (
    <div className="Controls">
      <span>
        <CartContents cart={cart} />
      </span>
      <button onClick={() => onAdd()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default React.memo(Controls);
