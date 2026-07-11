import React from 'react';
import { educationList } from '../data/portfolioData';

const EducationCard = ({ edu, index }) => (
  <div 
    data-aos="fade-up"
    data-aos-delay={index * 150}
    className="bg-[#f8f8f8] border border-gray-200 rounded-3xl p-8 hover:scale-[1.02] hover:bg-white hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_45px_rgba(255,42,42,0.08)] transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-6">
        <span className="text-gray-400 text-xs font-mono font-bold tracking-widest uppercase">
          {edu.duration}
        </span>
        <span className="bg-[#ff2a2a]/10 text-[#ff2a2a] text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded-full border border-[#ff2a2a]/20">
          Degree
        </span>
      </div>
      <h3 className="text-gray-900 text-2xl font-black mb-1 tracking-tight">
        {edu.degree}
      </h3>
      <p className="text-[#ff2a2a] text-sm font-black tracking-wide mb-6 uppercase">
        {edu.institution}
      </p>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
        {edu.details}
      </p>
    </div>
    <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Academic Score:</span>
      <span className="text-gray-900 font-mono font-bold text-sm bg-gray-100 px-3 py-1 rounded-full">{edu.score}</span>
    </div>
  </div>
);

const Education = () => {
  return (
    <section id="education" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Torn paper divider at top (transition from dark Leadership section) */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-[1px] rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0a0a0a]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Academic Background
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4 uppercase">
            Education Journey
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-semibold max-w-lg mx-auto">
            A history of my academic qualifications and educational achievements.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {educationList.map((edu, index) => (
            <EducationCard key={edu.degree} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
