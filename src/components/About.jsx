import React from 'react';
import stackImage from '../assets/about/yash_avatar.jpg';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ExcelIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      {/* Excel Green Shield */}
      <rect x="14" y="14" width="100" height="100" rx="16" fill="#107c41" />
      {/* Grid Pattern in Background */}
      <path stroke="white" strokeWidth="2" strokeOpacity="0.2" d="M45 14v100 M80 14v100 M14 45h100 M14 80h100" />
      {/* Large 'X' in grid */}
      <path fill="white" d="M38 38h14l12 18 12-18h14L73 64l18 26H77L64 72l-13 18H37l18-26L38 38z" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">MS Excel</span>
  </div>
);

const PowerBIIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect x="14" y="14" width="100" height="100" rx="16" fill="#e6a100" opacity="0.1" />
      {/* Bar 1: Left, lowest */}
      <rect x="25" y="70" width="22" height="33" rx="4" fill="#e6c229" />
      {/* Bar 2: Middle, medium */}
      <rect x="53" y="45" width="22" height="58" rx="4" fill="#f2b807" />
      {/* Bar 3: Right, highest */}
      <rect x="81" y="20" width="22" height="83" rx="4" fill="#f29f05" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Power BI</span>
  </div>
);

const FinancialModelingIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect x="14" y="14" width="100" height="100" rx="16" fill="#0066cc" opacity="0.1" />
      {/* Grid Lines */}
      <path stroke="white" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.3" d="M14 36h100M14 58h100M14 80h100M42 14v100M70 14v100M98 14v100" />
      {/* Axes */}
      <path stroke="white" strokeWidth="3" strokeLinecap="round" d="M25 25v78h78" fill="none" />
      {/* Upward Line Chart */}
      <path stroke="#00d8ff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M25 90l18-18 20 10 22-38 18-18" />
      {/* Node Dots */}
      <circle cx="25" cy="90" r="4.5" fill="white" />
      <circle cx="43" cy="72" r="4.5" fill="white" />
      <circle cx="63" cy="82" r="4.5" fill="white" />
      <circle cx="85" cy="44" r="4.5" fill="white" />
      <circle cx="103" cy="26" r="4.5" fill="#ff2a2a" />
    </svg>
    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">Modeling</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Yash Bhadani — Corporate Finance & Data Analytics" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex items-center gap-10 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ExcelIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PowerBIIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FinancialModelingIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
