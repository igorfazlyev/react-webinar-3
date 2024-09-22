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
  cart: PropTypes.shape({
    itemsInCart: PropTypes.number.isRequired,
    totalCartPrice: PropTypes.number.isRequired,
  }).isRequired,
  onOpenCart: PropTypes.func.isRequired,
};

export default React.memo(Controls);
