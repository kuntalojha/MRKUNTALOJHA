import React from 'react';

const Hero = () => {
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
              Building Scalable Modern Websites for the Future
            </h2>

            <div className='flex items-center gap-3'>
              ButtonPrimary ButtonOutline
            </div>
          </div>

          <div className='hidden lg:block'>
            <figure className='w-full max-h-[450px] max-w-[480px]ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-60% rounded-[60px] overflow-hidden'>
              <img
                src='./images/hero_banner2.png'
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
