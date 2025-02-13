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
  {
    label: 'Website',
    href: 'https://kuntalojha.github.io/MRKUNTALOJHA/',
  },
];

const Footer = () => {
  return (
    <footer className='section'>
      <div className='container'>
        <div className='lg:grid lg:grid-cols-2 '>
          <div className='mb-10'>
            <h2 className='headline-2 mb-8 lg:max-w-[12ch]'>
              Let&apos;s work together & grow together
            </h2>
            <ButtonPrimary
              href='mailto:kuntalojha26398@gmail.com'
              label='Start project'
              icon={<FaChevronRight />}
            />
          </div>

          <div className='grid grid-cols-2 gap-4 lg:pl-20 '>
            <div>
              <p className='mb-4'>Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='mb-4'>Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target='_blank'
                      className='block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between pt-10 mb-8 '>
          <a href='' className=''>
            <img src='./images/logo.png' alt='Logo' width={40} height={40} />
          </a>

          <p className='text-zinc-500 text-sm'>
            &copy; {new Date().getFullYear()}{' '}
            <span className='text-zinc-200'> by Kuntal Ojha</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
