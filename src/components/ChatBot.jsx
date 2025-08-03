import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon, PaperAirplaneIcon, SparklesIcon } from '@heroicons/react/24/solid';

// Portfolio context for the AI
const PORTFOLIO_CONTEXT = `
You are an AI assistant for Khushbakht Khan's portfolio website. Here's information about him:

PERSONAL INFO:
- Name: Khushbakht Khan
- Role: Frontend-Focused Full Stack Developer, n8n Automation Specialist, Software Engineer
- Currently: Available for new opportunities
- CGPA: 3.77/4.00
- Academic Achievement: 95% in Intermediate (Pre-Engineering) - Outstanding academic performance

CORE EXPERTISE:
- Frontend-focused full stack development with emphasis on React.js and modern JavaScript
- n8n automation specialist - designs and implements workflow automation solutions
- Passionate about creating intuitive frontend experiences connected to intelligent automation
- Specializes in reducing manual processes by 70-80% through automated workflows
- Expert in building responsive web applications and business intelligence solutions

TECHNICAL SKILLS:
- Frontend Development: React.js, JavaScript (ES6+), HTML5, CSS3, Responsive Design
- Backend & APIs: Node.js, FastAPI, Python, RESTful APIs, Express.js
- Automation & Workflows: n8n, Workflow Automation, Process Optimization, Business Intelligence
- Databases & Tools: PostgreSQL, MongoDB, Git & GitHub, Docker, Figma

EXPERIENCE:
- Software Engineer at Iris Labs (Sept 2023 - June 2025): Built React/Next.js frontends, FastAPI backends, and n8n workflows for AI projects, collaborating with ML and backend teams
- Full Stack Developer Intern at Smart City Lab, NCAI (Jun 2023 - Aug 2023): Contributed to Advanced Driver Monitoring System development, integrated Firebase for real-time data management

CURRENT STATUS: Recently completed role at Iris Labs in June 2025 and currently available for new opportunities in frontend development, full-stack development, and automation.

PROJECTS:
1. Expense Tracker: Personal finance React.js application with modern JavaScript
2. Airbnb Clone: Full-stack web application replicating Airbnb's design and functionality
3. Pharmacy Management System: Desktop automation application using Python and SQL
4. Space Shooter Game: 2D game built with Python and Pygame
5. n8n Workflow Automation Projects: Various business process automation solutions
6. Frontend-focused Full Stack Applications: Multiple React.js projects with backend integrations
7. Advanced Driver Monitoring System: Real-time data management system with Firebase integration
8. AI Project Frontends: React/Next.js applications for AI/ML projects at Iris Labs

EDUCATION:
- Software Engineering at NED University of Engineering and Technology, Karachi (2021-2025) - CGPA: 3.67/4.00
- Intermediate in Pre-Engineering at Govt. Dehli College, Karachi (2018-2020) - 95% marks

PROFESSIONAL CERTIFICATIONS:
- Engineering Possibilities Programme - Unilever (2024): Comprehensive program focusing on engineering innovation and leadership development
- React.js Basic - HackerRank (2024): Certification in React.js fundamentals and component-based development
- Python for Data Science, AI and Development - IBM (2023): Professional certification covering Python programming for data science and AI applications
- Web Animation - GDSC / MLSA (2023): Advanced web animation techniques and modern CSS/JavaScript animation frameworks
- Python, Data Science and Machine Learning - AIC (Artificial Intelligence Center) (2023): Comprehensive training in Python programming, data science methodologies, and ML algorithms

ACHIEVEMENTS:
- 5+ Professional Certifications from leading organizations (Unilever, IBM, HackerRank, GDSC/MLSA, AIC)
- Strong academic performance with 95% in intermediate exams and 3.77 CGPA at NED University
- Proven track record in automation and workflow optimization
- Leadership development through Unilever's Engineering Possibilities Programme

Please respond as his helpful AI assistant, emphasizing his frontend-focused full stack development skills, n8n automation expertise, and academic excellence. Be professional and highlight his unique combination of modern web development and intelligent automation capabilities.
`;

// Gemini AI API integration
const callGeminiAPI = async (userMessage, conversationHistory = []) => {
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY;
  
  if (!API_KEY) {
    return "I'm sorry, but the AI service is currently unavailable. Please try asking about Khushbakht's skills, projects, or experience, and I'll do my best to help with the information I have.";
  }

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${PORTFOLIO_CONTEXT}\n\nConversation history:\n${conversationHistory.map(msg => `${msg.from === 'user' ? 'User' : 'Assistant'}: ${msg.text}`).join('\n')}\n\nUser: ${userMessage}\n\nAssistant:`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Invalid response format from Gemini API');
    }
  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return "I'm experiencing some technical difficulties. Please try asking about Khushbakht's skills, projects, or experience, and I'll help you with the information I have available.";
  }
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! I'm Khushbakht's AI assistant. Ask me anything about his work, skills, projects, or experience!" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickQuestions = [
    'What are her main skills?',
    'Tell me about her projects',
    'What is her experience?',
    'How can I contact her?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async (text) => {
    const userMessage = text.trim();
    if (!userMessage || isTyping) return;

    const newUserMessage = { from: 'user', text: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Get conversation history (last 10 messages for context)
      const conversationHistory = messages.slice(-10);
      
      // Call Gemini API
      const botResponse = await callGeminiAPI(userMessage, conversationHistory);
      
      setMessages((prev) => [...prev, { from: 'bot', text: botResponse }]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      setMessages((prev) => [...prev, { 
        from: 'bot', 
        text: "I'm sorry, I'm having trouble processing your request right now. Please try again or ask about Khushbakht's skills, projects, or experience." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <>
      {/* Chat Bubble */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-primary rounded-full text-white flex items-center justify-center shadow-2xl z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isOpen ? 'close' : 'open'}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <ChatBubbleOvalLeftEllipsisIcon className="h-8 w-8" />}
          </motion.div>
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed bottom-24 right-6 w-full max-w-sm h-[70vh] max-h-[600px] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl flex flex-col z-40 overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Header */}
            <header className="p-4 bg-gray-50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700 flex items-center space-x-3">
              <SparklesIcon className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-bold text-lg text-gray-800 dark:text-white">AI Assistant</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400">Powered by Gemini AI</p>
              </div>
            </header>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${msg.from === 'bot'
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-bl-none'
                        : 'bg-primary text-white rounded-br-none'}`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 rounded-bl-none flex items-center space-x-2">
                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, repeat: Infinity }} />
                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.2, repeat: Infinity }} />
                    <motion.div className="w-2 h-2 bg-gray-500 rounded-full" animate={{ y: [0, -4, 0] }} transition={{ duration: 0.8, delay: 0.4, repeat: Infinity }} />
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-2 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2 justify-center">
                {quickQuestions.map(q => (
                  <button 
                    key={q} 
                    onClick={() => handleSendMessage(q)} 
                    disabled={isTyping}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light hover:bg-primary/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleFormSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
              <div className="relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="w-full pl-4 pr-12 py-2 rounded-full bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary focus:outline-none transition disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button 
                  type="submit" 
                  disabled={!inputValue.trim() || isTyping}
                  className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 bg-primary rounded-full text-white flex items-center justify-center hover:bg-primary-dark transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  <PaperAirplaneIcon className="h-5 w-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
