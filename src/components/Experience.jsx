// Experience.jsx
// Name: KUNTAL OJHA
// Date: 08-07-2026

// Node modules
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// React Icons
import { HiOutlineBriefcase } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

// Experience Items
const experienceItems = [
  {
    role: 'Assistant Professor',
    company: 'Sharad Institute Of Technology College Of Engineering (SITCOE)',
    location: 'Kolhapur, Maharashtra',
    duration: 'May 2026 – Present',
    current: true,
    points: [
      'Working as an Assistant Professor, teaching undergraduate students Advanced Java Programming.',
      'Teaching Software Testing and guiding students in practical implementations and problem-solving techniques.',
      'Guiding students in Data Structures using Java.',
    ],
  },
  {
    role: 'Assistant Professor',
    company: 'JB Institute of Engineering and Technology (JBIET)',
    location: 'Hyderabad, Telangana',
    duration: 'January 2025 – April 2026',
    current: false,
    points: [
      'Working as an Assistant Professor, teaching undergraduate students Data Structures (DS).',
      'Conducting lectures, mentoring students, and organizing academic activities.',
      'Guiding students in practical implementations and problem-solving techniques in DS.',
    ],
  },
  {
    role: 'Campus Captain',
    company: 'Coding Minutes India',
    location: 'Remote',
    duration: 'July 2021 – Present',
    current: true,
    points: [
      'Organize webinars and contact people through LinkedIn.',
      "Review courses and help improve course content and delivery.",
      'Help sell online courses through outreach and community engagement.',
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  itemRefs.current = [];

  const addItemRef = (el) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useGSAP(
    () => {
      // Timeline spine draws downward as you scroll through the section
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      );

      itemRefs.current.forEach((item, i) => {
        const dot = item.querySelector('.exp-dot');
        const card = item.querySelector('.exp-card');
        const glow = item.querySelector('.exp-glow');
        const fromSide = i % 2 === 0 ? -40 : 40;

        gsap.fromTo(
          card,
          { opacity: 0, x: fromSide, y: 20 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        gsap.fromTo(
          dot,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'back.out(3)',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        // Pulsing glow ring for current roles
        if (glow) {
          gsap.to(glow, {
            scale: 1.8,
            opacity: 0,
            duration: 1.6,
            ease: 'power1.out',
            repeat: -1,
            repeatDelay: 0.3,
          });
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section id='experience' className='section' ref={sectionRef}>
      <div className='container'>
        <h2 className='headline-2 mb-12 reveal-up'>Experience</h2>

        <div className='relative'>
          {/* Timeline spine */}
          <div className='absolute left-[21px] top-2 bottom-2 w-[2px] bg-zinc-700/60 md:left-1/2 md:-translate-x-1/2'>
            <div
              ref={lineRef}
              className='w-full h-full bg-gradient-to-b from-emerald-400 to-emerald-400/20 origin-top'
            />
          </div>

          <div className='flex flex-col gap-10 md:gap-14'>
            {experienceItems.map((exp, key) => {
              const alignRight = key % 2 !== 0;
              return (
                <div
                  key={key}
                  ref={addItemRef}
                  className='relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10'
                >
                  {/* Dot on the spine */}
                  <div className='absolute left-[13px] top-1 md:left-1/2 md:-translate-x-1/2'>
                    <div className='relative w-4 h-4'>
                      {exp.current && (
                        <span className='exp-glow absolute inset-0 rounded-full bg-emerald-400/60' />
                      )}
                      <span className='exp-dot absolute inset-0 rounded-full bg-emerald-400 ring-4 ring-zinc-950 grid place-items-center' />
                    </div>
                  </div>

                  {/* Spacer for alternating desktop layout */}
                  <div
                    className={
                      alignRight ? 'hidden md:block' : 'hidden md:block md:order-2'
                    }
                  />

                  <div
                    className={
                      'exp-card bg-zinc-800/50 p-6 rounded-2xl md:p-8 ring-1 ring-inset ring-zinc-50/5 hover:ring-emerald-400/20 transition-colors ' +
                      (alignRight ? 'md:order-1 md:text-right' : '')
                    }
                  >
                    <div
                      className={
                        'flex items-start gap-4 ' +
                        (alignRight ? 'md:flex-row-reverse' : '')
                      }
                    >
                      <div className='w-11 h-11 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0'>
                        <HiOutlineBriefcase className='text-xl' />
                      </div>

                      <div>
                        <h3 className='title-1'>{exp.role}</h3>
                        <p className='text-zinc-300 font-medium'>
                          {exp.company}
                        </p>
                        <p className='text-sm text-zinc-500'>
                          {exp.location}
                        </p>
                      </div>
                    </div>

                    <span
                      className={
                        'inline-grid h-8 text-sm text-emerald-400 bg-zinc-50/5 items-center px-3 rounded-lg mt-4 w-fit ' +
                        (alignRight ? 'md:ml-auto' : '')
                      }
                    >
                      {exp.duration}
                    </span>

                    <ul
                      className={
                        'mt-4 flex flex-col gap-2 ' +
                        (alignRight ? 'md:items-end' : '')
                      }
                    >
                      {exp.points.map((point, i) => (
                        <li
                          key={i}
                          className={
                            'text-zinc-400 text-sm md:text-base flex gap-2 ' +
                            (alignRight ? 'md:flex-row-reverse md:text-right' : '')
                          }
                        >
                          <span className='text-emerald-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0'></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;





// // Experience.jsx
// // Name: KUNTAL OJHA
// // Date: 08-07-2026

// // Node modules
// import React from 'react';

// // React Icons
// import { HiOutlineBriefcase } from 'react-icons/hi2';

// // Experience Items
// const experienceItems = [
//   {
//     role: 'Assistant Professor',
//     company: 'Sharad Institute Of Technology College Of Engineering (SITCOE)',
//     location: 'Kolhapur, Maharashtra',
//     duration: 'May 2026 – Present',
//     points: [
//       'Working as an Assistant Professor, teaching undergraduate students Advanced Java Programming.',
//       'Teaching Software Testing and guiding students in practical implementations and problem-solving techniques.',
//       'Guiding students in Data Structures using Java.',
//     ],
//   },
//   {
//     role: 'Assistant Professor',
//     company: 'JB Institute of Engineering and Technology (JBIET)',
//     location: 'Hyderabad, Telangana',
//     duration: 'January 2025 – April 2026',
//     points: [
//       'Working as an Assistant Professor, teaching undergraduate students Data Structures (DS).',
//       'Conducting lectures, mentoring students, and organizing academic activities.',
//       'Guiding students in practical implementations and problem-solving techniques in DS.',
//     ],
//   },
//   {
//     role: 'Campus Captain',
//     company: 'Coding Minutes India',
//     location: 'Remote',
//     duration: 'July 2021 – Present',
//     points: [
//       'Organize webinars and contact people through LinkedIn.',
//       "Review courses and help improve course content and delivery.",
//       'Help sell online courses through outreach and community engagement.',
//     ],
//   },
// ];

// const Experience = () => {
//   return (
//     <section id='experience' className='section'>
//       <div className='container'>
//         <h2 className='headline-2 mb-8 reveal-up'>Experience</h2>

//         <div className='flex flex-col gap-4'>
//           {experienceItems.map(
//             ({ role, company, location, duration, points }, key) => (
//               <div
//                 key={key}
//                 className='bg-zinc-800/50 p-6 rounded-2xl md:p-8 reveal-up'
//               >
//                 <div className='flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
//                   <div className='flex items-start gap-4'>
//                     <div className='w-11 h-11 rounded-lg grid place-items-center bg-emerald-400 text-zinc-950 shrink-0'>
//                       <HiOutlineBriefcase className='text-xl' />
//                     </div>

//                     <div>
//                       <h3 className='title-1'>{role}</h3>
//                       <p className='text-zinc-300 font-medium'>{company}</p>
//                       <p className='text-sm text-zinc-500'>{location}</p>
//                     </div>
//                   </div>

//                   <span className='h-8 text-sm text-emerald-400 bg-zinc-50/5 grid items-center px-3 rounded-lg shrink-0 md:ml-4 w-fit'>
//                     {duration}
//                   </span>
//                 </div>

//                 <ul className='mt-4 pl-2 flex flex-col gap-2 md:pl-[60px]'>
//                   {points.map((point, i) => (
//                     <li
//                       key={i}
//                       className='text-zinc-400 text-sm md:text-base flex gap-2'
//                     >
//                       <span className='text-emerald-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0'></span>
//                       <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Experience;

