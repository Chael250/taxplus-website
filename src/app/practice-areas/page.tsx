'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import Link from 'next/link';

const practiceAreas = [
  {
    title: 'Banking & Finance',
    description: 'Advisory on banking regulations, financial transactions, lending agreements, structured finance, and regulatory compliance for banks and financial institutions.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    title: 'Tax Law & Tax Administration',
    description: 'Comprehensive tax advisory services including tax planning, compliance, disputes, customs, and representation before tax authorities, in law courts, and any other decision-making institutions.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: 'Corporate & Commercial Law',
    description: 'Company formation, corporate governance, commercial contracts, joint ventures, and general business advisory.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Mergers, Acquisitions & Private Equity',
    description: 'Transaction structuring, due diligence, deal negotiation, and regulatory approvals for M&A and private equity investments.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Insurance Law',
    description: 'Regulatory compliance, policy drafting, claims management, and dispute resolution for insurance companies and policyholders.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Construction Law',
    description: 'Contract drafting and negotiation, dispute resolution, regulatory compliance, and project advisory for construction projects.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: 'Intellectual Property',
    description: 'Trademark and patent registration, IP portfolio management, licensing, and enforcement of intellectual property rights.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: 'Energy, Oil & Gas, Mining',
    description: 'Regulatory advisory, licensing, environmental compliance, and commercial agreements in the energy and extractive sectors.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Telecommunications',
    description: 'Licensing, regulatory compliance, commercial agreements, and dispute resolution in the telecoms industry.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    )
  },
  {
    title: 'Employment & Employee Benefits',
    description: 'Employment contracts, workplace policies, dispute resolution, and employee benefits advisory.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Real Estate & Conveyance',
    description: 'Property acquisitions, leases, title searches, conveyancing, and real estate development advisory.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )
  },
  {
    title: 'Public-Private Partnerships',
    description: 'Structuring, negotiation, and implementation of PPP arrangements and concession agreements.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Non-Profit Organizations',
    description: 'Incorporation, governance, compliance, tax exemptions, and advisory for NGOs and charitable organisations.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    title: 'Commercial & Civil Dispute Resolution',
    description: 'Litigation, arbitration, mediation, and alternative dispute resolution across commercial and civil matters.',
    icon: (
      <svg className="w-8 h-8 text-[#C8A951]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    )
  }
];

export default function PracticeAreasPage() {
  return (
    <main className="flex flex-col min-h-screen bg-[#F8F6F3]">
      <PageHero
        title="Practice Areas"
        subtitle="Comprehensive legal expertise across all major sectors."
        breadcrumb="Practice Areas"
      />

      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] mb-6">Market-Leading Expertise</h2>
            <p className="text-[#2D2D2D] text-lg leading-relaxed">
              As a full-service law practice, we offer comprehensive legal solutions tailored to meet the unique challenges of our clients. Our dedicated teams combine deep industry knowledge with legal excellence to deliver results across all major sectors.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {practiceAreas.map((area, index) => (
            <ScrollReveal key={area.title} delay={index * 0.1}>
              <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col border-l-4 border-[#C8A951]">
                <div className="mb-4 bg-[#F8F6F3] w-16 h-16 rounded-full flex items-center justify-center">
                  {area.icon}
                </div>
                <h3 className="text-xl font-serif text-[#1B2A4A] mb-3">{area.title}</h3>
                <p className="text-[#6B7280] leading-relaxed flex-grow">
                  {area.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-[#1B2A4A] py-20 px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Need Legal Assistance?</h2>
            <p className="text-[#F8F6F3] text-lg mb-8 max-w-2xl mx-auto">
              Contact our team of experts to discuss your legal needs and find the right solution for your business or personal matters.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-[#C8A951] text-white px-8 py-3 rounded text-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
