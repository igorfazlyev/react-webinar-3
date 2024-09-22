import React from 'react';
import './style.css';
import Head from '../head';
import List from '../list';
import Item from '../item';
import PropTypes from 'prop-types';
import ModalLayout from '../modal-layout';

function Cart(props) {
  const { cart, onDeleteItemFromCart, isVisible = false, onCloseCart } = props;
  const sum = cart.totalCartPrice;

  return (
    <ModalLayout isVisible>
      <div className="Cart">
        <Head title="Корзина" showingCart={true} onCloseCart={onCloseCart} />
        <List
          list={cart.items}
          buttonName={'Удалить'}
          onClickItemButton={onDeleteItemFromCart}
          showingCart={true}
        />
        <div className="Cart-total">
          <div className="Cart-totalText">Итого:</div>
          <Item item={{ code: '', price: sum }} displayingListItem={false} />
        </div>
      </div>
    </ModalLayout>
  );
}

Cart.propTypes = {
  cart: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        title: PropTypes.string,
        total: PropTypes.number.isRequired,
        quantity: PropTypes.number,
      }),
    ).isRequired,
    totalCartPrice: PropTypes.number.isRequired,
  }).isRequired,

  onDeleteItemFromCart: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
  onCloseCart: PropTypes.func.isRequired, // Function to close the cart modal, required
};
export default React.memo(Cart);
