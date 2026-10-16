'use client';

import React, { useState } from 'react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email format is invalid';
    }
    if (!formData.subject) newErrors.subject = 'Please select a subject';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
        setTimeout(() => setShowSuccess(false), 5000);
      }, 1500);
    }
  };

  const keyContacts = [
    {
      name: 'Senior Counsel Hadija Murangwa',
      title: 'Founder',
      email: 'hmurangwa@gmail.com',
      phone: '+250 788 300 959',
      initials: 'HM',
      image: '',
    },
    {
      name: 'Felista Mubyeyi Kimanuka',
      title: 'Founding Partner',
      email: 'chfelista@gmail.com',
      phone: '+250 788 640 651',
      initials: 'FK',
      image: '/images/team/felista-kimanuka.png',
    },
    {
      name: 'Senior Counsel Mugire R. Joseph',
      title: 'Founding Partner & Managing Director',
      email: 'joseph_mugire@yahoo.com',
      phone: '+250 788 503 984',
      initials: 'MJ',
      image: '/images/team/mugire-joseph.png',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our experienced legal team."
        breadcrumb="Contact"
      />

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Contact Information */}
            <ScrollReveal direction="left">
              <div>
                <h2 className="text-3xl lg:text-4xl font-serif text-[#1B2A4A] mb-6">Get In Touch</h2>
                <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                  We would love to hear from you. Reach out to us for a consultation or any legal inquiries.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F8F6F3] text-[#C8A951] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1B2A4A] text-xl mb-1">Email</h3>
                      <div className="flex flex-col items-start gap-1">
                        <a href="mailto:taxpluschambers@gmail.com" className="text-gray-600 hover:text-[#C8A951] transition-colors">taxpluschambers@gmail.com</a>
                        <a href="mailto:mugirerwamfizijoseph@gmail.com" className="text-gray-600 hover:text-[#C8A951] transition-colors">mugirerwamfizijoseph@gmail.com</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F8F6F3] text-[#C8A951] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1B2A4A] text-xl mb-1">Phone</h3>
                      <div className="flex flex-col items-start gap-1">
                        <a href="tel:+250788640651" className="text-gray-600 hover:text-[#C8A951] transition-colors">+250 788 640 651</a>
                        <a href="tel:+250788503984" className="text-gray-600 hover:text-[#C8A951] transition-colors">+250 788 503 984</a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#F8F6F3] text-[#C8A951] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1B2A4A] text-xl mb-1">Location</h3>
                      <p className="text-gray-600 leading-relaxed">KN 05 Airport Road, Kimihurura, Floor B1, Aigle Blanc Building</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-[#F8F6F3] text-[#C8A951] flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-serif text-[#1B2A4A] text-xl mb-1">Office Hours</h3>
                      <p className="text-gray-600">Monday - Friday<br />8:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Column - Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-[#F8F6F3] p-8 lg:p-10 rounded-lg relative">
                {showSuccess && (
                  <div className="absolute top-0 left-0 w-full p-4 mb-4 text-green-800 bg-green-100 rounded-t-lg text-center font-medium">
                    Thank you! Your message has been sent successfully.
                  </div>
                )}
                <h3 className="text-2xl font-serif text-[#1B2A4A] mb-8 mt-2">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-[#2D2D2D] mb-2">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded border ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#C8A951] focus:ring-[#C8A951]'} bg-white text-[#2D2D2D] outline-none transition-colors`}
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#2D2D2D] mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded border ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#C8A951] focus:ring-[#C8A951]'} bg-white text-[#2D2D2D] outline-none transition-colors`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#2D2D2D] mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded border border-gray-200 focus:border-[#C8A951] focus:ring-[#C8A951] bg-white text-[#2D2D2D] outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#2D2D2D] mb-2">Subject <span className="text-red-500">*</span></label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded border ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#C8A951] focus:ring-[#C8A951]'} bg-white text-[#2D2D2D] outline-none transition-colors`}
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Tax Advisory">Tax Advisory</option>
                      <option value="Corporate Law">Corporate Law</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#2D2D2D] mb-2">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded border ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#C8A951] focus:ring-[#C8A951]'} bg-white text-[#2D2D2D] outline-none transition-colors resize-none`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#C8A951] hover:bg-[#b59848] text-white font-medium py-4 px-6 rounded transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Send Message'}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Contacts Section */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 max-w-7xl">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif text-[#1B2A4A]">Our Key Contacts</h2>
              <div className="w-20 h-1 bg-[#C8A951] mx-auto mt-6"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyContacts.map((contact, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center h-full">
                  <div className="w-24 h-24 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center text-2xl font-serif mb-6 shadow-sm overflow-hidden">
                    {contact.image ? (
                      <img src={contact.image} alt={contact.name} className="w-full h-full object-cover" />
                    ) : (
                      contact.initials
                    )}
                  </div>
                  <h3 className="text-xl font-serif text-[#1B2A4A] mb-2">{contact.name}</h3>
                  <p className="text-[#C8A951] font-medium mb-6">{contact.title}</p>
                  
                  <div className="mt-auto space-y-3 w-full">
                    <a href={`mailto:${contact.email}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#C8A951] transition-colors break-all">
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{contact.email}</span>
                    </a>
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center gap-2 text-gray-600 hover:text-[#C8A951] transition-colors">
                      <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{contact.phone}</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="w-full">
        <ScrollReveal>
          <div className="w-full h-[400px] bg-[#1B2A4A] relative border-y-4 border-[#C8A951] flex items-center justify-center overflow-hidden">
            {/* Minimalist pattern overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#C8A951 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center bg-[#1B2A4A]/80 p-8 rounded-lg border border-[#C8A951]/30 backdrop-blur-sm">
              <div className="w-16 h-16 rounded-full bg-[#C8A951] text-white flex items-center justify-center mb-4 shadow-lg animate-bounce">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-2xl font-serif text-white mb-2 tracking-wide text-center max-w-xl">KN 05 Airport Road, Kimihurura, Floor B1, Aigle Blanc Building</h3>
              <p className="text-gray-300 font-medium">Interactive Map Placeholder</p>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
