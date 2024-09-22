import React from 'react';
import PropTypes from 'prop-types';
//import { cn as bem } from '@bem-react/classname';
import './style.css';

function ModalLayout(props) {
  const { children, isVisible = false } = props;
  //const cn = bem('ModalLayout');

  return (
    <div className={isVisible ? 'Modal-container-visible' : 'Modal-container-invisible'}>
      <div>{children}</div>
    </div>
  );
}

ModalLayout.propTypes = {
  children: PropTypes.node,
  isVisible: PropTypes.bool,
};

export default React.memo(ModalLayout);
