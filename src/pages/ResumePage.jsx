import React from 'react';
import { motion } from 'framer-motion';
import { AcademicCapIcon, BriefcaseIcon, ArrowDownTrayIcon, StarIcon, TrophyIcon, BookOpenIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar'; // Assuming Navbar is in components
import Footer from '../components/Footer'; // Assuming Footer is in components

// --- Data --- //
const education = [
  {
    degree: 'Bachelors in Software Engineering',
    institution: 'NED University of Engineering and Technology, Karachi',
    period: 'Nov 2021 - Jun 2025',
    details: 'CGPA: 3.77 / 4.00. Specialized in software engineering principles, machine learning integration, and database systems.',
  },
  {
    degree: 'Intermediate in Pre-Engineering (XII / HSC)',
    institution: 'St. Lawrence Government Degree Girls College, Karachi',
    period: '2019 - 2021',
    details: 'Achieved 95% marks. Outstanding academic performance.',
  },
  {
    degree: 'Matriculation (X / SSC)',
    institution: 'Little Folks School, Karachi',
    period: '2017 - 2019',
    details: 'Achieved 85% marks.',
  },
];

const experience = [
  {
    role: 'Applied AI Automation Engineer',
    company: 'Plutus21',
    period: 'Aug 2025 - Present',
    responsibilities: [
      'Designed and deployed AI-driven workflow automations using n8n, Python, and Replit across finance, marketing, and HR.',
      'Built OpenAI-powered intelligent agents and custom integrations to automate repetitive processes.',
      'Connected and integrated complex APIs to eliminate manual errors and boost business productivity.',
    ],
  },
  {
    role: 'Senior AI Automation Engineer (Part-time)',
    company: 'SMBiz',
    period: 'Feb 2026 - June 2026',
    responsibilities: [
      'Built end-to-end automated lead generation and outreach systems using n8n, Apify, and GPT-4.',
      'Developed AI-personalized email sequencing systems with automated follow-ups and CRM integrations.',
      'Created custom social media automation and data extraction workflows to streamline marketing pipelines.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Iris Labs',
    period: 'Sept 2023 - June 2025',
    responsibilities: [
      'Developed advanced n8n workflow automations, integrating custom API hooks and services.',
      'Built responsive React/Next.js frontends and engineered FastAPI/Python backends for AI projects.',
      'Collaborated with machine learning and backend teams to deploy production AI solutions.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    company: 'NCAI',
    period: 'Aug 2023 - Oct 2023',
    responsibilities: [
      'Contributed to the development of an Advanced Driver Monitoring System using computer vision and Python.',
      'Integrated Firebase for real-time data management on the frontend and dashboard components.',
    ],
  },
];

const certifications = [
  {
    title: 'Engineering Possibilities Programme',
    issuer: 'Unilever',
    year: '2024',
    description: 'Comprehensive program focusing on engineering innovation and leadership development.',
  },
  {
    title: 'React.js Basic',
    issuer: 'HackerRank',
    year: '2024',
    description: 'Certification in React.js fundamentals and component-based development.',
  },
  {
    title: 'Python for Data Science, AI and Development',
    issuer: 'IBM',
    year: '2023',
    description: 'Professional certification covering Python programming for data science and AI applications.',
  },
  {
    title: 'Web Animation',
    issuer: 'GDSC / MLSA',
    year: '2023',
    description: 'Advanced web animation techniques and modern CSS/JavaScript animation frameworks.',
  },
  {
    title: 'Python, Data Science and Machine Learning',
    issuer: 'AIC (Artificial Intelligence Club)',
    year: '2023',
    description: 'Comprehensive training in Python programming, data science methodologies, and ML algorithms.',
  },
];

const skills = {
  'Automation & Scripting': ['n8n Workflow Automation', 'Python & Scripting', 'API Integration & Webhooks', 'Zapier', 'Make.com'],
  'AI/ML & NLP': ['NLP & LLMs', 'LangChain', 'Transformers (Hugging Face)', 'Adversarial ML & AI Safety'],
  'Full Stack Development': ['React.js', 'Next.js', 'FastAPI', 'SQL / MongoDB', 'JavaScript (ES6+)', 'Visualization (Power BI / Chart.js)'],
};

const publications = [
  {
    title: 'Role of Blockchain and NFTs in Industry 5.0',
    description: 'Research publication exploring the applications of decentralized ledgers and non-fungible tokens in smart manufacturing and automation.',
  },
  {
    title: 'Comparative Analysis of CNN and LSTM',
    description: 'Comparative study evaluating deep learning architectures (CNN and LSTM) for sequential and image classification tasks.',
  },
  {
    title: 'Image Caption Generator (Captionify)',
    description: 'Implementation and analysis of a multimodal deep learning system combining computer vision and NLP to generate descriptive captions for images.',
  },
];

// --- Components --- //
const TimelineItem = ({ icon, item }) => (
  <motion.div
    className="flex items-start mb-8" 
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="flex flex-col items-center mr-6">
      <div className="bg-primary/10 p-3 rounded-full ring-8 ring-white dark:ring-gray-900">
        {icon}
      </div>
      <div className="w-px h-full bg-gray-300 dark:bg-gray-600 mt-2"></div>
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">{item.degree || item.role}</h3>
      <p className="font-semibold text-primary dark:text-primary-light">{item.institution || item.company}</p>
      {item.details && <p className="mt-2 text-gray-600 dark:text-gray-300">{item.details}</p>}
      {item.responsibilities && (
        <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
          {item.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}
    </div>
  </motion.div>
);

const CertificationsSection = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 flex items-center justify-center">
      <TrophyIcon className="h-8 w-8 mr-3 text-primary" />
      Professional Certifications
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {certifications.map((cert, index) => (
        <motion.div 
          key={index}
          className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{cert.title}</h3>
              <p className="text-primary dark:text-primary-light font-semibold">{cert.issuer}</p>
            </div>
            <span className="bg-primary/10 text-primary dark:text-primary-light px-3 py-1 rounded-full text-sm font-medium">
              {cert.year}
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const PublicationsSection = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 flex items-center justify-center">
      <BookOpenIcon className="h-8 w-8 mr-3 text-primary" />
      Publications & Research
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {publications.map((pub, index) => (
        <motion.div 
          key={index}
          className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-primary"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">{pub.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{pub.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

const SkillsSection = () => (
  <div className="mt-16">
    <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">My Skillset</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(skills).map(([category, list]) => (
        <motion.div 
          key={category} 
          className="bg-white dark:bg-gray-800/50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-primary dark:text-primary-light mb-4">{category}</h3>
          <ul className="space-y-2">
            {list.map(skill => (
              <li key={skill} className="flex items-center text-gray-700 dark:text-gray-300">
                <StarIcon className="h-5 w-5 text-yellow-400 mr-2 flex-shrink-0" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </div>
);
// --- Main Page Component --- //
const ResumePage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">My Journey</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">A timeline of my professional and academic background.</p>
          <a href="/Khushbakht-Khan-Resume.pdf" download className="mt-8 inline-flex items-center btn-primary text-lg">
            <ArrowDownTrayIcon className="h-6 w-6 mr-3" />
            Download My Resume
          </a>
        </motion.div>

        {/* Timelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <AcademicCapIcon className="h-8 w-8 mr-3 text-primary" />
              Education
            </h2>
            <div>
              {education.map((item, index) => (
                <TimelineItem key={index} icon={<AcademicCapIcon className="h-6 w-6 text-primary" />} item={item} />
              ))}
            </div>
          </div>

          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 flex items-center">
              <BriefcaseIcon className="h-8 w-8 mr-3 text-primary" />
              Experience
            </h2>
            <div>
              {experience.map((item, index) => (
                <TimelineItem key={index} icon={<BriefcaseIcon className="h-6 w-6 text-primary" />} item={item} />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Section */}
        <CertificationsSection />

        {/* Publications Section */}
        <PublicationsSection />

        {/* Skills Section */}
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
