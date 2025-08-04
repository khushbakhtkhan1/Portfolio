import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, X, MessageCircle, Bot, User, Settings } from 'lucide-react';

// Portfolio Context for AI Assistant
const PORTFOLIO_CONTEXT = `
You are Khushbakht Khan, a highly skilled female software engineer specializing in AI Automation, full-stack development with a strong frontend focus on React, Next.js, and AI/ML integration. You're recent graduate of Bachelor's in Software Engineering at NED University of Engineering and Technology, Karachi, with an impressive CGPA of 3.77/4.00.

## Personal Information
- Full Name: Khushbakht Khan
- Pronouns: She/Her
- Location: Karachi, Pakistan
- Email: khankhushbakht1@gmail.com
- LinkedIn: https://www.linkedin.com/in/khushbakht-khan-b84925221/
- GitHub: https://github.com/khushbakhtkhan1
- Education: Bachelors in Software Engineering (2021-2025) at NED University
- Academic Excellence: 95% in Intermediate (Pre-Engineering)

## Professional Summary
Innovative Software Engineer with expertise in developing scalable web applications and AI-powered solutions. Combines strong technical skills in full-stack development with a passion for automation and data-driven decision making. Proven ability to design and implement complex systems using modern technologies.

## Technical Expertise

### Frontend Development
- React.js, Next.js, Context API
- JavaScript
- HTML5, CSS3, Tailwind CSS
- Responsive UI
- UI/UX Best Practices

### Backend & Data
- Python, FastAPI, Node.js
- RESTful APIs
- mySQL, Firebase
- Data Analysis & Visualization (Power BI)

### AI/ML & Automation
- n8n Workflow Automation
- Natural Language Processing (NLP)
- Large Language Models (LLMs)
- LangChain, Transformers (Hugging Face)
- Adversarial ML & AI Safety

### Tools & DevOps
- Git, GitHub
- Jira, Notion, Trello

## Professional Experience

### Software Engineer @ Iris Labs (Sept 2023 - June 2025)
- Developed React/Next.js frontends with modern JavaScript frameworks
- Built FastAPI backends for AI projects with scalable API architecture
- Created n8n workflows for automation, collaborating with ML teams
- Integrated AI/ML solutions to enhance user experience and functionality
- Optimized application performance and implemented CI/CD pipelines

### Full Stack Developer Intern @ Smart City Lab, NCAI (Jun 2023 - Aug 2023)
- Contributed to Advanced Driver Monitoring System using computer vision
- Integrated Firebase for real-time data management
- Developed responsive UI components with React
- Implemented facial landmark detection and behavioral analysis

## Key Projects

### 1. Agaahi - Ask, Analyze, Act
AI-powered analytics platform for natural language data queries
- Tech Stack: React, FastAPI, LangChain, AWS, PostgreSQL
- Features: Real-time insights, smart query generation, role-based access
- Integrated LLMs for intelligent data processing

### 2. AI Resilience Benchmarking Model
Advanced AI safety research project
- Developed custom CNN with FGSM adversarial training
- Achieved 57% adversarial accuracy (vs 18.75% baseline)
- Implemented comprehensive evaluation framework for AI safety

### 3. Smart City Emergency Response System
Real-time emergency management system
- Tech: React, FastAPI, Stochastic Modeling
- Features: Queuing theory for resource allocation, Markov chains for prediction
- Live dashboards with 5-second updates

### 4. Status Email to Notion Automation
n8n workflow for task management
- Automated extraction of action items from emails
- Direct logging to Notion workspace
- Reduced manual task management by 80%

## Certifications
1. Engineering Possibilities Programme - Unilever (2024)
   - Leadership development and engineering innovation

2. React.js Basic - HackerRank (2024)
   - React fundamentals and component development

3. Python for Data Science, AI and Development - IBM (2023)
   - Python programming for data science and AI

4. Web Animation - GDSC / MLSA (2023)
   - Advanced web animation techniques and frameworks

5. Python, Data Science and Machine Learning - AIC (2023)
   - Comprehensive Python, data science, and ML training

## Technical Skills
- Programming: JavaScript, Python, SQL
- Frontend: React, Next.js, Tailwind CSS, Framer Motion
- Backend: FastAPI, Node.js
- AI/ML: NLP, LLMs, Computer Vision, PyTorch
- Tools: Git, Docker, n8n, Notion API, Firebase

## Personal Attributes
- Strong analytical and problem-solving skills
- Excellent communication and collaboration abilities
- Continuous learner with passion for new technologies
- Detail-oriented with focus on clean, maintainable code
- Strong work ethic and commitment to quality

## Speaking Style
When responding as Khushbakht's AI assistant:
- Be professional yet approachable and friendly
- Use clear, concise language with technical accuracy
- Maintain a helpful and enthusiastic tone
- Use emojis occasionally for engagement
- Always use she/her pronouns for Khushbakht
- Be honest about limitations
- Provide detailed explanations for technical topics
- Show enthusiasm for technology and innovation
- Keep responses focused and to the point
- Be proactive in suggesting solutions
`;

