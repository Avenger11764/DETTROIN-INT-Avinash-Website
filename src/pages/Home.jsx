import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const facilityTabs = [
  {
    id: 'all',
    label: 'All Campus Highlights',
    items: [
      {
        title: 'Smart Air-Conditioned Classrooms',
        desc: 'Interactive smart boards, ergonomic seating, and individual student lockers.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtyAP9t5RkFs1y2bux6SvqESjJWLJDWxfhaQSMyA7Gzt4pPNpPgxffmM9ldaQTIQPRpf2NXGNNYMhy8bvka1WqXwTq5hwOduSw09rgYte60FrTLz9xi4JB0lLLXDoUyR95gRF71cPrQQU5SF-8YhPIVVtog6GwyCrXkXEtYJyi5AD3WxbKlnGpImTFhWX_xnSiLDvybTlGFyPONzCQ1UJw5j6BgnnH96mWgBcCVYA1CCX8bFHvc0rn0JMgPfZarFufxV6tTVBqa6PL',
      },
      {
        title: 'Advanced Science & AI Innovation Labs',
        desc: 'Fully certified Physics, Chemistry, Biology, 3D printing, and Robotics stations.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZzLiuyrZGUq3RvKP2l9rxwZ8dtAFSQykVbhKfBqnc-m-0RmUl5u5Wb7f5q90xdR9Yk00A566xyvRS_XWKunLuGqmEI_B2_nn4vhZXQmjkv9eHv9Y6lSVvOOd2Ldb2GQ4-sq9QbpeQ72DZlyd2XwZNkW18vNxuKaQcARE1IcRgZcHhgmof7f-4jdwECHhSG_lK9uJHaj-jol_cf4cYxps3BnoYwjNJd7DGFIHlqWEEwA0TCP2VTCyG4y9DDNCmjucYWBNvxYQ09HqN',
      },
      {
        title: 'Central Knowledge Library',
        desc: 'Over 10,000 reference books, journals, quiet study pods, and e-learning terminals.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUmCdR-tvEKdw7Vzq0ygULEfMwNo1QnmjpxmLtxPxZvC6AVZPEYrxrhIVM4Sau8iMofROqmfnATCcXm4aKcGpEeo6Po5sXQsocEr-PwwD4Pt574LWV657hCpJ1tH7_DC3cTPOY-6xaW2tYAYJsYtYXPJO2lgp_ufiaWC08iAlHjgsh27Y-HZFCqhinM1IbKD5hs_h8Au-fhVCL4AcbdQmfVUO4wspI4P695JUSTqrb3zql59lIuAxtJh_LA3H7jJwYy08nGuyg6Pp2',
      },
    ],
  },
  {
    id: 'labs',
    label: 'Labs & Tech',
    items: [
      {
        title: 'Advanced Science & AI Innovation Labs',
        desc: 'Fully certified Physics, Chemistry, Biology, 3D printing, and Robotics stations.',
        img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZzLiuyrZGUq3RvKP2l9rxwZ8dtAFSQykVbhKfBqnc-m-0RmUl5u5Wb7f5q90xdR9Yk00A566xyvRS_XWKunLuGqmEI_B2_nn4vhZXQmjkv9eHv9Y6lSVvOOd2Ldb2GQ4-sq9QbpeQ72DZlyd2XwZNkW18vNxuKaQcARE1IcRgZcHhgmof7f-4jdwECHhSG_lK9uJHaj-jol_cf4cYxps3BnoYwjNJd7DGFIHlqWEEwA0TCP2VTCyG4y9DDNCmjucYWBNvxYQ09HqN',
      },
      {
        title: 'Robotics & STEM Arena',
        desc: 'Microcontroller kits, Lego Mindstorms, and AI competitive training stations.',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
  {
    id: 'sports',
    label: 'Sports Infrastructure',
    items: [
      {
        title: 'Heated Indoor Swimming Complex',
        desc: 'Half-Olympic 8-lane swimming pool with certified male & female coaches.',
        img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'FIBA Basketball & Turf Ground',
        desc: 'Floodlit basketball court and lush grass football ground with synthetic 400m track.',
        img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },
];

const faqs = [
  {
    q: 'What are the admission entry criteria and age limits for Nursery & LKG?',
    a: 'For Nursery, the child must be 3+ years old as of March 31st of the academic session. Admission is based on an informal child-parent interaction designed to assess developmental readiness.',
  },
  {
    q: 'Is Krishna International School affiliated with CBSE Delhi?',
    a: 'Yes, Krishna International School is fully affiliated with the Central Board of Secondary Education (CBSE), Delhi up to Senior Secondary level (Grade XII) across Science, Commerce, and Humanities streams.',
  },
  {
    q: 'Does the school provide air-conditioned bus transport across Aligarh?',
    a: 'Yes, KIS operates a fleet of GPS-tracked, AC buses equipped with CCTV cameras, speed governors, and trained female attendants covering all major routes in Aligarh city and nearby regions.',
  },
  {
    q: 'What specialized coaching is offered for competitive exams like JEE & NEET?',
    a: 'We offer an integrated foundation program for Grades 9–12, incorporating specialized coaching for JEE Main/Advanced, NEET, and CUET alongside regular CBSE board preparation.',
  },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [openFaq, setOpenFaq] = useState(0);

  const currentTab = facilityTabs.find((t) => t.id === activeTab) || facilityTabs[0];

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md selection:bg-[#e0e0ff] selection:text-[#000767] relative z-1 overflow-x-hidden">
      <header className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#1a237e] rounded-full blur-3xl -mr-40 -mt-40"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#feb300] rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="reveal-drop inline-block px-4 py-1.5 rounded-full bg-[#e0e0ff] text-[#000767] font-label-md text-xs sm:text-sm mb-6 font-semibold shadow-sm">
                Excellence in Education Since 2010
              </span>
              <h1 className="reveal-left delay-100 font-display-lg text-3xl sm:text-5xl lg:text-6xl text-[#000666] mb-6 leading-tight font-extrabold tracking-tight">
                Shaping Future <span className="text-[#7e5700]">Leaders</span> with Care
              </h1>
              <p className="reveal-left delay-200 font-body-lg text-base md:text-lg text-[#454652] mb-8 max-w-xl leading-relaxed">
                A vibrant CBSE affiliated learning community in Aligarh dedicated to nurturing holistic growth, academic rigor, and compassionate leadership.
              </p>
              <div className="reveal-fade delay-300 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-[#feb300] text-[#281900] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#ffdeac] transition-all flex items-center justify-center gap-2 text-base hover-lift"
                >
                  <span>Admissions Open 2026-27</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#000666] text-[#000666] font-bold px-8 py-4 rounded-full hover:bg-[#e0e0ff] transition-all flex items-center justify-center gap-2 text-base hover-lift"
                >
                  <span>Book a Campus Tour</span>
                  <span className="material-symbols-outlined text-xl">calendar_month</span>
                </Link>
              </div>
            </div>

            <div className="relative reveal-right delay-200 z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 sm:border-12 border-white bg-white">
                <img
                  className="w-full aspect-[4/3] object-cover relative z-10"
                  src="/school-building.jpg"
                  alt="Krishna International School Aligarh Main Campus Building"
                  loading="eager"
                  decoding="async"
                />
              </div>

              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-20 h-20 sm:w-24 sm:h-24 bg-[#feb300] rounded-full z-0 flex items-center justify-center shadow-md animate-pulse">
                <span className="material-symbols-outlined text-white text-3xl sm:text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>

              <div className="reveal-drop delay-400 absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-2xl shadow-xl z-20 hidden md:block border border-[#c6c5d4]">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3 overflow-hidden">
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                      alt="Parent 1"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                      alt="Parent 2"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
                      alt="Parent 3"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#000666] text-base">500+ Parents</p>
                    <p className="text-xs text-[#454652] font-medium">Recommended Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#000666] py-12 sm:py-16 relative z-10 overflow-hidden shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="reveal-zoom">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e0e0ff] mb-1">2010</p>
              <p className="text-white/80 font-label-md text-xs sm:text-sm">Established</p>
            </div>
            <div className="reveal-zoom delay-100">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#feb300] mb-1">100%</p>
              <p className="text-white/80 font-label-md text-xs sm:text-sm">CBSE Pass Rate</p>
            </div>
            <div className="reveal-zoom delay-200">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#e0e0ff] mb-1">5+</p>
              <p className="text-white/80 font-label-md text-xs sm:text-sm">Acres Campus</p>
            </div>
            <div className="reveal-zoom delay-300">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#feb300] mb-1">1:15</p>
              <p className="text-white/80 font-label-md text-xs sm:text-sm">Teacher Student Ratio</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center mb-12 sm:mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider">
            Why Krishna International
          </span>
          <h2 className="font-display-lg text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
            Nurturing Excellence in Every Sphere
          </h2>
          <p className="font-body-lg text-sm sm:text-base md:text-lg text-[#454652] max-w-2xl mx-auto">
            We provide a world-class environment designed to ignite curiosity, foster innovation, and build strong ethical values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm hover-lift border border-[#c6c5d4] group reveal-left relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                auto_stories
              </span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#000666] mb-3 sm:mb-4">CBSE Excellence</h3>
            <p className="text-[#454652] leading-relaxed text-sm">
              Comprehensive curriculum focusing on conceptual clarity, critical thinking, and board examination mastery.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm hover-lift border border-[#c6c5d4] group reveal-fade delay-100 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#ffdeac] text-[#7e5700] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                sports_soccer
              </span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#000666] mb-3 sm:mb-4">Sports & Activities</h3>
            <p className="text-[#454652] leading-relaxed text-sm">
              Indoor swimming pool, FIBA basketball court, football fields, and professional athletic coaching.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-3xl shadow-sm hover-lift border border-[#c6c5d4] group reveal-right delay-200 relative z-10">
            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-2xl sm:text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                precision_manufacturing
              </span>
            </div>
            <h3 className="font-headline-md text-xl sm:text-2xl font-bold text-[#000666] mb-3 sm:mb-4">STEM & Robotics</h3>
            <p className="text-[#454652] leading-relaxed text-sm">
              Modern innovation labs, 3D printing, AI learning, and hands-on robotics workshops for future innovators.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f4f5]/50 py-16 sm:py-24 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider">
              World-Class Infrastructure
            </span>
            <h2 className="font-display-lg text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000666] mt-2 mb-6">
              Designed for Discovery
            </h2>

            <div className="flex justify-center gap-2 sm:gap-4 flex-wrap mb-10">
              {facilityTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all shadow-sm ${
                    activeTab === tab.id
                      ? 'bg-[#000666] text-white shadow-md'
                      : 'bg-white text-[#000666] hover:bg-[#e0e0ff]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {currentTab.items.map((item, idx) => (
              <div key={idx} className="relative rounded-3xl overflow-hidden shadow-lg group h-72 sm:h-80 reveal-zoom z-10 bg-white border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/95 via-[#000666]/40 to-transparent p-6 sm:p-8 flex items-end z-20">
                  <div>
                    <h4 className="text-white text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center mb-12 sm:mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider">
            ACADEMIC & SPORTS HALL OF FAME
          </span>
          <h2 className="font-display-lg text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
            Celebrating Student Achievements
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-md border border-[#c6c5d4] space-y-4 hover-lift relative z-10 reveal-left">
            <span className="bg-[#feb300] text-[#281900] font-bold text-xs px-3 py-1 rounded-full inline-block">
              CBSE CLASS XII TOPPER
            </span>
            <h3 className="font-bold text-[#000666] text-xl">98.4% Science Aggregate</h3>
            <p className="text-xs text-[#454652] leading-relaxed">
              Consistently achieving top honors in CBSE Board examinations with state-level merit positions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border border-[#c6c5d4] space-y-4 hover-lift relative z-10 reveal-fade delay-100">
            <span className="bg-[#e0e0ff] text-[#000666] font-bold text-xs px-3 py-1 rounded-full inline-block">
              STATE SWIMMING MEET
            </span>
            <h3 className="font-bold text-[#000666] text-xl">5 Gold Medals in 2025</h3>
            <p className="text-xs text-[#454652] leading-relaxed">
              Our swimming team dominated the inter-district championship in 100m freestyle and relays.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md border border-[#c6c5d4] space-y-4 hover-lift relative z-10 reveal-right delay-200">
            <span className="bg-[#ffdeac] text-[#7e5700] font-bold text-xs px-3 py-1 rounded-full inline-block">
              NATIONAL ROBOTICS EXPO
            </span>
            <h3 className="font-bold text-[#000666] text-xl">Best Innovation Award</h3>
            <p className="text-xs text-[#454652] leading-relaxed">
              Grade 10 STEM club members designed an autonomous solar-powered water filtration rover.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-[#e0e0ff]/20 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-display-lg text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
              Parent Inquiry Guide
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 reveal-zoom">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#c6c5d4] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-6 text-left font-bold text-[#000666] text-base sm:text-lg flex justify-between items-center gap-4 hover:bg-[#f8f9fa]"
                >
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-2xl text-[#7e5700] shrink-0">
                    {openFaq === idx ? 'remove' : 'add'}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 pt-2 text-sm text-[#454652] leading-relaxed border-t border-[#c6c5d4]/30 bg-[#f8f9fa]/50 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 relative z-10 reveal-zoom">
        <div className="bg-[#feb300] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 shadow-lg">
          <div className="relative z-10 text-center md:text-left space-y-2">
            <h2 className="font-display-lg text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#281900] tracking-tight">
              Admissions Open 2026–27
            </h2>
            <p className="font-body-lg text-[#604100] text-sm sm:text-base md:text-lg max-w-xl">
              Take the first step towards a bright future. Limited seats available for the upcoming academic session.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/admissions"
              className="bg-[#000666] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-md hover:scale-105 transition-all text-sm sm:text-base text-center"
            >
              Apply Online Now
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#000666] px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-md hover:scale-105 transition-all text-sm sm:text-base text-center"
            >
              Download Prospectus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
