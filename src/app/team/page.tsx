'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';

export default function TeamPage() {
  return (
    <main>
      <PageHero 
        title="Our Team"
        subtitle="Meet the experienced legal professionals behind Taxplus Chambers Ltd."
        breadcrumb="Our Team"
      />

      <section className="py-16 md:py-24 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1B2A4A] mb-6">
                Founding Partners
              </h2>
              <p className="text-lg text-[#6B7280] font-inter">
                Taxplus Chambers Ltd. was founded by three highly experienced senior legal practitioners. 
                With decades of combined expertise across taxation, corporate law, banking, and commercial litigation, 
                our leadership team brings unparalleled insight and dedication to every client we serve.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-16 md:space-y-24">
            {/* Partner 1 */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-48 h-48 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 shrink-0 shadow-lg overflow-hidden">
                    <img src="/images/team/hadidja-murangwa.png" alt="Senior Counsel Hadija Murangwa" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-2">
                    Senior Counsel Hadija Murangwa
                  </h3>
                  <p className="text-[#C8A951] font-semibold mb-4 text-lg">Founder</p>
                  <div className="space-y-2 text-[15px] text-[#6B7280]">
                    <p><a href="mailto:hmurangwa@gmail.com" className="hover:text-[#1B2A4A] transition-colors">hmurangwa@gmail.com</a></p>
                    <p><a href="tel:+250788300959" className="hover:text-[#1B2A4A] transition-colors">+250 788 300 959</a></p>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Biography</h4>
                    <p className="text-[#2D2D2D] leading-relaxed">
                      Experienced legal practitioner with extensive expertise in taxation, customs, trade facilitation, regional integration, legal and regulatory reform, corporate governance, and institutional strategy.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Career Highlights</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>Director of Strategy at ICPAR (2017-2019)</li>
                      <li>Senior Advisor with GIZ on tax, customs and trade facilitation</li>
                      <li>Consultant with TradeMark East Africa (TMEA)</li>
                      <li>Consultant with IFC (2011-2014)</li>
                      <li>Director of Legal Affairs at Rwanda Revenue Authority (2004-2011)</li>
                      <li>Lecturer at National University of Rwanda (1999-2004)</li>
                      <li>Board member: National Bank of Rwanda, Rwanda Biomedical Centre, MMI, BRD</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Education</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>LL.M. International Business Law, McGill University (2003)</li>
                      <li>LL.B. with Distinction, National University of Rwanda (1999)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Languages</h4>
                    <p className="text-[#2D2D2D]">Kinyarwanda, English, Swahili, French</p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Tax Law", "Tax Administration", "Customs", "International Trade", "Trade Facilitation", "Corporate Governance", "Regulatory Reform", "Regional Integration", "Investment Climate", "Institutional Strategy"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 border border-[#C8A951] text-[#1B2A4A] text-sm rounded-full bg-white font-medium shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="border-t border-gray-200"></div>

            {/* Partner 2 - Reversed layout */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-16 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-end text-center md:text-right">
                  <div className="w-48 h-48 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 shrink-0 shadow-lg overflow-hidden">
                    <img src="/images/team/felista-kimanuka.png" alt="Senior Counsel Felista Mubyeyi Kimanuka" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-2">
                    Senior Counsel Felista Mubyeyi Kimanuka
                  </h3>
                  <p className="text-[#C8A951] font-semibold mb-4 text-lg">Founding Partner</p>
                  <div className="space-y-2 text-[15px] text-[#6B7280]">
                    <p><a href="mailto:chfelista@gmail.com" className="hover:text-[#1B2A4A] transition-colors">chfelista@gmail.com</a></p>
                    <p><a href="tel:+250788640651" className="hover:text-[#1B2A4A] transition-colors">+250 788 640 651</a></p>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Biography</h4>
                    <p className="text-[#2D2D2D] leading-relaxed">
                      Over 15 years of experience in corporate and commercial law, M&A, investment structuring, corporate governance, financial services regulation, and cross-border transactions.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Career Highlights</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>Senior legal and governance positions at Bank of Kigali Plc, BPR Bank Rwanda Plc, and RwandAir Limited</li>
                      <li>Advisory with UNDP and IFC</li>
                      <li>Experience in aircraft acquisitions, fintech, PPP arrangements</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Education</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>LL.M. Law and Development, University of Manchester (Chevening Scholar)</li>
                      <li>LL.B. University of the Witwatersrand, South Africa</li>
                      <li>PG Diploma in Legal Practice, ILPD</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Languages</h4>
                    <p className="text-[#2D2D2D]">English, Kinyarwanda, Swahili, Luganda, working knowledge of French</p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Corporate & Commercial Law", "M&A", "Investment Structuring", "Corporate Governance", "Banking & Financial Services", "FinTech", "Aviation", "PPP", "Regulatory Compliance", "Cross-Border Transactions"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 border border-[#C8A951] text-[#1B2A4A] text-sm rounded-full bg-white font-medium shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="border-t border-gray-200"></div>

            {/* Partner 3 */}
            <ScrollReveal>
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-48 h-48 rounded-full bg-[#1B2A4A] flex items-center justify-center mb-6 shrink-0 shadow-lg overflow-hidden">
                    <img src="/images/team/mugire-joseph.png" alt="Senior Counsel Mugire Rwamfizi Joseph" className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#1B2A4A] mb-2">
                    Senior Counsel Mugire Rwamfizi Joseph
                  </h3>
                  <p className="text-[#C8A951] font-semibold mb-4 text-lg">Founding Partner & Managing Director</p>
                  <div className="space-y-2 text-[15px] text-[#6B7280]">
                    <p><a href="mailto:joseph_mugire@yahoo.com" className="hover:text-[#1B2A4A] transition-colors">joseph_mugire@yahoo.com</a></p>
                    <p><a href="tel:+250788503984" className="hover:text-[#1B2A4A] transition-colors">+250 788 503 984</a></p>
                  </div>
                </div>
                
                <div className="w-full md:w-2/3 space-y-6">
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Biography</h4>
                    <p className="text-[#2D2D2D] leading-relaxed">
                      Experienced senior legal practitioner with particular expertise in banking, commercial litigation, tax and customs law, corporate governance, contract law, regulatory compliance and ADR. Registered advocate and member of the Rwanda Bar Association and East African Law Society, permitted to practice in all Rwandan courts up to the Supreme Court level, with 16 years of experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Career Highlights</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>Head of Legal at BPR Bank Rwanda Plc</li>
                      <li>Key legal role in merger of Banque Populaire du Rwanda and KCB Bank Rwanda</li>
                      <li>Principal State Attorney at Rwanda Revenue Authority</li>
                      <li>Head of Legal, Customs Services Department at RRA</li>
                      <li>Experience in EAC harmonisation initiatives</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Education</h4>
                    <ul className="list-disc pl-5 space-y-2 text-[#2D2D2D]">
                      <li>Master's in Business Law, National University of Rwanda</li>
                      <li>LL.B., National University of Rwanda</li>
                      <li>PG Diploma, ILPD</li>
                      <li>Certified Mediator</li>
                      <li>Associate arbitrator; specialized drafter of legal documents in plain language</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Languages</h4>
                    <p className="text-[#2D2D2D]">Kinyarwanda, English, Luganda, Runyankore, working knowledge of French and Swahili</p>
                  </div>

                  <div>
                    <h4 className="font-playfair text-xl font-bold text-[#1B2A4A] mb-3 border-b border-gray-200 pb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {["Banking & Financial Services", "Commercial Litigation", "Tax & Customs", "Corporate Governance", "Commercial Contracts", "Regulatory Compliance", "ADR", "Employment Law", "Regional Economic Integration", "Transactional lawyer negotiator"].map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 border border-[#C8A951] text-[#1B2A4A] text-sm rounded-full bg-white font-medium shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
