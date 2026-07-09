// Education.jsx
// Name: KUNTAL OJHA
// Date: 08-07-2026

// Node modules
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// React Icons
import { HiOutlineAcademicCap } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

// Education Items
const educationItems = [
  {
    degree: 'Master of Technology in Computer Science and Engineering',
    short: 'M.Tech, CSE',
    institute: 'Bankura Unnayani Institute Of Engineering',
    location: 'Bankura, West Bengal',
    duration: '2022 – 2024',
    cgpa: 8.69,
  },
  {
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    short: 'B.Tech, CSE',
    institute: 'Bankura Unnayani Institute Of Engineering',
    location: 'Bankura, West Bengal',
    duration: '2018 – 2022',
    cgpa: 8.59,
  },
];

// Circle geometry for the CGPA ring
const RADIUS = 26;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Education = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  cardRefs.current = [];

  const addCardRef = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      cardRefs.current.forEach((card, i) => {
        const ring = card.querySelector('.cgpa-ring');
        const cgpaText = card.querySelector('.cgpa-text');
        const icon = card.querySelector('.edu-icon');
        const cgpaValue = parseFloat(card.dataset.cgpa);
        const offset = CIRCUMFERENCE - (cgpaValue / 10) * CIRCUMFERENCE;

        // 3D flip-in for the whole card
        gsap.fromTo(
          card,
          { opacity: 0, rotateY: -90, transformPerspective: 800 },
          {
            opacity: 1,
            rotateY: 0,
            duration: 0.9,
            ease: 'power4.out',
            delay: i * 0.15,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Icon spins in slightly after the card flips
        gsap.fromTo(
          icon,
          { rotate: -180, scale: 0 },
          {
            rotate: 0,
            scale: 1,
            duration: 0.6,
            ease: 'back.out(2.5)',
            delay: i * 0.15 + 0.3,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // CGPA ring fills like a progress gauge
        gsap.fromTo(
          ring,
          { strokeDashoffset: CIRCUMFERENCE },
          {
            strokeDashoffset: offset,
            duration: 1.2,
            ease: 'power2.out',
            delay: i * 0.15 + 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // CGPA number counts up alongside the ring
        const counter = { val: 0 };
        gsap.to(counter, {
          val: cgpaValue,
          duration: 1.2,
          delay: i * 0.15 + 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
          onUpdate: () => {
            if (cgpaText) cgpaText.textContent = counter.val.toFixed(2);
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id='education' className='section' ref={sectionRef}>
      <div className='container'>
        <h2 className='headline-2 mb-12 reveal-up'>Education</h2>

        <div className='grid gap-6 md:grid-cols-2'>
          {educationItems.map((edu, key) => (
            <div
              key={key}
              ref={addCardRef}
              data-cgpa={edu.cgpa}
              className='bg-zinc-800/50 p-6 rounded-2xl md:p-8 ring-1 ring-inset ring-zinc-50/5 hover:ring-emerald-400/20 transition-colors [transform-style:preserve-3d]'
            >
              <div className='flex items-start gap-4'>
                <div className='edu-icon w-11 h-11 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0'>
                  <HiOutlineAcademicCap className='text-xl' />
                </div>

                <div className='flex-1'>
                  <h3 className='title-1'>{edu.short}</h3>
                  <p className='text-zinc-300 font-medium text-sm mt-1'>
                    {edu.degree}
                  </p>
                </div>

                {/* CGPA progress ring */}
                <div className='relative w-16 h-16 shrink-0'>
                  <svg viewBox='0 0 64 64' className='w-16 h-16 -rotate-90'>
                    <circle
                      cx='32'
                      cy='32'
                      r={RADIUS}
                      fill='none'
                      stroke='currentColor'
                      className='text-zinc-700/60'
                      strokeWidth='5'
                    />
                    <circle
                      cx='32'
                      cy='32'
                      r={RADIUS}
                      fill='none'
                      stroke='currentColor'
                      className='cgpa-ring text-emerald-400'
                      strokeWidth='5'
                      strokeLinecap='round'
                      strokeDasharray={CIRCUMFERENCE}
                      strokeDashoffset={CIRCUMFERENCE}
                    />
                  </svg>
                  <div className='absolute inset-0 grid place-items-center'>
                    <span className='cgpa-text text-xs font-semibold text-emerald-400'>
                      0.00
                    </span>
                  </div>
                </div>
              </div>

              <div className='mt-5 flex flex-wrap items-center gap-2'>
                <span className='h-8 text-sm text-emerald-400 bg-zinc-50/5 grid items-center px-3 rounded-lg w-fit'>
                  {edu.duration}
                </span>
                <span className='h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg w-fit'>
                  {edu.institute}
                </span>
              </div>
              <p className='text-sm text-zinc-500 mt-2'>{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;



// // Education.jsx
// // Name: KUNTAL OJHA

// // Node modules
// import React from 'react';

// // React Icons
// import { HiOutlineAcademicCap } from 'react-icons/hi2';

// // Education Items
// const educationItems = [
//   {
//     degree: 'Master of Technology in Computer Science and Engineering',
//     institute: 'Bankura Unnayani Institute Of Engineering',
//     location: 'Bankura, West Bengal',
//     duration: '2022 – 2024',
//     score: 'CGPA: 8.69/10',
//   },
//   {
//     degree: 'Bachelor of Technology in Computer Science and Engineering',
//     institute: 'Bankura Unnayani Institute Of Engineering',
//     location: 'Bankura, West Bengal',
//     duration: '2018 – 2022',
//     score: 'CGPA: 8.59/10',
//   },
// ];

// const Education = () => {
//   return (
//     <section id='education' className='section'>
//       <div className='container'>
//         <h2 className='headline-2 mb-8 reveal-up'>Education</h2>

//         <div className='flex flex-col gap-4'>
//           {educationItems.map(
//             ({ degree, institute, location, duration, score }, key) => (
//               <div
//                 key={key}
//                 className='bg-zinc-800/50 p-6 rounded-2xl md:p-8 reveal-up'
//               >
//                 <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
//                   <div className='flex items-start gap-4'>
//                     <div className='w-11 h-11 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0'>
//                       <HiOutlineAcademicCap className='text-xl' />
//                     </div>

//                     <div>
//                       <h3 className='title-1'>{degree}</h3>
//                       <p className='text-zinc-300 font-medium'>{institute}</p>
//                       <p className='text-sm text-zinc-500'>{location}</p>
//                     </div>
//                   </div>

//                   <div className='flex flex-col items-start gap-2 md:items-end md:ml-4 shrink-0'>
//                     <span className='h-8 text-sm text-emerald-400 bg-zinc-50/5 grid items-center px-3 rounded-lg w-fit'>
//                       {duration}
//                     </span>
//                     <span className='text-sm text-zinc-400'>{score}</span>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
