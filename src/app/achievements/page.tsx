'use client';

import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Trophy, Award, Briefcase, Scale, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AchievementsPage() {
  const achievements = [
    {
      text: "Represented a leading Rwandan financial institution in a significant commercial dispute.",
      icon: <Scale className="w-8 h-8 text-[#C8A951]" />
    },
    {
      text: "Advised an international investor on the acquisition of an interest in a Rwandan Company.",
      icon: <Briefcase className="w-8 h-8 text-[#C8A951]" />
    },
    {
      text: "Advised a major real estate developer on land acquisition, project structuring and contractual matters.",
      icon: <Trophy className="w-8 h-8 text-[#C8A951]" />
    },
    {
      text: "Providing legal and tax advisory services on an ongoing basis to several reputable companies.",
      icon: <Award className="w-8 h-8 text-[#C8A951]" />
    },
    {
      text: "Led a mediation settlement process between a local community project and a commercial bank.",
      icon: <Users className="w-8 h-8 text-[#C8A951]" />
    }
  ];

  const milestones = [
    { year: "2018", text: "Firm established on 15th March 2018 by three founding partners." },
    { year: "2018", text: "Received professional registration and approval as a law firm." },
    { year: "2019", text: "Expanded practice areas to cover all major business sectors." },
    { year: "2020", text: "Successfully represented clients in landmark commercial disputes." },
    { year: "2021", text: "Expanded advisory services to regional and international clients." },
    { year: "2022", text: "Grew expertise in Banking, FinTech, and digital financial services." },
    { year: "2023", text: "Strengthened PPP and infrastructure advisory capabilities." },
    { year: "2024", text: "Continued growth as a leading corporate and tax law firm in Rwanda." }
  ];

  const stats = [
    { value: "8+", label: "Years Experience" },
    { value: "500+", label: "Cases Handled" },
    { value: "100+", label: "Happy Clients" },
    { value: "14", label: "Practice Areas" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        title="Key Achievements" 
        subtitle="A track record of delivering exceptional results for our clients." 
        breadcrumb="Achievements" 
      />

      {/* Notable Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">Notable Achievements</h2>
              <div className="w-20 h-1 bg-[#C8A951] mx-auto"></div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#1B2A4A] hover:-translate-y-2 h-full flex flex-col">
                  <div className="mb-6 bg-[#F8F6F3] w-16 h-16 rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <p className="text-[#2D2D2D] font-medium leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Firm Milestones Timeline */}
      <section className="py-20 bg-[#F8F6F3]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">Our Journey</h2>
              <div className="w-20 h-1 bg-[#C8A951] mx-auto mb-6"></div>
              <p className="text-[#6B7280]">
                A timeline of our firm's growth and key milestones since inception.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-[#C8A951] -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className={`relative flex items-center justify-between md:justify-normal w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Circle */}
                    <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-[#C8A951] border-4 border-white flex items-center justify-center shadow-md z-10 -translate-x-1/2">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>

                    {/* Content Card */}
                    <div className={`w-full ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[#1B2A4A]">
                        <h3 className="text-xl font-bold text-[#1B2A4A] mb-2">{milestone.year}</h3>
                        <p className="text-[#6B7280]">{milestone.text}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1B2A4A] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div className="p-6">
                  <div className="text-4xl md:text-5xl font-bold text-[#C8A951] mb-2 font-serif">{stat.value}</div>
                  <div className="text-sm md:text-base text-gray-300 uppercase tracking-wider">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C8A951]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-serif text-[#1B2A4A] font-bold mb-4">
                  Experience Our Expertise
                </h2>
                <p className="text-[#1B2A4A]/80 text-lg max-w-2xl">
                  Let us bring our proven track record to your legal and tax challenges.
                </p>
              </div>
              <div>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-[#1B2A4A] text-white font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
