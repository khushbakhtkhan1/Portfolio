import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, DocumentTextIcon, PlayIcon } from '@heroicons/react/24/solid';

const projects = [
  {
    title: 'Agaahi - Ask, Analyze, Act',
    description: 'Developed an AI-powered analytics platform that lets users query data using natural language or voice. Features include real-time insights, smart query generation, customizable dashboards, and automated report creation. Ensured secure access with role-based controls and integrated LLMs for intelligent processing.',
    image: '/agaahi-logo.png',
    tech: ['React Js', 'FastAPI', 'Langchain', 'Pandas/NumPy', 'AWS', 'ReCharts', 'PostgreSQL'],
    liveUrl: null,
    view: '/agaahi-poster.pdf',
    docUrl: '/agaahi-report.pdf',
  },
  {
    title: 'AI Resilience: A Revolutionary Benchmarking Model for AI Safety',
    description: 'Developed a custom CNN with adversarial training using FGSM to enhance AI safety and robustness. Benchmarked against RobustBench ResNet-18, achieving 57% adversarial accuracy vs 18.75%. Implemented comprehensive evaluation framework for AI resilience in safety-critical systems.',
    image: '/ai-resilience.jpeg',
    tech: ['PyTorch', 'FGSM', 'Adversarial Training', 'CNN', 'AI Safety', 'RobustBench'],
    liveUrl: null,
    view: 'https://colab.research.google.com/drive/1yRN3zyJKq0Fd7SfQT1L61UKUlF93b8es?authuser=2#scrollTo=X1ppV7nYwjtQ',
    docUrl: '/ai-resilience-report.pdf',
  },
  {
    title: 'Status Email to Notion Action Items Workflow',
    description: 'Automated n8n workflow that extracts action items from status emails and seamlessly logs them into Notion workspace. Features IMAP email parsing, natural language filtering, and Notion API integration to centralize to-do items without manual effort. Supports scheduled triggers and webhook activation for real-time processing.',
    image: '/email-notion-workflow.jpeg',
    tech: ['n8n', 'Notion API', 'Gmail', 'JavaScript', 'Workflow Automation', 'Email Parsing', 'Task Management'],
    liveUrl: null,
    view: '/status-email-to-notion-workflow-n8n.mp4',
    docUrl: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-950 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Frontend-focused full stack applications and automation solutions from my professional experience.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card-container overflow-hidden rounded-lg shadow-lg bg-gray-50 dark:bg-gray-900 flex flex-col">
              <img className="h-48 w-full object-cover" src={project.image} alt={project.title} />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-indigo-300 rounded-full px-3 py-1 text-sm font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex justify-end gap-2">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-4 py-2">
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  )}
                  {project.view && (
                    <a 
                      href={project.view} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary text-sm px-4 py-2"
                    >
                      {project.view.endsWith('.mp4') || project.view.endsWith('.mov') || project.view.endsWith('.avi') ? (
                        <>
                          <PlayIcon className="h-4 w-4 mr-1" />
                          Watch Demo
                        </>
                      ) : (
                        <>
                          <CodeBracketIcon className="h-4 w-4 mr-1" />
                          View
                        </>
                      )}
                    </a>
                  )}
                  {project.docUrl && (
                    <a href={project.docUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm px-4 py-2">
                      <DocumentTextIcon className="h-4 w-4 mr-1" />
                      Docs
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
