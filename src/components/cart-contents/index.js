import React from 'react';
//import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function CartContents({ cart }) {
  const numOfItems = cart.length;
  const totalPrice = cart.reduce((sumTotal, item) => sumTotal + item.total, 0);
  const numOfItemsString = plural(numOfItems, {
    one: 'товар',
    few: 'товара',
    many: 'товаров',
  });

  return (
    <span className="Contents">
      В корзине:{' '}
      <span className="price-quantity">
        {numOfItems} {numOfItemsString} / {Number(totalPrice).toLocaleString('ru')} ₽
      </span>
    </span>
  );
}

export default React.memo(CartContents);
