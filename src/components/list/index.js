import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function List({ list, onClickItemButton = () => {} }) {
  console.log(onClickItemButton);
  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item item={item} onButtonClick={onClickItemButton} buttonName="Добавить" />
        </div>
      ))}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number,
    }),
  ).isRequired,
  onClickItemButton: PropTypes.func,
};

export default React.memo(List);
