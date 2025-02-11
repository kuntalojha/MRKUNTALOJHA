import React from 'react';
import PropTypes from 'prop-types';
import { IoStarSharp } from 'react-icons/io5';

const ratings = new Array(5);
ratings.fill({
  icon: <IoStarSharp />,
  style: {
    fontVariantionSettings: '"FILL"1',
  },
});

console.log(ratings);

const ReviewCard = ({ content, name, imgSrc, company, classes }) => {
  return (
    <div
      className={
        'bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ' +
        classes
      }
    >
      <div className='flex items-center gap-1 mb-3 '>
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            style={style}
            className=' text-amber-500 text-[18px] '
          >
            {icon}
          </span>
        ))}
      </div>

      <p className='text-zinc-400 mb-8 '>{content}</p>
      <div className='flex items-center gap-3 mt-auto '>
        <figure className='img-box rounded-lg '>
          <img
            src={imgSrc}
            alt={name}
            className='img-cover'
            width={44}
            height={44}
            loading='lazy'
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className='text-xs text-zinc-400 tracking-wider '>{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};

export default ReviewCard;
