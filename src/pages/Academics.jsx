import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const curriculumTabsData = {
  'pre-primary': {
    title: 'Nurturing Early Curiosity',
    icon: 'child_care',
    description:
      'Our Montessori-inspired curriculum focuses on the holistic development of the child through sensory-based learning and creative play. We create a safe, stimulating environment where toddlers explore at their own pace.',
    points: [
      'Sensory Motor Development',
      'Linguistic Awareness (Phonics)',
      'Social & Emotional Intelligence',
      'Creative Expression & Arts',
    ],
    img: 'https://images.unsplash.com/photo-1587691592099-24045742c181?auto=format&fit=crop&w=800&q=80',
  },
  primary: {
    title: 'Foundation of Discovery',
    icon: 'auto_stories',
    description:
      'Grades I to V focus on building core literacy and numeracy skills while encouraging an inquiry-based approach to science and social studies.',
    points: [
      'Integrated Learning & Project Applications',
      'Digital Literacy & Responsible Computing',
      'Inquiry-Based Science Exploration',
      'Multilingual Language Foundations',
    ],
    img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  middle: {
    title: 'Critical Thinking & Analysis',
    icon: 'psychology',
    description:
      'As students move into Grade VI-VIII, the curriculum transitions from foundational knowledge to analytical understanding. We prepare students for the rigors of high school.',
    points: [
      'STEM & Laboratory Experimentation',
      'Analytical Mathematics & Logic',
      'Debate, Research & Global Perspectives',
      'Comprehensive Physical Education',
    ],
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  senior: {
    title: 'Specialization & Career Readiness',
    icon: 'school',
    description:
      'Offering three distinct streams (Science, Commerce, Humanities) with specialized faculty and state-of-the-art laboratories to ensure students excel in competitive exams and higher education.',
    points: [
      'Science Stream (PCM / PCB / Computer Science)',
      'Commerce Stream (Accountancy, Economics, Business)',
      'Humanities Stream (Psychology, Political Science)',
      'JEE / NEET & Entrance Exam Mentorship',
    ],
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('pre-primary');

  const currentContent = curriculumTabsData[activeTab];

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 space-y-6">
            <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block shadow-sm">
              Excellence in Education
            </span>
            <h1 className="reveal-left delay-100 font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] mb-6 leading-tight font-extrabold tracking-tight">
              A Foundation for Lifelong Learning
            </h1>
            <p className="reveal-left delay-200 font-body-lg text-base md:text-lg text-[#454652] mb-8 max-w-xl leading-relaxed">
              At Krishna International School, we nurture curiosity and empower students with a robust academic framework that blends traditional values with modern pedagogy.
            </p>
            <div className="reveal-fade delay-300 flex flex-wrap gap-4 pt-2">
              <a
                href="#curriculum"
                className="bg-[#000666] text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-[#1a237e] hover-lift transition-all text-base"
              >
                <span>Explore Curriculum</span>
                <span className="material-symbols-outlined text-xl">arrow_downward</span>
              </a>
              <button
                onClick={() => alert('Krishna International School 2026-27 Academic Calendar will open...')}
                className="border-2 border-[#000666] text-[#000666] px-8 py-4 rounded-full font-bold hover:bg-[#e0e0ff] hover-lift transition-colors text-base"
              >
                Academic Calendar
              </button>
            </div>
          </div>

          {/* Right Photo Frame */}
          <div className="relative z-10 reveal-right delay-200">
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video md:aspect-square border border-[#c6c5d4] bg-white">
              <img
                className="w-full h-full object-cover relative z-10"
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="Krishna International Classroom"
                loading="eager"
                decoding="async"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#feb300] rounded-3xl -z-10 shadow-md animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* 2. Key Academic Stats */}
      <section className="bg-[#000666] text-white py-14 relative z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal-zoom">
              <p className="text-4xl md:text-5xl font-extrabold text-[#feb300] mb-1">100%</p>
              <p className="text-white/80 font-label-md text-sm">Board Pass Rate</p>
            </div>
            <div className="reveal-zoom delay-100">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">1:15</p>
              <p className="text-white/80 font-label-md text-sm">Teacher-Student Ratio</p>
            </div>
            <div className="reveal-zoom delay-200">
              <p className="text-4xl md:text-5xl font-extrabold text-[#feb300] mb-1">45+</p>
              <p className="text-white/80 font-label-md text-sm">Advanced Labs & Clubs</p>
            </div>
            <div className="reveal-zoom delay-300">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">98.4%</p>
              <p className="text-white/80 font-label-md text-sm">Top Score (Class XII)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curriculum Stages */}
      <section id="curriculum" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
            ACADEMIC PROGRESSION
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
            Curriculum Stages
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto">
            Tailored learning pathways designed to inspire discovery at every stage of development.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Tab Selection Navigation */}
          <div className="lg:w-1/3 w-full flex flex-col gap-4 relative z-10 reveal-left">
            <button
              onClick={() => setActiveTab('pre-primary')}
              className={`text-left p-6 rounded-2xl transition-all hover-lift ${
                activeTab === 'pre-primary'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Pre-Primary</div>
              <div className="font-label-md text-sm text-[#454652]">Early Years (Nursery - UKG)</div>
            </button>

            <button
              onClick={() => setActiveTab('primary')}
              className={`text-left p-6 rounded-2xl transition-all hover-lift ${
                activeTab === 'primary'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Primary</div>
              <div className="font-label-md text-sm text-[#454652]">Foundational Years (Grade I - V)</div>
            </button>

            <button
              onClick={() => setActiveTab('middle')}
              className={`text-left p-6 rounded-2xl transition-all hover-lift ${
                activeTab === 'middle'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Middle</div>
              <div className="font-label-md text-sm text-[#454652]">Critical Thinking (Grade VI - VIII)</div>
            </button>

            <button
              onClick={() => setActiveTab('senior')}
              className={`text-left p-6 rounded-2xl transition-all hover-lift ${
                activeTab === 'senior'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Senior Secondary</div>
              <div className="font-label-md text-sm text-[#454652]">Specialized Streams (Grade IX - XII)</div>
            </button>
          </div>

          {/* Tab Content Display Card */}
          <div className="lg:w-2/3 w-full relative z-10 reveal-right delay-100">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-[#c6c5d4] space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#ffdeac] p-3.5 rounded-full text-[#7e5700]">
                  <span className="material-symbols-outlined text-2xl">{currentContent.icon}</span>
                </div>
                <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-[#000666]">
                  {currentContent.title}
                </h3>
              </div>

              <p className="font-body-md text-base text-[#454652] leading-relaxed">
                {currentContent.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {currentContent.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#7e5700] text-xl mt-0.5">check_circle</span>
                    <span className="font-body-md text-sm text-[#191c1d] font-semibold">{pt}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-[#c6c5d4] bg-white relative z-10 shadow-md">
                <img
                  className="w-full h-full object-cover relative z-10"
                  src={currentContent.img}
                  alt={currentContent.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pedagogy & Holistic Growth */}
      <section className="bg-[#edeeef]/40 py-20 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Info */}
            <div className="lg:w-1/2 space-y-8 reveal-left">
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666]">
                Pedagogy & Holistic Growth
              </h2>
              <p className="font-body-md text-base text-[#454652] leading-relaxed">
                We believe true education extends beyond textbooks. Our balanced curriculum integrates STEM education, performing arts, competitive sports, and ethical values.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#feb300] flex items-center justify-center font-bold text-[#281900] flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Experiential Learning</h4>
                    <p className="text-sm text-[#454652]">Hands-on laboratory experiments, field trips, and project assignments.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#feb300] flex items-center justify-center font-bold text-[#281900] flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Continuous Assessment</h4>
                    <p className="text-sm text-[#454652]">Regular formative evaluations and constructive feedback to track growth.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Grid Images */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10 reveal-right delay-100">
              <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#c6c5d4] bg-white">
                <img
                  className="w-full h-full object-cover relative z-10"
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
                  alt="Science Lab Student"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#c6c5d4] bg-white">
                <img
                  className="w-full h-full object-cover relative z-10"
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Student Awards"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Teaching Faculty */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-1">
        <div className="text-center mb-16 reveal-drop">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">
            Meet Our Specialized Educators
          </h2>
          <p className="font-body-md text-base text-[#454652] max-w-2xl mx-auto">
            Our faculty comprises passionate experts dedicated to mentoring the next generation of leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Faculty Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover-lift border border-[#c6c5d4] text-center relative z-10 reveal-zoom">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e] bg-white shadow-sm">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                alt="Dr. Anita Sharma"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Dr. Anita Sharma</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Head of Sciences</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              PhD in Physics with 15+ years of experience in CBSE curriculum planning.
            </p>
          </div>

          {/* Faculty Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover-lift border border-[#c6c5d4] text-center relative z-10 reveal-zoom delay-100">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e] bg-white shadow-sm">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                alt="Mr. Rajesh Iyer"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Mr. Rajesh Iyer</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Math Lead</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              Specialist in Competitive Exam Coaching (JEE/NEET) and advanced calculus.
            </p>
          </div>

          {/* Faculty Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover-lift border border-[#c6c5d4] text-center relative z-10 reveal-zoom delay-200">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e] bg-white shadow-sm">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                alt="Mrs. Sunita Verma"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Mrs. Sunita Verma</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Head of Languages</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              MA in English Literature with expertise in creative writing and public speaking.
            </p>
          </div>

          {/* Faculty Card 4 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm hover-lift border border-[#c6c5d4] text-center relative z-10 reveal-zoom delay-300">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e] bg-white shadow-sm">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
                alt="Mr. Vikram Chauhan"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Mr. Vikram Chauhan</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Robotics & AI Lead</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              B.Tech in Computer Science guiding students in national robotics competitions.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Admissions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10 reveal-zoom">
        <div className="bg-[#feb300] rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
          <div className="relative z-10 text-center md:text-left space-y-2">
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#281900] tracking-tight">
              Ready to Join Krishna International?
            </h2>
            <p className="font-body-lg text-[#604100] text-base md:text-lg max-w-xl">
              Admissions are open for Session 2026–27. Book a campus tour or apply online today.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/admissions"
              className="bg-[#000666] text-white px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 transition-all text-base text-center hover-lift"
            >
              Apply Online Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
