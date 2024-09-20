import React from 'react';
import './style.css';
import Head from '../head';
import List from '../list';

function Cart({ cart, onDeleteItemFromCart, isVisible, onCloseCart }) {
  const sum = 100;
  return (
    <div className={isVisible ? 'Cart-container Cart-container_visible' : 'Cart-container '}>
      <div className="Cart">
        <Head title="Корзина" showingCart={true} onCloseCart={onCloseCart} />
        <List list={cart} buttonName={'Удалить'} onClickItemButton={onDeleteItemFromCart} />
        <div className="Cart-total">
          <div className="Cart-totalText">Итого</div>
          <div className="Cart-totalSum">{`${sum} ₽`}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
