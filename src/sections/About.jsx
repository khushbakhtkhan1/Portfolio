import React from 'react';
import { CodeBracketIcon, AcademicCapIcon, BriefcaseIcon, TrophyIcon } from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { icon: CodeBracketIcon, label: 'Projects Completed', value: '25+' },
    { icon: AcademicCapIcon, label: 'CGPA at NED University', value: '3.77' },
    { icon: BriefcaseIcon, label: 'Years Experience', value: '3+' },
    { icon: TrophyIcon, label: 'Professional Certifications', value: '5+' },
  ];

  return (
    <section id="about" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Specialist in n8n & Python workflow automation and frontend-focused full-stack development, passionate about building intelligent AI integrations and efficient automation solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-4">
          <div className="prose prose-lg dark:prose-dark">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Software Engineering graduate from NED University of Engineering and Technology (CGPA: 3.77) with 3+ years of experience specializing in n8n workflow automation and Python-driven backend systems. I excel at connecting APIs, building OpenAI/LLM agents, and developing high-performance React/Next.js frontends.
            </p>
           
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Currently, I work as an Applied AI Automation Engineer at Plutus21 designing AI-driven workflow automations using n8n, Python, and Replit, and previously as a Senior AI Automation Engineer at SMBiz. My background also includes building React/Next.js frontends, FastAPI backends, and advanced n8n integrations at Iris Labs, and developing computer vision solutions at NCAI.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl transform rotate-6"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/mainprofile.jpg"
                  alt="Khushbakht Khan"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Khushbakht Khan
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AI Automation Specialist
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
