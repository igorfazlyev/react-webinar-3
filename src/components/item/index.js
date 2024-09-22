import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item(props) {
  const { onButtonClick = () => {} } = props;
  const { buttonName = 'Добавить' } = props;
  const { showingCart = false } = props;
  const { displayingListItem = true } = props;

  const callbacks = {
    onClick: e => {
      e.stopPropagation();
      onButtonClick(props.item.code);
    },
  };

  return (
    <div className={'Item'}>
      {displayingListItem && <div className="Item-code">{props.item.code}</div>}
      {displayingListItem && <div className="Item-title">{props.item.title} </div>}

      <div className="Item-price">{Number(props.item.price).toLocaleString('ru')} ₽</div>
      {showingCart && displayingListItem && (
        <div className="Item-price"> {`${props.item.quantity} шт`}</div>
      )}
      {displayingListItem && (
        <div className="Item-actions">
          <button onClick={callbacks.onClick}>{buttonName}</button>
        </div>
      )}
    </div>
  );
}

Item.propTypes = {
  onButtonClick: PropTypes.func,
  buttonName: PropTypes.string,
  showingCart: PropTypes.bool,
  displayingListItem: PropTypes.bool,
  item: PropTypes.shape({
    code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    quantity: PropTypes.number,
  }),
};
export default React.memo(Item);
