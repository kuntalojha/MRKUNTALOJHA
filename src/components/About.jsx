import React from 'react';

const aboutItems = [
  {
    label: 'Project done',
    number: 6,
  },
  {
    label: 'Years of experience',
    number: 1,
  },
];

const About = () => {
  return (
    <>
      <section id='about' className='section'>
        <div className='container'>
          <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 '>
            <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]'>
              A passionate full-stack web developer specializing in the MERN
              stack and proficient in JavaScript, HTML, and CSS. Experienced in
              building scalable web applications, integrating APIs, and
              optimizing performance. Currently pursuing an M.Tech in Computer
              Science & Engineering and working as an Assistant Professor at
              JBIET, Hyderabad, teaching Data Structures (DS). I conduct
              lectures, mentor students, and guide them in practical
              problem-solving. Fluent in English, Bengali, and Hindi, I am keen
              on contributing to web development and academic research.
            </p>

            <div className='flex flex-wrap items-center gap-4 md:gap-8'>
              {aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className='flex items-center md:mb-2 '>
                    <span className='text-xl font-semibold md:text-4xl'>
                      {number}
                    </span>
                    <span className='text-emerald-400 font-semibold md:text-3xl'>
                      +
                    </span>
                  </div>
                  <p className='text-sm text-emerald-400'>{label}</p>
                </div>
              ))}

              <img
                src='./images/logo.png'
                className='ml-auto md:w-[40px] md:h-[40px]'
                alt='logo'
                width={40}
                height={40}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
