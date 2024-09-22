import React from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function CartContents(props) {
  const { cart } = props;
  const numOfItemsString = plural(cart.itemsInCart, {
    one: 'товар',
    few: 'товара',
    many: 'товаров',
  });
  const whatsInTheBox =
    cart.itemsInCart > 0
      ? `${cart.itemsInCart} ${numOfItemsString} / ${Number(cart.totalCartPrice).toLocaleString('ru')} ₽`
      : ' пусто ';
  return (
    <span className="Contents">
      В корзине: <span className="price-quantity">{whatsInTheBox}</span>
    </span>
  );
}

CartContents.propTypes = {
  cart: PropTypes.shape({
    itemsInCart: PropTypes.number.isRequired,
    totalCartPrice: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(CartContents);
