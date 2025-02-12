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
              I am a passionate Full-Stack MERN Developer and an Assistant
              Professor at JB Institute of Engineering and
              Technology(JBIET),Hyderabad, where I teach Data Structures. With
              an M.Tech in Computer Science, I specialize in building scalable
              web applications and open-source projects. As a Campus Captain at
              Coding Minutes, I mentor students and organize tech webinars. My
              expertise includes JavaScript, React, Node.js, and MongoDB, with
              hands-on experience in developing robust applications like a
              Restaurant Management System and an npm package, KnowIndia. I am
              always eager to collaborate on innovative projects and contribute
              to the developer community.
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
