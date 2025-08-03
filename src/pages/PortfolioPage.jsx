import React from 'react';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, DocumentTextIcon, PlayIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Data --- //
const projects = [
      {
        title: 'Agaahi - Ask, Analyze, Act',
        description: 'Developed an AI-powered analytics platform that lets users query data using natural language or voice. Features include real-time insights, smart query generation, customizable dashboards, and automated report creation. Ensured secure access with role-based controls and integrated LLMs for intelligent processing.',
        image: '/agaahi-logo.png',
        tags: ['React Js', 'FastAPI', 'Langchain', 'Pandas/NumPy', 'AWS', 'ReCharts', 'PostgreSQL'],
        liveDemo: null,
        view: '/agaahi-poster.pdf',
        documentation: '/agaahi-report.pdf',
      },
      
      {
        title: 'AI Resilience: A Revolutionary Benchmarking Model for AI Safety',
        description: 'Developed a custom CNN with adversarial training using FGSM to enhance AI safety and robustness. Benchmarked against RobustBench ResNet-18, achieving 57% adversarial accuracy vs 18.75%. Implemented comprehensive evaluation framework for AI resilience in safety-critical systems.',
        image: '/ai-resilience.jpeg',
        tags: ['PyTorch', 'FGSM', 'Adversarial Training', 'CNN', 'AI Safety', 'RobustBench'],
        liveDemo: null,
        view: 'https://colab.research.google.com/drive/1yRN3zyJKq0Fd7SfQT1L61UKUlF93b8es?authuser=2#scrollTo=X1ppV7nYwjtQ',
        documentation: '/ai-resilience-report.pdf',
      },
      {
        title: 'Status Email to Notion Action Items Workflow',
        description: 'Automated n8n workflow that extracts action items from status emails and seamlessly logs them into Notion workspace. Features IMAP email parsing, natural language filtering, and Notion API integration to centralize to-do items without manual effort. Supports scheduled triggers and webhook activation for real-time processing.',
        image: '/email-notion-workflow.jpeg',
        tags: ['n8n', 'Notion API', 'Gmail', 'JavaScript', 'Workflow Automation', 'Email Parsing', 'Task Management'],
        liveDemo: null,
        view: '/status-email-to-notion-workflow-n8n.mp4',
        documentation: null,
      },
      {
        title: 'Summarize Trends Workflow (AI-Powered Analytics)',
        description: 'Intelligent n8n workflow that collects time-series data, analyzes trends, and generates natural language summaries using AI. Features automated data retrieval from multiple sources, trend detection for peaks and patterns, OpenAI integration for insights generation, and multi-channel delivery to email, Notion, or Slack.',
        image: '/trends-workflow.jpeg',
        tags: ['n8n', 'OpenAI API', 'Data Analysis', 'Webhooks', 'Notion API', 'Business Intelligence', 'Trend Analysis'],
        liveDemo: null,
        view: '/trends-workflow-n8n.mp4',
        documentation: null,
      },
      {
        title: 'Smart City Emergency Response System',
        description: 'Developed a comprehensive emergency management system using stochastic modeling. Integrates queuing theory for real-time resource allocation, Markov chains for predictive analysis, and Poisson processes for incident simulation. Features live dashboards with 5-second updates, predictive forecasting, and optimal emergency unit dispatch.',
        image: '/emergency-system.png',
        tags: ['React.js', 'FastAPI', 'Stochastic Modeling', 'Queuing Theory', 'Markov Chains', 'Data Visualization'],
        liveDemo: null,
        view: '/https://github.com/khushbakhtkhan1/Smart-Emergency-Response-Simulation',
        documentation: '/smart-emergency-simulation-report.pdf',
      },
      {
        title: 'Captionify: AI-Powered Image Caption Generator',
        description: 'Developed an advanced image captioning system using transformer architectures (CLIP, ViT) and Hugging Face Transformers library. Features include AI-powered caption generation, chatbot-enhanced refinement, multi-language translation, and real-time processing. Built with React frontend, Node.js/Express backend, and MongoDB integration.',
        image: '/captionify.jpeg',
        tags: ['AI/ML', 'Transformers', 'CLIP', 'ViT', 'Hugging Face', 'React.js', 'Node.js', 'MongoDB', 'Google Colab'],
        liveDemo: null,
        view: 'https://github.com/khushbakhtkhan1/Captionify',
        documentation: '/captionify-research-paper.pdf',
      },
      {
        title: 'Conversational AI Chatbot',
        description: 'Built an intelligent chatbot using Hugging Face DialoGPT with sentiment analysis, multi-language support, memory retention, and humor features. Deployed via Gradio interface with real-time emotion detection and personalized responses based on user interactions.',
        image: '/chatbot.png',
        tags: ['DialoGPT', 'Hugging Face', 'Gradio', 'Sentiment Analysis', 'NLP', 'Python'],
        liveDemo: null,
        view: 'https://github.com/khushbakhtkhan1/Conversational-AI-Chatbot',
        documentation: '/chatbot-report.pdf',
      },
      {
        title: 'Advanced Driver Monitoring System',
        description: 'Developed a real-time driver monitoring solution that detects signs of drowsiness and distraction using facial landmark detection, head pose estimation, and behavioral cues like yawning, mobile usage, and eye closure. Integrated with a web dashboard built in React for visualizing attention metrics, behavioral timestamps, and event logs. Designed to enhance safety in automotive and industrial environments.',
        image: '/adms.png',
        tags: ['Computer Vision', 'Real-time Monitoring', 'React.js', 'Python', 'OpenCV', 'MediaPipe', 'Smart City', 'NCAI'],
        liveDemo: null,
        view: '/adms.mp4',
        documentation: null,
      },      
      {
        title: 'Home-vices: Home Services Booking Platform',
        description: 'Developed a comprehensive home services booking platform connecting users with skilled service providers. Features include real-time appointment scheduling, secure payment gateway, customer review system, and automated email notifications. Built with responsive design ensuring optimal user experience across all devices.',
        image: '/home-vices.png',
        tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design', 'Payment Gateway', 'Email Integration'],
        liveDemo: null,
        view: null,
        documentation: '/Home Services.pdf',
      },
      {
        title: 'Extended Detection and Response (XDR): Implementation Analysis Using Wazuh',
        description: 'Comprehensive research and implementation of XDR cybersecurity solution using Wazuh open-source platform. Analyzed multi-layered threat detection across endpoints, networks, and cloud environments. Implemented automated response mechanisms, threat correlation engines, and real-time security monitoring with advanced analytics and machine learning integration.',
        image: '/xdr-wazuh.png',
        tags: ['Cybersecurity', 'XDR', 'Wazuh', 'Threat Detection', 'SIEM', 'Network Security', 'OpenSearch', 'Kibana'],
        liveDemo: null,
        view: null,
        documentation: '/xdr-wazuh-implementation-report.pdf',
      },
      {
        title: 'Secure Healthcare Network Infrastructure',
        description: 'Designed and implemented enterprise-grade secure network infrastructure for healthcare facility. Features HIPAA-compliant architecture with VLAN segmentation, Cisco ASA firewall, OSPF routing, and HSRP redundancy. Achieved 400% throughput improvement, 99.99% uptime, and 87% reduction in security incidents through advanced network segmentation and security hardening.',
        image: '/healthcare-network.jpg',
        tags: ['Network Security', 'Cisco ASA', 'VLAN', 'OSPF', 'HSRP', 'Healthcare IT', 'HIPAA Compliance', 'Packet Tracer'],
        liveDemo: null,
        view: null,
        documentation: '/ccn-research-report.pdf',
      },
      {
        title: 'Student Report Card Management System',
        description: 'Developed a comprehensive C++ desktop application for managing student academic records. Features include complete CRUD operations, automatic grade calculations, file-based data persistence, and transfer student management. Implements object-oriented programming principles with inheritance, operator overloading, and file I/O operations.',
        image: '/student-management.png',
        tags: ['C++', 'OOP', 'File I/O', 'Desktop App', 'Data Management', 'Academic System', 'CRUD Operations'],
        liveDemo: null,
        view: 'https://github.com/khushbakhtkhan1/Student-Management-System',
        documentation: '/student-reportcard-mgt.txt',
      },
    {
    title: 'Expense Tracker',
    description: 'A personal finance project to help users track expenses and income, manage budgets, and view spending habits over time.',
    image: '/react.webp', // Assuming images are in the public folder
    tags: ['React', 'JavaScript', 'CSS', 'Finance'],
    liveDemo: 'https://kbexpensetracker.surge.sh/',
    view: 'https://github.com/khushbakhtkhan1/expense-tracker-react',
  },
  {
    title: 'Airbnb Clone',
    description: 'A web application replicating the core design and functionality of Airbnb, allowing users to browse, book, and manage accommodations.',
    image: '/airbnb.png',
    tags: ['React', 'JavaScript', 'Styled-Components', 'Web App'],
    liveDemo: 'https://myyairbnbclone.surge.sh/',
    view: 'https://github.com/khushbakhtkhan1/airbnb-clone-react',
  },
  {
    title: 'Pharmacy Management System',
    description: 'A desktop application to automate pharmaceutical operations, including inventory, sales, and customer data management.',
    image: '/pharmpic.jpeg',
    tags: ['Python', 'SQL', 'Tkinter', 'Desktop App'],
    liveDemo: null,
    view: 'https://github.com/khushbakhtkhan1/Pharmacy-Management-System',
  },
  {
    title: 'Space Shooter Game',
    description: 'A 2D space shooter game where players control a spacecraft to shoot down enemies and avoid obstacles, built with Pygame.',
    image: '/space.png',
    tags: ['Python', 'Pygame', 'Game Dev'],
    liveDemo: null,
    view: 'https://github.com/khushbakhtkhan1/Space-Shooter-Game',
  },
 
];

