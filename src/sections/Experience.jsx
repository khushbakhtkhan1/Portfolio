import React from 'react';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/solid';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Iris Labs',
    duration: 'Sept 2023 - June 2025',
    description: [
      'Built React/Next.js frontends with modern JavaScript frameworks and responsive design principles.',
      'Developed FastAPI backends for AI projects, ensuring scalable and efficient API architecture.',
      'Created and implemented n8n workflows for automation, collaborating with ML and backend teams.',
      'Integrated AI/ML solutions into web applications, enhancing user experience and functionality.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'Smart City Lab, NCAI',
    duration: 'Jun 2023 - Aug 2023',
    description: [
      'Contributed to the development of an Advanced Driver Monitoring System using modern web technologies.',
      'Integrated Firebase for real-time data management on the frontend, ensuring seamless data flow.',
      'Collaborated with cross-functional teams to deliver high-quality full-stack solutions.',
      'Implemented responsive UI components and optimized application performance.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-gray-900 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            2+ years of hands-on development experience in frontend-focused full stack development and automation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <BriefcaseIcon className="h-5 w-5 text-white mx-auto" />
              </div>
              <div className="order-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl w-5/12 px-6 py-4 card-container">
                <h3 className="font-bold text-primary dark:text-indigo-300 text-xl">{exp.role}</h3>
                <p className="font-semibold text-gray-800 dark:text-gray-100 mt-1">{exp.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3 flex items-center">
                  <CalendarIcon className="h-4 w-4 mr-2" />
                  {exp.duration}
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
