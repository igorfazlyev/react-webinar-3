import React from 'react';
import './style.css';
import Head from '../head';
import List from '../list';
import Item from '../item';

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
          <div className="Cart-totalText">Итого:</div>
          <Item item={{ code: '', price: sum }} displayingListItem={false} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
