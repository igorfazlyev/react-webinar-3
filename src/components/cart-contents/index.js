import React from 'react';
//import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function CartContents(props) {
  const { cart } = props;
  const numOfItems = cart.length;
  const totalPrice = cart.reduce((sumTotal, item) => sumTotal + item.total, 0);
  const numOfItemsString = plural(numOfItems, {
    one: 'товар',
    few: 'товара',
    many: 'товаров',
  });
  const whatsInTheBox =
    numOfItems > 0
      ? `${numOfItems} ${numOfItemsString} / ${Number(totalPrice).toLocaleString('ru')} ₽`
      : ' пусто ';
  return (
    <span className="Contents">
      В корзине: <span className="price-quantity">{whatsInTheBox}</span>
    </span>
  );
}

export default React.memo(CartContents);