// API Service Factory
const createApiService = (config) => {
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000;

  const callApi = async (userMessage, attempt = 1) => {
    try {
      const { url, method = 'GET', headers = {}, body, transformResponse } = config;
      
      console.log(`[${config.name}] Sending request to API...`);
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        body: body ? JSON.stringify(body(userMessage)) : undefined
      });

      console.log(`[${config.name}] Response status:`, response.status);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error(`[${config.name}] API Error:`, errorData);
        
        if (response.status === 429 && attempt < MAX_RETRIES) {
          const delay = RETRY_DELAY * Math.pow(2, attempt - 1);
          console.log(`[${config.name}] Rate limited. Retrying in ${delay}ms (attempt ${attempt + 1}/${MAX_RETRIES})`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return callApi(userMessage, attempt + 1);
        }
        
        throw new Error(errorData.error?.message || `API request failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log(`[${config.name}] API Response:`, data);
      
      return transformResponse ? transformResponse(data) : data;
      
    } catch (error) {
      console.error(`[${config.name}] Attempt ${attempt} failed:`, error);
      
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection.');
      }
      
      if (attempt < MAX_RETRIES && error.message.toLowerCase().includes('rate')) {
        const delay = RETRY_DELAY * Math.pow(2, attempt - 1);
        await new Promise(resolve => setTimeout(resolve, delay));
        return callApi(userMessage, attempt + 1);
      }
      
      throw error;
    }
  };

  return { call: callApi };
};

// API Configurations
const API_CONFIGS = {
  GEMINI: {
    name: 'Gemini 2.0 Flash',
    url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-goog-api-key': process.env.REACT_APP_GEMINI_API_KEY
    },
    body: (message) => ({
      contents: [{
        parts: [{ text: `${PORTFOLIO_CONTEXT}\n\nUser: ${message}\nAssistant:` }]
      }],
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
      safetySettings: [
        { category: "HARM_CATEGORY_HARASSMENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_HATE_SPEECH", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_SEXUALLY_EXPLICIT", threshold: "BLOCK_MEDIUM_AND_ABOVE" },
        { category: "HARM_CATEGORY_DANGEROUS_CONTENT", threshold: "BLOCK_MEDIUM_AND_ABOVE" }
      ]
    }),
    transformResponse: (data) => {
      if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
        console.error('Unexpected API response format:', data);
        throw new Error('Invalid response format from Gemini API');
      }
      return data.candidates[0].content.parts[0].text;
    }
  },
};

// Initialize API services
const apiServices = Object.fromEntries(
  Object.entries(API_CONFIGS).map(([key, config]) => [key, createApiService(config)])
);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeApi, setActiveApi] = useState('GEMINI');
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi there! I'm Khushbakht's AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // 2 seconds

  const handleApiCall = async (userMessage) => {
    const apiService = apiServices[activeApi];
    if (!apiService) {
      throw new Error(`API service '${activeApi}' not found`);
    }
    return apiService.call(userMessage);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (isSending || !input.trim()) return;
    
    const userMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsSending(true);

    try {
      console.log(`Sending message to ${activeApi} API...`);
      const botResponse = await handleApiCall(input);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date(),
        source: activeApi
      };
      
      setMessages(prev => [...prev, botMessage]);
      
    } catch (error) {
      console.error('Error in handleSendMessage:', error);
      
      let errorMessage = "I'm having trouble connecting to the AI service.";
      
      if (error.message.includes('API key')) {
        errorMessage = `Configuration error: ${error.message}`;
      } else if (error.message.includes('network')) {
        errorMessage = "Network error. Please check your internet connection.";
      } else if (error.message.includes('rate') || error.message.includes('429')) {
        errorMessage = "I'm getting too many requests. Please wait a few minutes and try again.";
      } else if (error.message.includes('service not found')) {
        errorMessage = "The selected AI service is not available. Please try another one.";
      }
      
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: errorMessage,
        sender: 'bot',
        timestamp: new Date(),
        isError: true
      }]);
      
    } finally {
      setIsSending(false);
    }
  };

  const toggleChat = () => setIsOpen(!isOpen);

  const renderApiBadge = (apiKey) => (
    <span 
      key={apiKey}
      className={`text-xs px-2 py-1 rounded-full ${
        activeApi === apiKey 
          ? 'bg-primary text-white' 
          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-600'
      }`}
      onClick={() => setActiveApi(apiKey)}
    >
      {API_CONFIGS[apiKey]?.name || apiKey}
    </span>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isSettingsOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-20 right-0 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 z-10"
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">AI Settings</h3>
            <button 
              onClick={() => setIsSettingsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                AI Provider
              </label>
              <div className="flex flex-wrap gap-2">
                {Object.keys(API_CONFIGS).map(renderApiBadge)}
              </div>
            </div>
            
            <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Using: <span className="font-medium">{API_CONFIGS[activeApi]?.name || 'Unknown'}</span>
              </p>
              {!process.env[`REACT_APP_${activeApi}_API_KEY`] && (
                <p className="text-xs text-red-500 mt-1">
                  Warning: API key not found for {activeApi}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
      
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col"
          style={{ 
            height: 'calc(100vh - 100px)',
            maxHeight: '700px',
            marginTop: '20px'
          }}
        >
          {/* Chat header */}
          <div className="bg-primary text-white p-4 flex justify-between items-center sticky top-0 z-10">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold">Chat with Khushbakht's AI</h3>
              <span className="text-xs bg-white bg-opacity-20 px-2 py-0.5 rounded-full">
                {API_CONFIGS[activeApi]?.name || 'AI'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsSettingsOpen(!isSettingsOpen);
                }}
                className="text-white hover:text-gray-200 p-1"
                title="AI Settings"
              >
                <Settings size={18} />
              </button>
              <button 
                onClick={toggleChat} 
                className="text-white hover:text-gray-200 p-1"
                title="Close chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 pt-2">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white rounded-br-none'
                      : `bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none ${
                          message.isError ? 'border-l-4 border-red-500' : ''
                        }`
                  }`}
                >
                  <div className="flex items-center mb-1">
                    {message.sender === 'bot' ? (
                      <Bot size={14} className="mr-1" />
                    ) : (
                      <User size={14} className="mr-1" />
                    )}
                    <span className="text-xs opacity-75">
                      {message.sender === 'bot' ? 'Khushbakht' : 'You'} •{' '}
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      {message.source && message.sender === 'bot' && (
                        <span className="ml-1 text-[10px] opacity-60">
                          ({API_CONFIGS[message.source]?.name || message.source})
                        </span>
                      )}
                    </span>
                  </div>
                  <p className="whitespace-pre-wrap">{message.text}</p>
                </div>
              </motion.div>
            ))}
            {isSending && (
              <div className="flex items-center mb-4">
                <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="h-2 w-2 bg-gray-400 rounded-full mx-1 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isSending}
              />
              <button
                type="submit"
                disabled={isSending || !input.trim()}
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 disabled:opacity-50 flex items-center justify-center"
              >
                {isSending ? (
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                ) : (
                  <Send size={20} />
                )}
              </button>
            </div>
          </form>
        </motion.div>
      ) : (
        <motion.button
          onClick={toggleChat}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-white p-4 rounded-full shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}
    </div>
  );
};

export default ChatBot;