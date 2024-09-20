import React from 'react';
import './style.css';
import Head from '../head';
import List from '../list';

function Cart(props) {
  const { cart, onDeleteItemFromCart, isVisible, onCloseCart } = props;
  const sum = cart.reduce((sumTotal, item) => sumTotal + item.total, 0);
  return (
    <div className={isVisible ? 'Cart-container Cart-container_visible' : 'Cart-container '}>
      <div className="Cart">
        <Head title="Корзина" showingCart={true} onCloseCart={onCloseCart} />
        <List
          list={cart}
          buttonName={'Удалить'}
          onClickItemButton={onDeleteItemFromCart}
          showingCart={true}
        />
        <div className="Cart-total">
          <div className="Cart-totalText">Итого:{` ${sum} ₽`}</div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