// --- Components --- //
const ProjectCard = ({ project }) => (
  <motion.div
    className="group relative flex flex-col overflow-hidden rounded-xl bg-white dark:bg-gray-800/50 shadow-lg hover:shadow-2xl transition-all duration-300 h-full"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    viewport={{ once: true }}
  >
    <div className="overflow-hidden">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
      <div className="flex flex-wrap gap-2 my-3">
        {project.tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-gray-600 dark:text-gray-300 text-sm flex-grow">{project.description}</p>
      <div className="mt-6 flex justify-end space-x-4">
        {project.liveDemo && (
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-secondary-sm">
            <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
            Live Demo
          </a>
        )}
        {project.view && (
          <a 
            href={project.view} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary-sm"
          >
            {project.view.endsWith('.mp4') || project.view.endsWith('.mov') || project.view.endsWith('.avi') ? (
              <>
                <PlayIcon className="h-5 w-5 mr-2" />
                Watch Demo
              </>
            ) : (
              <>
                <CodeBracketIcon className="h-5 w-5 mr-2" />
                View
              </>
            )}
          </a>
        )}
        {project.documentation && (
          <a href={project.documentation} target="_blank" rel="noopener noreferrer" className="btn-secondary-sm">
            <DocumentTextIcon className="h-5 w-5 mr-2" />
            Documentation
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

// --- Main Page Component --- //
const PortfolioPage = () => {
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">My Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">A collection of my favorite projects. Have a look around!</p>
          <p className="mt-6 max-w-3xl mx-auto text-base text-gray-500 dark:text-gray-400 italic">
            These are some of my key projects showcasing my expertise in full-stack development, AI/ML, automation, and cybersecurity. 
            For more projects and detailed work samples, feel free to reach out to me!
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioPage;
