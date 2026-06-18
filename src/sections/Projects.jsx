import React from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, DocumentTextIcon, PlayIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    title: 'AI B2B Lead Gen & Automated Outreach Engine',
    description: 'Built a fully automated B2B sales pipeline using n8n. A webhook captures target criteria from a form, Apify scrapes validated leads, and a GPT-4o-mini Lead Intelligence Agent analyzes each business to identify pain points, select optimal contact emails, and generate hyper-personalized 3-step cold email sequences. All enriched data flows into a Google Sheets CRM with live dashboard endpoints and workflow controls.',
    image: '/lead-gen-engine.png',
    tech: ['n8n', 'GPT-4o-mini', 'Apify API', 'Google Sheets CRM', 'Webhooks', 'REST APIs', 'Workflow Automation'],
    liveUrl: null,
    view: null,
    docUrl: null,
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
  {
    title: 'Summarize Trends Workflow (AI-Powered Analytics)',
    description: 'Intelligent n8n workflow that collects time-series data, analyzes trends, and generates natural language summaries using AI. Features automated data retrieval from multiple sources, trend detection for peaks and patterns, OpenAI integration for insights generation, and multi-channel delivery to email, Notion, or Slack.',
    image: '/trends-workflow.jpeg',
    tech: ['n8n', 'OpenAI API', 'Data Analysis', 'Webhooks', 'Notion API', 'Business Intelligence', 'Trend Analysis'],
    liveUrl: null,
    view: '/trends-workflow-n8n.mp4',
    docUrl: null,
  },
  {
    title: 'Smart City Emergency Response System',
    description: 'Developed a comprehensive emergency management system using stochastic modeling. Integrates queuing theory for real-time resource allocation, Markov chains for predictive analysis, and Poisson processes for incident simulation. Features live dashboards with 5-second updates, predictive forecasting, and optimal emergency unit dispatch.',
    image: '/emergency-system.png',
    tech: ['React.js', 'FastAPI', 'Stochastic Modeling', 'Queuing Theory', 'Markov Chains', 'Data Visualization'],
    liveUrl: null,
    view: '/https://github.com/khushbakhtkhan1/Smart-Emergency-Response-Simulation',
    docUrl: '/smart-emergency-simulation-report.pdf',
  },
  {
    title: 'Captionify: AI-Powered Image Caption Generator',
    description: 'Developed an advanced image captioning system using transformer architectures (CLIP, ViT) and Hugging Face Transformers library. Features include AI-powered caption generation, chatbot-enhanced refinement, multi-language translation, and real-time processing. Built with React frontend, Node.js/Express backend, and MongoDB integration.',
    image: '/captionify.jpeg',
    tech: ['AI/ML', 'Transformers', 'CLIP', 'ViT', 'Hugging Face', 'React.js', 'Node.js', 'MongoDB', 'Google Colab'],
    liveUrl: null,
    view: 'https://github.com/khushbakhtkhan1/Captionify',
    docUrl: '/captionify-research-paper.pdf',
  },
  {
    title: 'Conversational AI Chatbot',
    description: 'Built an intelligent chatbot using Hugging Face DialoGPT with sentiment analysis, multi-language support, memory retention, and humor features. Deployed via Gradio interface with real-time emotion detection and personalized responses based on user interactions.',
    image: '/chatbot.png',
    tech: ['DialoGPT', 'Hugging Face', 'Gradio', 'Sentiment Analysis', 'NLP', 'Python'],
    liveUrl: null,
    view: 'https://github.com/khushbakhtkhan1/Conversational-AI-Chatbot',
    docUrl: '/chatbot-report.pdf',
  },
  {
    title: 'Advanced Driver Monitoring System',
    description: 'Developed a real-time driver monitoring solution that detects signs of drowsiness and distraction using facial landmark detection, head pose estimation, and behavioral cues like yawning, mobile usage, and eye closure. Integrated with a web dashboard built in React for visualizing attention metrics, behavioral timestamps, and event logs.',
    image: '/adms.png',
    tech: ['Computer Vision', 'Real-time Monitoring', 'React.js', 'Python', 'OpenCV', 'MediaPipe', 'Smart City', 'NCAI'],
    liveUrl: null,
    view: '/adms.mp4',
    docUrl: null,
  },
  {
    title: 'Home-vices: Home Services Booking Platform',
    description: 'Developed a comprehensive home services booking platform connecting users with skilled service providers. Features include real-time appointment scheduling, secure payment gateway, customer review system, and automated email notifications. Built with responsive design ensuring optimal user experience across all devices.',
    image: '/home-vices.png',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'Responsive Design', 'Payment Gateway', 'Email Integration'],
    liveUrl: null,
    view: null,
    docUrl: '/Home Services.pdf',
  },
  {
    title: 'Extended Detection and Response (XDR): Implementation Analysis Using Wazuh',
    description: 'Comprehensive research and implementation of XDR cybersecurity solution using Wazuh open-source platform. Analyzed multi-layered threat detection across endpoints, networks, and cloud environments. Implemented automated response mechanisms, threat correlation engines, and real-time security monitoring with advanced analytics and machine learning integration.',
    image: '/xdr-wazuh.png',
    tech: ['Cybersecurity', 'XDR', 'Wazuh', 'Threat Detection', 'SIEM', 'Network Security', 'OpenSearch', 'Kibana'],
    liveUrl: null,
    view: null,
    docUrl: '/xdr-wazuh-implementation-report.pdf',
  },
  {
    title: 'Secure Healthcare Network Infrastructure',
    description: 'Designed and implemented enterprise-grade secure network infrastructure for healthcare facility. Features HIPAA-compliant architecture with VLAN segmentation, Cisco ASA firewall, OSPF routing, and HSRP redundancy. Achieved 400% throughput improvement, 99.99% uptime, and 87% reduction in security incidents.',
    image: '/healthcare-network.jpg',
    tech: ['Network Security', 'Cisco ASA', 'VLAN', 'OSPF', 'HSRP', 'Healthcare IT', 'HIPAA Compliance', 'Packet Tracer'],
    liveUrl: null,
    view: null,
    docUrl: '/ccn-research-report.pdf',
  },
  {
    title: 'Student Report Card Management System',
    description: 'Developed a comprehensive C++ desktop application for managing student academic records. Features include complete CRUD operations, automatic grade calculations, file-based data persistence, and transfer student management. Implements object-oriented programming principles with inheritance, operator overloading, and file I/O operations.',
    image: '/student-management.png',
    tech: ['C++', 'OOP', 'File I/O', 'Desktop App', 'Data Management', 'Academic System', 'CRUD Operations'],
    liveUrl: null,
    view: 'https://github.com/khushbakhtkhan1/Student-Management-System',
    docUrl: '/student-reportcard-mgt.txt',
  },
  {
    title: 'Expense Tracker',
    description: 'A personal finance project to help users track expenses and income, manage budgets, and view spending habits over time.',
    image: '/react.webp',
    tech: ['React', 'JavaScript', 'CSS', 'Finance'],
    liveUrl: 'https://kbexpensetracker.surge.sh/',
    view: 'https://github.com/khushbakhtkhan1/expense-tracker-react',
    docUrl: null,
  },
  {
    title: 'Airbnb Clone',
    description: 'A web application replicating the core design and functionality of Airbnb, allowing users to browse, book, and manage accommodations.',
    image: '/airbnb.png',
    tech: ['React', 'JavaScript', 'Styled-Components', 'Web App'],
    liveUrl: 'https://myyairbnbclone.surge.sh/',
    view: 'https://github.com/khushbakhtkhan1/airbnb-clone-react',
    docUrl: null,
  },
  {
    title: 'Pharmacy Management System',
    description: 'A desktop application to automate pharmaceutical operations, including inventory, sales, and customer data management.',
    image: '/pharmpic.jpeg',
    tech: ['Python', 'SQL', 'Tkinter', 'Desktop App'],
    liveUrl: null,
    view: 'https://github.com/khushbakhtkhan1/Pharmacy-Management-System',
    docUrl: null,
  },
  {
    title: 'Space Shooter Game',
    description: 'A 2D space shooter game where players control a spacecraft to shoot down enemies and avoid obstacles, built with Pygame.',
    image: '/space.png',
    tech: ['Python', 'Pygame', 'Game Dev'],
    liveUrl: null,
    view: 'https://github.com/khushbakhtkhan1/Space-Shooter-Game',
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
            AI automation systems, full stack applications, and intelligent workflows from my professional experience.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="mt-12 relative projects-carousel">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{
              nextEl: '.projects-next',
              prevEl: '.projects-prev',
            }}
            pagination={{
              clickable: true,
              el: '.projects-pagination',
              bulletClass: 'projects-bullet',
              bulletActiveClass: 'projects-bullet-active',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 24 },
              768: { slidesPerView: 2, spaceBetween: 28 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            className="!pb-14"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.title} className="!h-auto">
                <div className="card-container overflow-hidden rounded-xl shadow-lg bg-gray-50 dark:bg-gray-900 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img
                      className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                      src={project.image}
                      alt={project.title}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm flex-grow">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-indigo-300 rounded-full px-3 py-1 text-xs font-semibold">
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
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button
            className="projects-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary transition-all duration-300 disabled:opacity-30"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            className="projects-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-primary hover:text-white hover:border-primary dark:hover:bg-primary transition-all duration-300 disabled:opacity-30"
            aria-label="Next project"
          >
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Custom Pagination */}
          <div className="projects-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
