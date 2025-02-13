// Hero.jsx
// Name: KUNTAL OJHA
// Date: 13-02-2025

// Node modules
import React from 'react';

// Component
import { ButtonOutline, ButtonPrimary } from './Button';

// React Icons
import { IoMdDownload } from 'react-icons/io';
import { IoArrowDownOutline } from 'react-icons/io5';

const Hero = () => {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Open the CV file in a new tab
    window.open('/MRKUNTALOJHA/test.pdf', '_blank');
  };

  // Function to handle scroll down to 'About' section
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id='home' className=' pt-28 lg:pt-36'>
        <div className=' container lg:grid lg:grid-cols-2 items-center lg:gap-10'>
          <div>
            <div className=' flex items-center gap-3'>
              <figure className='img-box w-9 h-9 rounded-lg'>
                <img
                  src='./images/kuntal.jpeg'
                  alt='Kuntal Ojha Portrait'
                  className='img-cover'
                  width={40}
                  height={40}
                />
              </figure>

              <div className='flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide '>
                <span className='relative w-2 h-2 rounded-full bg-emerald-400'>
                  <span className='absolute inset-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping'></span>
                </span>
                Available for work
              </div>
            </div>
            <h2 className='headline-1 max-w[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10'>
              Building Scalable & Impactful Web Solutions with MERN Stack
            </h2>

            <div className='flex items-center gap-3'>
              <ButtonPrimary
                label='Download CV'
                icon={<IoMdDownload />}
                onClick={handleDownloadCV}
              />
              <ButtonOutline
                label='Scroll Down'
                icon={<IoArrowDownOutline />}
                onClick={handleScrollDown}
              />
            </div>
          </div>

          <div className='hidden lg:block'>
            <figure className='w-full max-h-[450px] max-w-[480px]ml-auto bg-gradient-to-t from-emerald-400 via-25% via-emerald-400/40 to-60% rounded-[60px] overflow-hidden'>
              <img
                src='./images/hero_banner.png'
                alt='Kuntal Ojha'
                className='w-full'
                width={656}
                height={800}
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
