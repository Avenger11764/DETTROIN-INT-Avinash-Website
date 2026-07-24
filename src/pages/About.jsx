import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      {/* 1. Hero Section */}
      <section className="relative min-h-[520px] flex items-center overflow-hidden bg-[#1a237e]/90 text-white z-10 shadow-lg">
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
            <span className="reveal-drop inline-block px-5 py-2 rounded-full bg-[#feb300] text-[#281900] font-label-md text-xs font-bold uppercase tracking-wider shadow-sm">
              ESTABLISHED SINCE 2010
            </span>
            <h1 className="reveal-left delay-100 font-display-lg text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.12] tracking-tight text-white">
              Our Legacy, Your Child’s Future
            </h1>
            <p className="reveal-left delay-200 font-body-lg text-base md:text-lg text-white/90 max-w-lg leading-relaxed">
              Nurturing minds and building character in the heart of Aligarh. Join us in our journey of educational excellence.
            </p>
            <div className="reveal-fade delay-300 flex flex-wrap gap-4 pt-2">
              <Link
                to="/gallery"
                className="bg-[#feb300] text-[#281900] font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#ffdeac] hover-lift transition-all text-base"
              >
                Explore Our Campus
              </Link>
              <Link
                to="/academics"
                className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 hover-lift transition-all text-base"
              >
                View Academic Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. History Section */}
      <section className="py-20 bg-[#f8f9fa]/50 relative z-1">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Box */}
            <div className="relative z-10 reveal-left">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/3] border border-[#c6c5d4] bg-white">
                <img
                  className="w-full h-full object-cover relative z-10"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcOocSxmMBMezaBOHyKKiesAb43vBcBH00MrnjBKS86eVrp59EyDpuaoMGNBs27IuhCDkFunZKRK2T-X52NigY5crF8mPKvs2H1zhab7vws5b9dIxXl2iB1b1HqI0ObWx7HJgFC85TbWTEFqE49nBLWbqlAyFuTd0rFlSdZL8-6zC2LbdIJ8HLJzRvzOm7zWfLQk3w7ffMFB2v6pmy_-vcMEMu-d8mzyVs_CT7FdBgLxgvDLtaelCh3atQjAbVzwNULfja7CgDfauF"
                  alt="Krishna International History"
                />
              </div>
              <div className="reveal-zoom delay-200 absolute -bottom-6 -right-6 bg-[#feb300] text-[#281900] p-6 rounded-3xl shadow-lg font-bold text-center z-20">
                <p className="text-3xl font-extrabold">15+</p>
                <p className="text-xs uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>

            {/* History Content */}
            <div className="space-y-6 reveal-right">
              <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
                OUR STORY
              </span>
              <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666]">
                Rooted in Values, Growing Towards the Future
              </h2>
              <p className="font-body-md text-base text-[#454652] leading-relaxed">
                Krishna International School was founded with a visionary commitment: to offer a transformative educational experience that combines modern technological learning with traditional Indian values.
              </p>
              <p className="font-body-md text-base text-[#454652] leading-relaxed">
                From a modest beginning in 2010, KIS has grown into a premier 25-acre CBSE institution in Aligarh, nurturing thousands of confident, compassionate, and academically brilliant young minds.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="border-l-4 border-[#7e5700] pl-4 reveal-zoom delay-100">
                  <p className="font-bold text-[#000666] text-lg">2500+</p>
                  <p className="text-xs text-[#454652]">Happy Students</p>
                </div>
                <div className="border-l-4 border-[#feb300] pl-4 reveal-zoom delay-200">
                  <p className="font-bold text-[#000666] text-lg">150+</p>
                  <p className="text-xs text-[#454652]">Expert Educators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="py-20 bg-[#edeeef]/40 relative z-1">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
              OUR GUIDING LIGHT
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666] mt-2">
              Vision & Mission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-left hover-lift">
              <div className="w-14 h-14 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666]">Our Vision</h3>
              <p className="font-body-md text-[#454652] leading-relaxed text-sm">
                To be a globally recognized center of educational excellence that empowers students to reach their full intellectual, emotional, and social potential.
              </p>
            </div>

            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-right delay-100 hover-lift">
              <div className="w-14 h-14 bg-[#ffdeac] text-[#7e5700] rounded-2xl flex items-center justify-center">
                <span className="material-symbols-outlined text-3xl">flag</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666]">Our Mission</h3>
              <p className="font-body-md text-[#454652] leading-relaxed text-sm">
                To provide a safe, inclusive, and stimulating environment with state-of-the-art infrastructure, inspiring teachers, and dynamic curriculum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-20 max-w-[1360px] mx-auto px-6 md:px-16 relative z-1">
        <div className="text-center mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
            LEADERSHIP & GUIDANCE
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666] mt-2">
            Words from Our Mentors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Chairman */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-md border border-[#c6c5d4] flex flex-col justify-between relative z-10 reveal-left hover-lift">
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#1a237e] shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
                  alt="Chairman"
                />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666]">Mr. Praveen Sharma</h3>
              <p className="text-xs text-[#7e5700] font-bold uppercase tracking-wider">Chairman's Message</p>
              <p className="font-body-md text-sm text-[#454652] italic leading-relaxed">
                "Education is not merely the accumulation of knowledge; it is the awakening of wisdom and character. At Krishna International, we strive to ignite that inner spark in every child."
              </p>
            </div>
          </div>

          {/* Principal */}
          <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-md border border-[#c6c5d4] flex flex-col justify-between relative z-10 reveal-right delay-100 hover-lift">
            <div className="space-y-4">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#1a237e] shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
                  alt="Principal"
                />
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-[#000666]">Dr. Ritu Agarwal</h3>
              <p className="text-xs text-[#7e5700] font-bold uppercase tracking-wider">Principal's Message</p>
              <p className="font-body-md text-sm text-[#454652] italic leading-relaxed">
                "Our commitment is to foster academic excellence while ensuring every student develops critical thinking, empathy, and resilience needed for tomorrow's world."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
