import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import CartContents from '../cart-contents';

function Controls({ cart, onOpenCart }) {
  return (
    <div className="Controls">
      <span>
        <CartContents cart={cart} />
      </span>
      <button onClick={() => onOpenCart()}>Перейти</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

export default React.memo(Controls);
