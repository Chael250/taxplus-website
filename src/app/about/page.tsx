'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Shield, Target, Users, Award, CheckCircle, Scale, Clock, Briefcase, FileText, Eye } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <PageHero 
        title="About Our Firm" 
        subtitle="Discover our story, values, and commitment to legal excellence."
        breadcrumb="About Us"
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-[#C8A951] font-bold tracking-wider uppercase text-sm">EST. 2018</span>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B2A4A] mt-4 mb-6">Our Story</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="prose prose-lg text-gray-700 mx-auto space-y-6">
              <p>
                Taxplus Chambers Limited was formed on 15th March 2018 by Senior Counsels Felista Mubyeyi Kimanuka, Mugire R. Joseph and Murangwa Ndangiza Hadidja — three well distinguished legal practitioners and Tax experts.
              </p>
              <p>
                The firm specializes in Tax, Corporate Business law, Banking and Finance, Insurance, Construction, Intellectual Property (IP), Mergers & Acquisitions (M&A), Energy, Mining, and Telecom. We also possess extensive experience in Public and Private Partnership (PPP) projects.
              </p>
              <p className="text-xl font-medium text-[#1B2A4A] border-l-4 border-[#C8A951] pl-6 my-8 py-4 bg-gray-50 italic rounded-r-lg">
                "Our team has a deep understanding of legal practice in Rwanda and the region for the satisfaction of domestic, regional and international clients."
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-white p-10 md:p-12 rounded-lg shadow-sm h-full border-t-4 border-[#1B2A4A]">
                <div className="flex items-center mb-6">
                  <Target className="w-10 h-10 text-[#C8A951] mr-4" />
                  <h3 className="text-3xl font-playfair font-bold text-[#1B2A4A]">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To offer our clients seamless service tailored to their needs, providing legal and business advisory within Rwanda with a one-stop-shop experience.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={200}>
              <div className="bg-white p-10 md:p-12 rounded-lg shadow-sm h-full border-t-4 border-[#C8A951]">
                <div className="flex items-center mb-6">
                  <Eye className="w-10 h-10 text-[#1B2A4A] mr-4" />
                  <h3 className="text-3xl font-playfair font-bold text-[#1B2A4A]">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the preferred Corporate and Tax law firm of choice, recognized for excellence and innovative solutions to complex legal problems.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B2A4A] mb-6">Why Choose Us</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto mb-8"></div>
              <p className="text-lg text-gray-700">
                We have built a strong reputation for exceptional legal service and Tax advisory. Our commitment to excellence and finding innovative solutions distinguishes us as the best advocates for your legal needs.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scale, title: 'Legal Expertise', desc: 'Deep understanding of Rwandan and regional law.' },
              { icon: Briefcase, title: 'Tax Specialists', desc: 'Unparalleled advisory in complex tax matters.' },
              { icon: Award, title: 'Excellence', desc: 'Committed to the highest standards of practice.' },
              { icon: FileText, title: 'Innovative Solutions', desc: 'Creative approaches to complex legal problems.' }
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="text-center p-8 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-gray-50 h-full">
                  <div className="bg-white w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <feature.icon className="w-8 h-8 text-[#C8A951]" />
                  </div>
                  <h4 className="text-xl font-playfair font-bold text-[#1B2A4A] mb-3">{feature.title}</h4>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#1B2A4A] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">Our Values</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: 'Integrity', desc: 'We adhere to the highest ethical standards in all our professional dealings.' },
              { icon: Users, title: 'Teamwork', desc: 'We collaborate seamlessly to deliver comprehensive solutions.' },
              { icon: Award, title: 'Quality & Diligence', desc: 'We provide meticulous attention to detail in every matter.' },
              { icon: Clock, title: 'Commitment', desc: 'We are dedicated to our clients\' success and long-term goals.' }
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100} direction="up">
                <div className="bg-[#24355B] p-8 rounded-lg h-full border border-white/10 hover:border-[#C8A951]/50 transition-colors">
                  <value.icon className="w-10 h-10 text-[#C8A951] mb-6" />
                  <h4 className="text-xl font-playfair font-bold mb-4">{value.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clientele */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#1B2A4A] mb-6">Our Clientele</h2>
            <div className="w-24 h-1 bg-[#C8A951] mx-auto mb-10"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Taxplus Chambers Ltd advises banks, financial institutions, insurance companies, manufacturers, real estate developers, petroleum companies, public institutions, religious and charitable organisations, SMEs, individual clients, and other entities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to fostering a professional culture that values diversity, collaboration, and continuous learning to best serve our diverse client base.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Service Delivery */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <div className="bg-white p-10 md:p-16 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1B2A4A] mb-8 text-center">Service Delivery Standards</h2>
              <div className="w-24 h-1 bg-[#C8A951] mx-auto mb-12"></div>
              
              <ul className="space-y-6">
                {[
                  'Returning telephone calls within the same working day',
                  'Acknowledging receipt of emails within the same working day',
                  'Instructions within 24 hours of receipt',
                  'Routine correspondences within one day',
                  'Standard form documentation within two days'
                ].map((standard, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-[#C8A951] mt-1 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-800">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C8A951]">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1B2A4A] mb-8">Ready to work with us?</h2>
            <Link 
              href="/contact" 
              className="inline-block bg-[#1B2A4A] text-white px-8 py-4 rounded font-medium hover:bg-[#24355B] transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Us Today
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
