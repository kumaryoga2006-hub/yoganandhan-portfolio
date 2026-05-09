import React, { useState } from 'react';
import { CONTACT_INFO } from '../../constants/data';
import { ContactEnvelope } from '../3d/ContactEnvelope';
import { useCursor } from '../../context/CursorContext';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { setCursorState } = useCursor();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'kumaryoga2006@gmail.com',
        },
        'YOUR_PUBLIC_KEY'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Trigger particle burst event
      window.dispatchEvent(new CustomEvent('formSubmitSuccess'));
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-text-primary mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent1 to-accent2 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left 3D Element */}
          <div className="hidden md:block">
            <ContactEnvelope onSuccess={submitStatus === 'success'} />
          </div>

          {/* Right Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent1 focus:ring-2 focus:ring-accent1/20 transition-all"
                  placeholder="Your name"
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent1 focus:ring-2 focus:ring-accent1/20 transition-all"
                  placeholder="your@email.com"
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-text-muted mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent1 focus:ring-2 focus:ring-accent1/20 transition-all"
                  placeholder="Project inquiry"
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-card border border-white/10 rounded-lg text-text-primary placeholder-text-muted/50 focus:outline-none focus:border-accent1 focus:ring-2 focus:ring-accent1/20 transition-all resize-none"
                  placeholder="Your message..."
                  onMouseEnter={() => setCursorState('hover')}
                  onMouseLeave={() => setCursorState('default')}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-accent1 to-accent2 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent1/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                onMouseEnter={() => setCursorState('hover')}
                onMouseLeave={() => setCursorState('default')}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center gap-2 text-green-400 bg-green-400/10 px-4 py-3 rounded-lg">
                  <CheckCircle className="w-5 h-5" />
                  <span>Message sent successfully!</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 bg-red-400/10 px-4 py-3 rounded-lg">
                  <XCircle className="w-5 h-5" />
                  <span>Failed to send message. Please try again.</span>
                </div>
              )}
            </form>

            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              {CONTACT_INFO.map((info, index) => {
                const Icon = info.icon === '📧' ? Mail : 
                            info.icon === '📞' ? Phone :
                            info.icon === '📍' ? MapPin : null;
                
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 p-4 bg-card rounded-lg border border-white/10 hover:border-accent1/50 transition-all ${
                      info.link ? 'cursor-pointer' : ''
                    }`}
                    onMouseEnter={() => setCursorState('hover')}
                    onMouseLeave={() => setCursorState('default')}
                    onClick={() => info.link && window.open(info.link, '_blank')}
                  >
                    <div className="p-2 bg-surface rounded-lg">
                      {Icon ? (
                        <Icon className="w-5 h-5 text-accent1" />
                      ) : (
                        <span className="text-xl">{info.icon}</span>
                      )}
                    </div>
                    <div>
                      <p className="text-text-muted text-xs">{info.label}</p>
                      <p className="text-text-primary text-sm">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
