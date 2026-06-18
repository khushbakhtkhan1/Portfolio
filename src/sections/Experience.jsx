import React from 'react';
import { BriefcaseIcon, CalendarIcon } from '@heroicons/react/24/solid';

const experiences = [
  {
    role: 'Applied AI Automation Engineer',
    company: 'Plutus21',
    duration: 'Aug 2025 - Present',
    description: [
      'Designed and deployed AI-driven workflow automations using n8n, Python, and Replit across finance, marketing, and HR.',
      'Built OpenAI-powered intelligent agents and custom integrations to automate repetitive processes.',
      'Connected and integrated complex APIs to eliminate manual errors and boost business productivity.',
    ],
  },
  {
    role: 'Senior AI Automation Engineer (Part-time)',
    company: 'SMBiz',
    duration: 'Feb 2026 - June 2026',
    description: [
      'Built end-to-end automated lead generation and outreach systems using n8n, Apify, and GPT-4.',
      'Developed AI-personalized email sequencing systems with automated follow-ups and CRM integrations.',
      'Created custom social media automation and data extraction workflows to streamline marketing pipelines.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Iris Labs',
    duration: 'Sept 2023 - June 2025',
    description: [
      'Developed advanced n8n workflow automations, integrating custom API hooks and services.',
      'Built responsive React/Next.js frontends and engineered FastAPI/Python backends for AI products.',
      'Collaborated with machine learning and backend teams to deploy production AI solutions.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'NCAI',
    duration: 'Aug 2023 - Oct 2023',
    description: [
      'Contributed to the development of an Advanced Driver Monitoring System using computer vision and Python.',
      'Integrated Firebase for real-time data management on the frontend and dashboard components.',
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
            3+ years of experience specializing in n8n workflow automation, Python backend systems, and frontend integrations.
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
