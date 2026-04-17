/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send} from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          <span className="text-gradient">Get In Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Let's talk about everything!</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Feel free to reach out for collaborations, opportunities, or just to say hi.
                I'm currently open for new opportunities as a web developer!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass-card rounded-full flex justify-center items-center text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-colors duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-1">Email Me</h4>
                  <a href="mailto:kumar.deepak.cg.s@gmail.com" className="text-white font-semibold text-lg hover:text-accent-primary transition-colors">kumar.deepak.cg.s@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass-card rounded-full flex justify-center items-center text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-colors duration-300">
                  <FaLinkedin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-1">Lets have a Chat</h4>
                  <a href="https://www.linkedin.com/in/kumar-deepak-cg/" className="text-white font-semibold text-lg hover:text-accent-primary transition-colors">https://www.linkedin.com/in/kumar-deepak-cg/</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 glass-card rounded-full flex justify-center items-center text-accent-secondary group-hover:bg-accent-secondary group-hover:text-white transition-colors duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-gray-400 font-medium mb-1">Location</h4>
                  <p className="text-white font-semibold text-lg">Ahmedabad, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass-card p-10 md:p-12 rounded-3xl flex flex-col gap-6" onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="bg-green-500/20 text-green-400 p-4 rounded-xl text-center border border-green-500/30">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/20 text-red-400 p-4 rounded-xl text-center border border-red-500/30">
                  {errorMessage}
                </div>
              )}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-gray-400 font-medium ml-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-primary transition-colors focus:bg-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-gray-400 font-medium ml-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-accent-primary transition-colors focus:bg-white/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-gray-400 font-medium ml-2">Message</label>
                <textarea
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Let's build something beautiful together..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white resize-none focus:outline-none focus:border-accent-primary transition-colors focus:bg-white/10"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className={`w-full py-4 mt-2 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-2xl text-white font-bold text-lg flex justify-center items-center gap-3 transition-transform shadow-[0_10px_30px_rgba(123,66,246,0.3)] ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'}`}
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'} <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
