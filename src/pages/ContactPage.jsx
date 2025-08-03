import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// --- Data --- //
const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/khushbakht-khan-b84925221/', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
    { name: 'GitHub', url: 'https://github.com/khushbakhtkhan1', icon: <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> },
    { name: 'Email', url: 'mailto:khankhushbakht1@gmail.com', icon: <EnvelopeIcon className="h-6 w-6" /> },
  ];

// --- Main Page Component --- //
const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    // Replace with your form submission logic (e.g., EmailJS, Formspree)
    try {
      // Example: await emailjs.sendForm(...)
      console.log('Form submitted:', formData);
      setSubmissionStatus({ success: true, message: 'Thank you for your message! I will get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionStatus({ success: false, message: 'Something went wrong. Please try again.' });
    }
    setIsSubmitting(false);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24 sm:py-32">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight">Let's Connect</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">Looking for a frontend-focused full stack developer who can also automate your workflows with n8n? Let's discuss how I can help bring your ideas to life with modern web technologies and intelligent automation.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-800/50 rounded-2xl shadow-xl p-8 md:p-12">
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Build Together</h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm passionate about creating beautiful, responsive frontend experiences and automating complex workflows. Previously as a Software Engineer at Iris Labs, I specialized in React/Next.js applications, FastAPI backends, and n8n automation for AI projects. Currently available for new opportunities and exciting collaborations.
              </p>
              <p className="flex items-center"><EnvelopeIcon className="h-6 w-6 mr-4 text-primary" /> khankhushbakht1@gmail.com</p>

              <p className="flex items-center"><MapPinIcon className="h-6 w-6 mr-4 text-primary" /> Karachi, Pakistan</p>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors duration-300">{link.icon}</a>
                ))}
              </div>
            </div>
            <a href="/Khushbakht-Khan-Resume.pdf" download className="mt-10 inline-flex items-center btn-secondary">
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="form-input" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="form-input" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="6" required className="form-input"></textarea>
              <button type="submit" className="w-full btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
            {submissionStatus && (
              <p className={`mt-4 text-center text-sm ${submissionStatus.success ? 'text-green-500' : 'text-red-500'}`}>
                {submissionStatus.message}
              </p>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
