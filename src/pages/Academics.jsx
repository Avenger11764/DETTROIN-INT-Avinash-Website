import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const stageData = {
  primary: {
    title: 'Foundational & Primary Stage (Nursery – Grade 5)',
    desc: 'Activity-based learning designed to spark curiosity, motor skills, language fluency, and foundational numeracy in a playful environment.',
    features: ['Play-way methodology', 'Phonetics & Storytelling', 'STEM activity kits', 'Art, Music & Movement'],
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
  },
  middle: {
    title: 'Middle Stage (Grade 6 – Grade 8)',
    desc: 'Transition to experiential learning with emphasis on science experiments, mathematical reasoning, social studies, and language mastery.',
    features: ['Experiential Science Labs', 'Coding & Computer Basics', 'Language Immersion (Hindi/English/Sanskrit)', 'Inter-house competitions'],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  secondary: {
    title: 'Secondary & Senior Secondary (Grade 9 – Grade 12)',
    desc: 'Rigorous CBSE board exam preparation combined with career counseling, competitive exam guidance (JEE/NEET/CUET), and specialized streams.',
    features: ['Science (PCM/PCB) Stream', 'Commerce & Accountancy', 'Humanities & Social Sciences', 'JEE/NEET Integrated Coaching'],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
};

const Academics = () => {
  const [activeStage, setActiveStage] = useState('primary');

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-1">
        <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
          CBSE CURRICULUM EXCELLENCE
        </span>
        <h1 className="reveal-drop delay-100 font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] font-extrabold mb-6 tracking-tight">
          Academic Wings & Pedagogy
        </h1>
        <p className="reveal-fade delay-200 font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto leading-relaxed">
          From early childhood foundation to senior secondary mastery, our CBSE academic framework fosters critical inquiry and holistic intellectual growth.
        </p>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="flex justify-center gap-2 sm:gap-4 mb-12 flex-wrap reveal-drop">
          <button
            onClick={() => setActiveStage('primary')}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
              activeStage === 'primary'
                ? 'bg-[#000666] text-white shadow-md'
                : 'bg-white text-[#000666] hover:bg-[#e0e0ff]'
            }`}
          >
            Primary (Nursery - 5)
          </button>
          <button
            onClick={() => setActiveStage('middle')}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
              activeStage === 'middle'
                ? 'bg-[#000666] text-white shadow-md'
                : 'bg-white text-[#000666] hover:bg-[#e0e0ff]'
            }`}
          >
            Middle (Grades 6 - 8)
          </button>
          <button
            onClick={() => setActiveStage('secondary')}
            className={`px-6 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
              activeStage === 'secondary'
                ? 'bg-[#000666] text-white shadow-md'
                : 'bg-white text-[#000666] hover:bg-[#e0e0ff]'
            }`}
          >
            Senior Secondary (Grades 9 - 12)
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#c6c5d4] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 reveal-zoom">
          <div className="space-y-6">
            <h2 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-[#000666]">
              {stageData[activeStage].title}
            </h2>
            <p className="font-body-md text-base text-[#454652] leading-relaxed">
              {stageData[activeStage].desc}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="font-bold text-sm text-[#7e5700] uppercase tracking-wider">Key Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stageData[activeStage].features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#191c1d] font-semibold">
                    <span className="material-symbols-outlined text-[#feb300] text-lg">check_circle</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                to="/admissions"
                className="bg-[#feb300] text-[#281900] font-bold px-8 py-3.5 rounded-full shadow-md hover:bg-[#ffdeac] hover-lift transition-all inline-flex items-center gap-2 text-sm"
              >
                <span>Apply for Admission</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] border border-[#c6c5d4] bg-white relative z-10">
            <img
              className="w-full h-full object-cover relative z-10"
              src={stageData[activeStage].img}
              alt={stageData[activeStage].title}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#edeeef]/40 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-drop">
            <h2 className="font-headline-lg text-3xl font-extrabold text-[#000666]">Streams Offered (Grades 11 & 12)</h2>
            <p className="text-sm text-[#454652] mt-1">Specialized academic pathways affiliated with CBSE Delhi</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-left hover-lift relative z-10">
              <div className="w-12 h-12 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">science</span>
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Science Stream</h3>
              <p className="text-xs text-[#454652]">Physics, Chemistry, Mathematics, Biology, Computer Science, English Core.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-fade delay-100 hover-lift relative z-10">
              <div className="w-12 h-12 bg-[#ffdeac] text-[#7e5700] rounded-2xl flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Commerce Stream</h3>
              <p className="text-xs text-[#454652]">Accountancy, Business Studies, Economics, Applied Mathematics, Informatics Practices.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-right delay-200 hover-lift relative z-10">
              <div className="w-12 h-12 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-2xl">menu_book</span>
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Humanities Stream</h3>
              <p className="text-xs text-[#454652]">History, Political Science, Psychology, Economics, Fine Arts, English Core.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
