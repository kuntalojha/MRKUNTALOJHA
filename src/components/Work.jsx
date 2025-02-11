import React from 'react';
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: './images/project_1.png',
    title: 'X ypo',
    tags: ['HTML', 'CSS', 'Git', 'GitHub'],
    projectLink: 'https://kuntalojha.github.io/X-ypo/',
  },
  {
    imgSrc: './images/project_2.png',
    title: 'OmniFood',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Netlify'],
    projectLink: 'https://omnifood-kuntal.netlify.app/',
  },
  {
    imgSrc: './images/project_3.png',
    title: 'Portfolio Website',
    tags: ['React', 'TailwindCSS', 'JavaScript', 'Git', 'GitHub'],
    projectLink: '',
  },
  {
    imgSrc: './images/project_4.png',
    title: 'knowindia npm package',
    tags: ['Node.js', 'JavaScript', 'npm', 'Git', 'GitHub'],
    projectLink: 'https://www.npmjs.com/package/knowindia',
  },
  {
    imgSrc: './images/project_5.png',
    title: 'E-Learning Website',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'],
    projectLink: 'https://kuntalojha.github.io/learning-website/',
  },
  {
    imgSrc: './images/project_6.png',
    title: 'slangs npm package',
    tags: ['Node.js', 'JavaScript', 'npm', 'Git', 'GitHub'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio',
  },
];

const Work = () => {
  return (
    <section id='work' className='section'>
      <div className='container'>
        <h2 className='headline-2 mb-8'>My poertfolio highlights</h2>

        <div className='grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,_minmax(280px,1fr))]'>
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
