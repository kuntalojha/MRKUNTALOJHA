// Desc: Button Component
// Name: KUNTAL OJHA
// Date: 13-02-2025

// Node modules
import React from 'react';
import PropTypes from 'prop-types';

//Primary Button
const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={'btn btn-primary ' + classes}
        onClick={onClick}
      >
        {label}
        {icon && <span className='icon'>{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes} onClick={onClick}>
        {label}
        {icon && <span className='icon cv'>{icon}</span>}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node,
  classes: PropTypes.string,
  onClick: PropTypes.func, // onClick prop type
};

//Outline Button
const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={'btn btn-outline ' + classes}
        onClick={onClick}
      >
        {label}
        {icon && <span className='icon'>{icon}</span>}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes} onClick={onClick}>
        {label}
        {icon && <span className='icon'>{icon}</span>}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node,
  classes: PropTypes.string,
  onClick: PropTypes.func, // onClick prop type
};
export { ButtonPrimary, ButtonOutline };
