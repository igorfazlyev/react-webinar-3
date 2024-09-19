import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Item(props) {
  const { onButtonClick = () => {} } = props;
  const { buttonName = 'Добавить' } = props;

  const callbacks = {
    onClick: e => {
      e.stopPropagation();
      onButtonClick(props.item.code);
    },
  };

  return (
    <div className={'Item'}>
      <div className="Item-code">{props.item.code}</div>
      <div className="Item-title">{props.item.title} </div>
      <div className="Item-price">{Number(props.item.price).toLocaleString('ru')} ₽</div>
      <div className="Item-actions">
        <button onClick={callbacks.onClick}>{buttonName}</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    buttonName: PropTypes.string,
  }).isRequired,
  onButtonClick: PropTypes.func,
};

export default React.memo(Item);
