import React from 'react';
import PropTypes from 'prop-types';
import Item from '../item';
import './style.css';

function List(props) {
  const {
    list,
    onClickItemButton = () => {},
    buttonName = 'Добавить',
    showingCart = false,
  } = props;

  return (
    <div className="List">
      {list.map(item => (
        <div key={item.code} className="List-item">
          <Item
            item={item}
            onButtonClick={onClickItemButton}
            buttonName={buttonName}
            showingCart={showingCart}
          />
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
  buttonName: PropTypes.string,
  showingCart: PropTypes.bool,
};

export default React.memo(List);
