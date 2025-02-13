import React from 'react';

// Component
import { ButtonPrimary } from './Button';
import { FaChevronRight } from 'react-icons/fa6';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Experience',
    href: '#experience',
  },
  {
    label: 'Reviews',
    href: '#reviews',
  },
  {
    label: 'Contact me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/kuntalojha',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mrkuntalojha',
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/kuntalojha',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mrkuntalojha',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/kuntalojha',
  },
];

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <div className=''>
          <div className=''>
            <h2 className='headline-1'>Let&apos;s work together!</h2>
            <ButtonPrimary
              href='mailto:kuntalojha26398@gmail.com'
              label='Start project'
              icon={<FaChevronRight />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
