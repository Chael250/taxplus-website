'use client';

import Link from 'next/link';
import ScrollReveal from '@/components/ScrollReveal';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#121c32] via-[#1B2A4A] to-[#2a406f] overflow-hidden">
        {/* Decorative dot pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-heading)] text-white mb-4 leading-tight">
              Your Trusted Partners in
              <br />
              <span className="text-[#C8A951]">Tax, Corporate &amp; Banking Law</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 font-[family-name:var(--font-body)] font-light leading-relaxed">
              Providing specialized, dynamic, and reliable legal solutions for businesses in Rwanda and the East African region since 2018.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="px-8 py-4 bg-[#C8A951] text-[#1B2A4A] font-semibold rounded-sm hover:bg-[#d4b763] transition-colors duration-300 w-full sm:w-auto text-center">
                Book a Consultation
              </Link>
              <Link href="/practice-areas" className="px-8 py-4 bg-transparent text-white border-2 border-white font-semibold rounded-sm hover:bg-white hover:text-[#1B2A4A] transition-colors duration-300 w-full sm:w-auto text-center">
                Our Practice Areas
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
          <span className="text-white/50 text-sm mb-2 font-medium tracking-widest uppercase">Scroll</span>
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <ScrollReveal>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-1 bg-[#C8A951]"></div>
                  <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-[#1B2A4A]">About Our Firm</h2>
                </div>
                <p className="text-[#6B7280] text-lg mb-6 leading-relaxed">
                  Taxplus Chambers Ltd was formed on 15th March 2018 by three distinguished legal practitioners and Tax experts. We are a Corporate and Tax law firm serving as a preferred choice for businesses navigating complex legal landscapes.
                </p>
                <Link href="/about" className="inline-flex items-center text-[#C8A951] font-semibold hover:text-[#1B2A4A] transition-colors group">
                  Learn More 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </Link>
              </ScrollReveal>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <ScrollReveal delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center p-6 bg-[#F8F6F3] rounded-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#C8A951] mb-2 font-[family-name:var(--font-heading)]">8+</div>
                    <div className="text-[#2D2D2D] font-medium uppercase tracking-wider text-sm">Years of Experience</div>
                  </div>
                  <div className="text-center p-6 bg-[#F8F6F3] rounded-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#C8A951] mb-2 font-[family-name:var(--font-heading)]">10+</div>
                    <div className="text-[#2D2D2D] font-medium uppercase tracking-wider text-sm">Practice Areas</div>
                  </div>
                  <div className="text-center p-6 bg-[#F8F6F3] rounded-sm">
                    <div className="text-4xl md:text-5xl font-bold text-[#C8A951] mb-2 font-[family-name:var(--font-heading)]">3</div>
                    <div className="text-[#2D2D2D] font-medium uppercase tracking-wider text-sm">Senior Partners</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-[#F8F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4">Our Practice Areas</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tax Law & Administration', desc: 'Expert guidance on tax compliance and planning.' },
              { title: 'Banking & Finance', desc: 'Navigating complex financial regulations and deals.' },
              { title: 'Corporate & Commercial Law', desc: 'Comprehensive legal support for businesses.' },
              { title: 'Mergers & Acquisitions', desc: 'Strategic counsel for corporate transactions.' },
              { title: 'Insurance Law', desc: 'Advising on regulatory and claims matters.' },
              { title: 'Intellectual Property', desc: 'Protecting your valuable creative assets.' },
              { title: 'Energy, Oil & Gas, Mining', desc: 'Specialized counsel in energy and resources.' },
              { title: 'Dispute Resolution', desc: 'Effective advocacy in complex legal disputes.' }
            ].map((area, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Link href="/practice-areas" className="block group h-full">
                  <div className="bg-white p-8 h-full border-l-4 border-transparent hover:border-[#C8A951] shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 mb-6 text-[#C8A951]">
                      {/* Simple SVG icon placeholder */}
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-full h-full">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-[#1B2A4A] mb-3 group-hover:text-[#C8A951] transition-colors">{area.title}</h3>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{area.desc}</p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-4">Meet Our Partners</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Hadija Ndangiza Murangwa',
                title: 'Founding Partner',
                expertise: 'Taxation, customs, trade facilitation, regional integration.',
                initials: 'HN',
                image: '/images/team/hadidja-murangwa.png'
              },
              {
                name: 'Felista Mubyeyi Kimanuka',
                title: 'Founding Partner',
                expertise: 'Corporate law, M&A, investment structuring, financial services.',
                initials: 'FK',
                image: '/images/team/felista-kimanuka.png'
              },
              {
                name: 'Mugire Rwamfizi Joseph',
                title: 'Founding Partner & MD',
                expertise: 'Banking, commercial litigation, tax & customs.',
                initials: 'MJ',
                image: '/images/team/mugire-joseph.png'
              }
            ].map((partner, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="bg-white group flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 overflow-hidden border-4 border-transparent group-hover:border-[#C8A951] transition-colors duration-300">
                    {partner.image ? (
                      <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl font-bold text-[#C8A951] font-[family-name:var(--font-heading)]">{partner.initials}</span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-[#1B2A4A] mb-2">{partner.name}</h3>
                  <p className="text-[#C8A951] font-medium mb-4">{partner.title}</p>
                  <p className="text-[#6B7280] mb-6 px-4">{partner.expertise}</p>
                  <Link href="/about" className="text-[#1B2A4A] font-semibold border-b-2 border-[#C8A951] pb-1 hover:text-[#C8A951] transition-colors">
                    View Profile
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#1B2A4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Excellence', desc: 'Delivering outstanding legal solutions.', icon: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z' },
              { title: 'Innovation', desc: 'Forward-thinking approach to law.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { title: 'Integrity', desc: 'Uncompromising ethical standards.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Commitment', desc: 'Dedicated to our clients success.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' }
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="text-center p-6 border border-[#2a406f] rounded-sm hover:bg-[#20325c] transition-colors duration-300 h-full">
                  <svg className="w-12 h-12 text-[#C8A951] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={value.icon}></path>
                  </svg>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-[#C8A951] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-heading)] text-[#1B2A4A] mb-6">Ready to Discuss Your Legal Needs?</h2>
            <p className="text-[#1B2A4A]/80 text-xl mb-10 max-w-2xl mx-auto">Get in touch with our experienced team for a consultation.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-white text-[#1B2A4A] font-bold rounded-sm hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
