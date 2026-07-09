// SkillCard.jsx
// Name: KUNTAL OJHA
// Date: 13-02-2025

// Node modules
import React from 'react';
import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div
      className={
        'flex items-center gap-4 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group ' +
        classes
      }
    >
      <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
        <img src={imgSrc} alt={label} width={40} height={40} />
      </figure>

      <div>
        <h3>{label}</h3>

        <p className='text-zinc-400 text-sm'>{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
