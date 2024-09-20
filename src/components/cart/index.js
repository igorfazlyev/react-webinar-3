import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Head from '../head';
import List from '../list';

function Cart({ cart, OnDeleteItemFromCart, isVisible, OnCloseCart }) {
  console.log(isVisible);
  const sum = 100;
  return (
    <div className={isVisible ? 'Cart-container Cart-container_visible' : 'Cart-container '}>
      <div className="Cart">
        <Head title="Корзина" showingCart={true} onCloseCart={OnCloseCart} />
        <List list={cart} onClickItemButton={OnDeleteItemFromCart} />
        <div className="Cart-total">
          <div className="Cart-totalText">Итого</div>
          <div className="Cart-totalSum">{`${sum} ₽`}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
