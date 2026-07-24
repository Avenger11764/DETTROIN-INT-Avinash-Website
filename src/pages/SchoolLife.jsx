import React from 'react';
import { Link } from 'react-router-dom';

const clubsData = [
  {
    title: 'Robotics & AI Club',
    category: 'STEM Innovation',
    icon: 'precision_manufacturing',
    description: 'Students build autonomous robots, program microcontrollers, and enter national AI competitions.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Music & Performing Arts',
    category: 'Cultural Guild',
    icon: 'music_note',
    description: 'Indian classical vocals, western instruments, Kathak dance, and theatrical drama productions.',
    img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Eco & Environment Club',
    category: 'Social Impact',
    icon: 'eco',
    description: 'Solar power awareness, organic gardening, tree plantation drives, and rainwater harvesting.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Literary & Debating Society',
    category: 'Leadership & Oratory',
    icon: 'record_voice_over',
    description: 'MUN conferences, inter-school debates, creative writing journals, and public speaking workshops.',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
];

const sportsData = [
  {
    title: 'Swimming Complex',
    badge: 'Olympic-Standard',
    icon: 'pool',
    description: 'Half-Olympic 8-lane heated swimming pool with certified coaches and life guards.',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Basketball Arena',
    badge: 'FIBA Specification',
    icon: 'sports_basketball',
    description: 'Floodlit outdoor and indoor court with professional synthetic turf for year-round training.',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Football Field & Athletics Track',
    badge: '400m Turf Track',
    icon: 'sports_soccer',
    description: 'Lush natural grass football ground surrounded by a 400m synthetic running track.',
    img: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=800&q=80',
  },
];

const SchoolLife = () => {
  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      <section className="relative h-[480px] flex items-center justify-center overflow-hidden mb-16 z-1">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000666]/50 z-10 backdrop-blur-[2px]" />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
            alt="Krishna International School Student Life"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="relative z-20 text-center text-white px-6 max-w-3xl">
          <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
            VIBRANT CAMPUS CULTURE
          </span>
          <h1 className="reveal-drop delay-100 font-display-lg text-4xl sm:text-5xl lg:text-[60px] font-extrabold mb-4 tracking-tight leading-tight">
            Life Beyond the Classroom
          </h1>
          <p className="reveal-fade delay-200 font-body-lg text-base sm:text-lg opacity-90 leading-relaxed">
            Discover a rich tapestry of sports, arts, leadership opportunities, and lifelong friendships at Krishna International School.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="text-center mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
            CO-CURRICULAR CLUBS
          </span>
          <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
            Ignite Your Passion
          </h2>
          <p className="font-body-md text-base md:text-lg text-[#454652] max-w-2xl mx-auto">
            From robotics to debates, our student-led clubs provide platforms to experiment, lead, and shine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {clubsData.map((club, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border border-[#c6c5d4] group hover-lift transition-all duration-500 relative z-10 reveal-zoom delay-${
                idx * 100
              }`}
            >
              <div className="h-48 overflow-hidden relative z-10">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  src={club.img}
                  alt={club.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6 space-y-3">
                <span className="text-xs font-bold text-[#7e5700] uppercase tracking-wider">{club.category}</span>
                <h3 className="font-bold text-xl text-[#000666] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">{club.icon}</span>
                  {club.title}
                </h3>
                <p className="text-xs text-[#454652] leading-relaxed">{club.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f3f4f5]/50 py-20 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
              ATHLETIC FACILITIES
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
              World-Class Sports Infrastructure
            </h2>
            <p className="font-body-md text-base md:text-lg text-[#454652] max-w-2xl mx-auto">
              Physical fitness and sportsmanship are integral to life at Krishna International School.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sportsData.map((sport, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-3xl shadow-md border border-[#c6c5d4] space-y-4 hover-lift relative z-10 reveal-fade delay-${
                  idx * 100
                }`}
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md bg-white z-10">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                    src={sport.img}
                    alt={sport.title}
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="absolute top-3 right-3 bg-[#feb300] text-[#281900] text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                    {sport.badge}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-[#000666] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7e5700]">{sport.icon}</span>
                  {sport.title}
                </h3>
                <p className="text-sm text-[#454652] leading-relaxed">{sport.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 relative z-10 reveal-zoom">
        <div className="bg-[#000666] text-white rounded-3xl p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="relative z-10 text-center md:text-left space-y-2">
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Experience Krishna International Life
            </h2>
            <p className="font-body-lg text-white/80 text-base md:text-lg max-w-xl">
              Book a guided campus tour to visit our sports arenas, science labs, and meet our coaches.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              className="bg-[#feb300] text-[#281900] px-8 py-4 rounded-full font-bold shadow-md hover:bg-[#ffdeac] hover-lift transition-all text-base text-center"
            >
              Book a Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolLife;
