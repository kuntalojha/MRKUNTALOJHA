import React from 'react';
import PropTypes from 'prop-types';

import { IoMdDownload } from 'react-icons/io';
import { IoArrowDownOutline } from 'react-icons/io5';


const ButtonPrimary = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-primary ' + classes}>
        {label}
        {icon ? <IoMdDownload className='icon' /> : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-primary ' + classes}>
        {label}
        {icon ? <IoMdDownload className='icon cv' /> : undefined}
      </button>
    );
  }
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

//Outline Button
const ButtonOutline = ({ href, target = '_self', label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target} className={'btn btn-outline ' + classes}>
        {label}
        {icon ? <IoArrowDownOutline className='icon' /> : undefined}
      </a>
    );
  } else {
    return (
      <button className={'btn btn-outline ' + classes}>
        {label}
        {icon ? <IoArrowDownOutline className='icon cv' /> : undefined}
      </button>
    );
  }
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
};

export { ButtonPrimary, ButtonOutline };
