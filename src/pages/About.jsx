import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md overflow-x-hidden pt-20">
      {/* 1. Hero Section (Matching Screenshot 4) */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-[#1a237e] text-white">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC7YcV-DXBEiLLc_Icdw-hVloxWZFVge5jIgi6Tse9JG0T_4eYwUuj82W93bnILacJFuNQUs8Gaap6ky3Lifqzo-PF2Z_zDgEHijep3UIxdA2o0WCnWdgL7_XuKHkKBnOJpnOFd_51q3OcKjmvABFYReXwMSZBUaZrJtl5hAPKBpylMdSqM96XQ57u1ZZL_2QihY5JzEDSHTJZQnc-frE6faqQJfCofggCY-2qa1P4RG16nzoRqLbrr2DGOFF8uOtg-yF5KhCnoUF_S')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000666] via-[#000666]/90 to-transparent" />
        </div>

        <div className="relative z-20 max-w-[1360px] mx-auto px-6 md:px-16 w-full py-20">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-5 py-2 rounded-full bg-[#feb300] text-[#281900] font-label-md text-xs font-bold uppercase tracking-wider shadow-sm">
              ESTABLISHED SINCE 2005
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-white">
              Our Legacy, Your Child’s Future
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/90 max-w-lg leading-relaxed">
              Nurturing minds and building character in the heart of Aligarh. Join us in our journey of educational excellence.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/school-life"
                className="bg-[#feb300] text-[#281900] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#ffdeac] transition-all text-base"
              >
                Explore Our Campus
              </Link>
              <Link
                to="/academics"
                className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all text-base"
              >
                View Academic Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. History Section (Matching Screenshot 3 & 4) */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Box */}
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3] border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcOocSxmMBMezaBOHyKKiesAb43vBcBH00MrnjBKS86eVrp59EyDpuaoMGNBs27IuhCDkFunZKRK2T-X52NigY5crF8mPKvs2H1zhab7vws5b9dIxXl2iB1b1HqI0ObWx7HJgFC85TbWTEFqE49nBLWbqlAyFuTd0rFlSdZL8-6zC2LbdIJ8HLJzRvzOm7zWfLQk3w7ffMFB2v6pmy_-vcMEMu-d8mzyVs_CT7FdBgLxgvDLtaelCh3atQjAbVzwNULfja7CgDfauF"
                  alt="Krishna International History"
                />
              </div>
              <div className="absolute -bottom-8 right-6 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-[#c6c5d4] max-w-[240px]">
                <p className="text-[#000666] font-display-lg text-4xl font-extrabold mb-1">18+</p>
                <p className="text-[#454652] font-label-md text-xs font-semibold leading-snug">
                  Years of Community Impact in Aligarh
                </p>
              </div>
            </div>

            {/* Copy */}
            <div className="space-y-6">
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666] tracking-tight">
                A Journey of Growth and Impact
              </h2>
              <div className="space-y-6 text-[#454652] font-body-md text-base leading-relaxed">
                <p>
                  Founded on the principles of holistic development, Krishna International School began as a visionary endeavor to provide world-class education in Aligarh. Our roots are deeply embedded in the local community, serving generations of families with unwavering dedication.
                </p>
                <p>
                  What started with a handful of students and a dream has now blossomed into a premier educational institution. Our growth narrative is not just about physical infrastructure, but about the thousands of success stories that have walked through our gates.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div className="p-5 bg-[#f3f4f5] rounded-2xl border border-[#c6c5d4]/50">
                    <h4 className="text-[#000666] font-bold text-3xl mb-1">5000+</h4>
                    <p className="text-xs font-semibold text-[#191c1d]">Alumni Globally</p>
                  </div>
                  <div className="p-5 bg-[#f3f4f5] rounded-2xl border border-[#c6c5d4]/50">
                    <h4 className="text-[#000666] font-bold text-3xl mb-1">150+</h4>
                    <p className="text-xs font-semibold text-[#191c1d]">Dedicated Educators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Section (Matching Screenshot 3) */}
      <section className="py-16 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-10 rounded-[2rem] bg-[#000666] text-white flex flex-col items-start shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-[#e0e0ff]">visibility</span>
              </div>
              <h3 className="font-headline-lg text-3xl font-extrabold mb-4 text-white">Our Vision</h3>
              <p className="font-body-lg text-base md:text-lg text-white/80 leading-relaxed">
                To be a globally recognized center of learning where students are empowered to lead with wisdom, compassion, and a commitment to excellence in an ever-evolving world.
              </p>
            </div>

            {/* Mission */}
            <div className="p-10 rounded-[2rem] bg-white border border-[#c6c5d4] flex flex-col items-start shadow-sm transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-14 h-14 bg-[#e0e0ff] rounded-full flex items-center justify-center mb-8">
                <span className="material-symbols-outlined text-3xl text-[#000666]">rocket_launch</span>
              </div>
              <h3 className="font-headline-lg text-3xl font-extrabold text-[#000666] mb-4">Our Mission</h3>
              <p className="font-body-lg text-base md:text-lg text-[#454652] leading-relaxed">
                We strive to provide a rigorous academic environment that fosters critical thinking, cultural awareness, and ethical leadership through innovative teaching and inclusive community engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section (Matching Screenshot 2) */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="bg-[#f3f4f5] rounded-[2.5rem] overflow-hidden shadow-sm p-8 md:p-14 border border-[#c6c5d4] flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/3 aspect-square md:aspect-auto md:h-full rounded-2xl overflow-hidden shadow-md">
              <img
                className="w-full h-full object-cover min-h-[320px]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYUKI494d3sP8_hf1yhBsWxX1zaA7C4CntKxmF-2cFUZR6Q23JstIucQ14AB9CHb14lgkyo-l9z34NghX_gYHQ5dgpX0-uTfVuIo-AXn2HEj2QfLhd6sW46ozzWpOfA4UGX2jGasUk1B3ecq6LvMFcAUruMVdON6q1ZvRQHM_TZFGOtECeR2KJ_4glJEYyKcJT_wC7fwWKJBLp8KrjmBAJb6j3hU62P8dkzuVY-Xx8pzkWxg6z74t0p559nohDRKLc-ABuIC_dRPzw"
                alt="Dr. S. K. Sharma Principal"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6">
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666]">
                Message from the Principal
              </h2>
              <blockquote className="font-body-lg text-base md:text-lg text-[#454652] leading-relaxed italic">
                "Education is the most powerful weapon which you can use to change the world. At Krishna International, we don't just teach subjects; we nurture the fire of curiosity and the anchor of integrity. Our goal is to ensure every child who walks through our doors is prepared for the challenges of tomorrow while being rooted in the values of today."
              </blockquote>
              <div className="flex flex-wrap items-center gap-6 pt-2">
                <div>
                  <h4 className="font-bold text-xl text-[#000666]">Dr. S. K. Sharma</h4>
                  <p className="text-[#454652] font-label-md text-xs uppercase tracking-wider font-semibold">
                    PRINCIPAL & ACADEMIC DIRECTOR
                  </p>
                </div>
                <div className="h-10 w-px bg-[#c6c5d4] hidden sm:block" />
                <div className="text-3xl font-serif text-[#000666]/70 italic font-bold">S.K. Sharma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values Section (Matching Screenshot 2) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">Our Core Values</h2>
            <p className="text-[#454652] font-body-lg text-base md:text-lg">
              The pillars that define our culture and guide our decisions every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrity */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center border border-[#c6c5d4] hover:shadow-lg transition-all hover-lift flex flex-col items-center">
              <div className="w-16 h-16 bg-[#e0e0ff] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-[#000666]">verified_user</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666] mb-4">Integrity</h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Doing the right thing, even when no one is watching. We foster honesty and transparency in all interactions.
              </p>
            </div>

            {/* Excellence */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center border border-[#c6c5d4] hover:shadow-lg transition-all hover-lift flex flex-col items-center">
              <div className="w-16 h-16 bg-[#ffdeac] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-[#7e5700]">military_tech</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#7e5700] mb-4">Excellence</h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                A relentless pursuit of quality in academics, sports, and arts. We encourage students to surpass their own limits.
              </p>
            </div>

            {/* Community */}
            <div className="bg-white p-10 rounded-[2rem] shadow-sm text-center border border-[#c6c5d4] hover:shadow-lg transition-all hover-lift flex flex-col items-center">
              <div className="w-16 h-16 bg-[#e0e0ff] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-3xl text-[#000666]">groups</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666] mb-4">Community</h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Strength in unity. We believe in collaborative growth between students, teachers, and parents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Student Life Section (Matching Screenshot 1) */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">Life at Krishna International</h2>
            <p className="text-[#454652] font-body-lg text-base md:text-lg">
              Nurturing talents and building character through a vibrant campus experience that extends far beyond the classroom.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-[#c6c5d4]">
              <div className="w-14 h-14 bg-[#e0e0ff] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-[#000666]">palette</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-4 leading-tight">
                Extracurricular Excellence
              </h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Unleashing creativity through specialized programs in fine arts, contemporary music, and classical dance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-[#c6c5d4]">
              <div className="w-14 h-14 bg-[#ffdeac] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-[#7e5700]">shield</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#7e5700] mb-4 leading-tight">
                House System
              </h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Fostering a spirit of healthy competition and collaboration through our diverse and vibrant school houses.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-[#c6c5d4]">
              <div className="w-14 h-14 bg-[#e0e0ff] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-[#000666]">grade</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-4 leading-tight">
                Student Leadership
              </h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Empowering the next generation through the Student Council and peer-to-peer mentorship opportunities.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center border border-[#c6c5d4]">
              <div className="w-14 h-14 bg-[#ffdeac] rounded-full flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl text-[#7e5700]">rocket</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#191c1d] mb-4 leading-tight">
                Clubs & Societies
              </h3>
              <p className="text-[#454652] font-body-md text-sm leading-relaxed">
                Exploring passions in diverse interest groups ranging from cutting-edge Robotics to sustainable Eco-Clubs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA Section (Matching Screenshot 1) */}
      <section className="max-w-[1360px] mx-auto px-6 md:px-16 my-16">
        <div className="rounded-[2.5rem] bg-[#181b23] text-white p-12 md:p-20 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <h2 className="font-headline-lg text-3xl md:text-5xl font-extrabold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="font-body-lg text-base md:text-lg mb-10 max-w-xl mx-auto text-white/80 leading-relaxed">
              Applications for the upcoming academic session are now open. Secure your child's seat in a future of excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/admissions"
                className="bg-[#ffdeac] text-[#281900] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all text-base inline-block"
              >
                Apply Online
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-base inline-block"
              >
                Download Prospectus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
