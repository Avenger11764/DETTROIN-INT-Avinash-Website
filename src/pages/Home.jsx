import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md selection:bg-[#e0e0ff] selection:text-[#000767]">
      {/* Hero Section */}
      <header className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Glows */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1a237e] rounded-full blur-3xl -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#feb300] rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-[1360px] mx-auto px-6 md:px-16 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="reveal">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#e0e0ff] text-[#000767] font-label-md text-sm mb-6 font-semibold shadow-sm">
                Excellence in Education Since 2010
              </span>
              <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[56px] text-[#000666] mb-6 leading-[1.12] font-extrabold tracking-tight">
                Shaping Future <span className="text-[#7e5700]">Leaders</span> with Care
              </h1>
              <p className="font-body-lg text-base md:text-lg text-[#454652] mb-10 max-w-xl leading-relaxed">
                A vibrant CBSE affiliated learning community in Aligarh dedicated to nurturing holistic growth, academic rigor, and compassionate leadership.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-[#feb300] text-[#281900] font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#ffdeac] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Admissions Open 2026-27</span>
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-[#000666] text-[#000666] font-bold px-8 py-4 rounded-full hover:bg-[#e0e0ff] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <span>Book a Campus Tour</span>
                  <span className="material-symbols-outlined text-xl">event</span>
                </Link>
              </div>
            </div>

            {/* Right Media Frame */}
            <div className="relative reveal delay-200">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10 border-[12px] border-white bg-white">
                <img
                  className="w-full aspect-[4/3] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ991SFlV523K95wX_glO883i4BdH4_mAr1xV-VAw15LEXR07yIAWoXfKdxTHBUeQ3SaTA6Ps3rgHBhnE0TCD527o0xFktReoQvpt8HBwroau3AxF7bmKJxjMFEZS9fEXE2g1QADmEeD4wfTmWii1DaJ1cVnRfCTwoS8K4SObBV2-eNZdFimCRYuLKlCt9IKkX2m1TFFbP7iq-zO24VHUh-RAdFoBgtC_WJl9fEuWL_Bu_xBLNmqrgmn3cymlANk-tOTMNO11nbUOf"
                  alt="Krishna International School Students"
                />
              </div>

              {/* Gold Star Shape */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#feb300] rounded-full z-0 flex items-center justify-center shadow-md">
                <span className="material-symbols-outlined text-white text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              </div>

              {/* Recommended Widget */}
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl z-20 hidden md:block border border-[#c6c5d4]">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#d9dadb]" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#e7e8e9]" />
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-[#e0e0ff]" />
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

      {/* Stats Bar */}
      <section className="bg-[#000666] py-14 relative overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="reveal">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">2010</p>
              <p className="text-white/80 font-label-md text-sm">Established</p>
            </div>
            <div className="reveal delay-100">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">2000+</p>
              <p className="text-white/80 font-label-md text-sm">Students Enrolled</p>
            </div>
            <div className="reveal delay-200">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">CBSE</p>
              <p className="text-white/80 font-label-md text-sm">Affiliated School</p>
            </div>
            <div className="reveal delay-300">
              <p className="text-4xl md:text-5xl font-extrabold text-[#e0e0ff] mb-1">100+</p>
              <p className="text-white/80 font-label-md text-sm">Expert Faculty</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg text-[#000666] mb-4 text-3xl md:text-4xl font-bold">
              Why Choose Krishna International?
            </h2>
            <div className="w-24 h-1 bg-[#7e5700] mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c6c5d4] hover-lift reveal">
              <div className="w-14 h-14 bg-[#e0e0ff] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#000666] text-3xl">auto_stories</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-[#000666] mb-4 text-xl font-bold">Academics</h3>
              <p className="text-[#454652] text-sm leading-relaxed">Global standard curriculum integrated with practical learning methodologies.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c6c5d4] hover-lift reveal delay-100">
              <div className="w-14 h-14 bg-[#ffdeac] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#7e5700] text-3xl">sports_soccer</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-[#000666] mb-4 text-xl font-bold">Sports</h3>
              <p className="text-[#454652] text-sm leading-relaxed">World-class sports infrastructure focusing on physical and mental resilience.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c6c5d4] hover-lift reveal delay-200">
              <div className="w-14 h-14 bg-[#e0e0ff] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#000666] text-3xl">shield</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-[#000666] mb-4 text-xl font-bold">Safety</h3>
              <p className="text-[#454652] text-sm leading-relaxed">24/7 CCTV surveillance and secure campus protocols for child safety.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#c6c5d4] hover-lift reveal delay-300">
              <div className="w-14 h-14 bg-[#ffdeac] rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[#7e5700] text-3xl">supervisor_account</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-[#000666] mb-4 text-xl font-bold">Faculty</h3>
              <p className="text-[#454652] text-sm leading-relaxed">Dedicated mentors with years of pedagogical expertise in diverse fields.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Stages */}
      <section className="py-20 bg-[#f3f4f5] rounded-3xl">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-[#000666] mb-4 text-3xl md:text-4xl font-bold">Our Academic Excellence</h2>
              <p className="text-[#454652] text-base">From early childhood exploration to senior secondary specialization, we offer a comprehensive journey.</p>
            </div>
            <Link to="/academics" className="hidden md:flex text-[#000666] font-bold items-center gap-2 group hover:text-[#7e5700] transition-colors">
              <span>View Full Curriculum</span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Pre-Primary */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#c6c5d4] hover-lift shadow-sm">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjyzshpCbgx46-eTCcXDacqwSYtMtMI7_SBKObYDdCiTkN-1Qnl0YtOS_IhpxDlryJ56uHOZP-hJHmaWH_STUrKxD6ZDcUJIMgZpOXVgBnh0J821q38JA7xnjZsv33CzD5sdCRp0cGFaRSm_TFT3Ndmot-GwYgUVlMZRK_gKvHOtAo8nxzAWvT_7Z5PIJ6H_3aX1vjCl3LzyDJ5G_eo-WxNTMPWo31CL8Lml7VoKvjFRPye9uc_AyiGfq9hv5JIzoNvHWkEbxy29dG" alt="Pre-Primary" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#000666] text-lg mb-2">Pre-Primary</h4>
                <p className="text-sm text-[#454652] mb-4">Nurturing curiosity through play-based learning and sensory exploration.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7e5700]">Ages 3-5</span>
              </div>
            </div>

            {/* Primary */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#c6c5d4] hover-lift shadow-sm">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVejo26ejAJJQ6_8M-lOgthq9VfWi4xfRarOvONYubqqOASitvaNq-9P3iEeRtv3RWHGTdoskd-dzFpJpu41dpijV3PaaqCGB2Hxg_-m5HGBKaoNF1AR22mpEWB1JFF73JslojddlVz07XdnosYrA07W3g51uEIoFeMv6SFTrYpZkDlsuSqso93Wp5dagAqdHoU5JCmYEXtyGsFMC1U0V4TMxgVja_rabLcQqxNcuN5L-aVT1XNHKJeT6zQX4xae7kfNkTJM46yP2s" alt="Primary" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#000666] text-lg mb-2">Primary</h4>
                <p className="text-sm text-[#454652] mb-4">Building strong foundations in literacy, numeracy, and critical thinking.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7e5700]">Grades I-V</span>
              </div>
            </div>

            {/* Middle */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#c6c5d4] hover-lift shadow-sm">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcEufHIrrjbhZKDAFH0aR0VgM1RN__xcEg-h3hZ-IlLJQCRQrG3q6-0QCWDpo3E61qP3B-P6VExe7hX6t_lfZAvdwpr89RX48CktYKtPG_a1vW5UgTE9owhdmWqiQJOx2qWlbwAgI2NwlQuz7bE8uxglgUmrDZR6xR4b5D12XHqD7EjKEkY_VgD7jlEZhnRBLSXm7EZZ6f8kvHCyMTdsTNdXbqDqNUKk4oqOWArlSt1vMCumOH7rggtm9Aaf1hg8ndL0XnyeEx2CGi" alt="Middle School" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#000666] text-lg mb-2">Middle School</h4>
                <p className="text-sm text-[#454652] mb-4">Developing analytical skills and exploring diverse subject interests.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7e5700]">Grades VI-VIII</span>
              </div>
            </div>

            {/* Senior */}
            <div className="bg-white rounded-2xl overflow-hidden border border-[#c6c5d4] hover-lift shadow-sm">
              <div className="h-48 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj8hD54Djzrs_lE1JrmwQzVO-VZv1oKBKY3IbV0A3dulLI01R-tOKxW3J97LWjtZ5LVu2S22Ysqp60E83pYe8ja-J6zpVjjmiJSIfMSb1S_cPQOisrGdmjo0e9t_yemvUnjYmVglHjZ8unH-dBF1ddRcI2hR3FM-gx7x1yD-xkQcavD6za1mt6YTCTB-Fg84h6tDSlrczjV1tvQ3W32oJI_084NnamA26US4t9OzP1BVkvIMdyAIUue2t_i7YVKW1kbu96xvNzCDEL" alt="Senior Secondary" />
              </div>
              <div className="p-6">
                <h4 className="font-bold text-[#000666] text-lg mb-2">Senior Secondary</h4>
                <p className="text-sm text-[#454652] mb-4">Career-oriented guidance with Commerce, Science, and Humanities streams.</p>
                <span className="text-xs font-bold uppercase tracking-wider text-[#7e5700]">Grades IX-XII</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Bento Grid */}
      <section className="py-20">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-lg text-headline-lg text-[#000666] mb-4 text-3xl md:text-4xl font-bold">World-Class Facilities</h2>
            <p className="text-[#454652] max-w-2xl mx-auto text-base">Providing a stimulating environment for every facet of a student's growth.</p>
          </div>
          <div className="bento-grid">
            {/* Sports Complex */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl reveal shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 to-transparent z-10"></div>
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2p0sas0YOCK5jcnMd1hwuM_smihsQIBa12VjYMYo_NHBKvFn-ErBUKvlwuz_7ywZI_vjCdAixLxluqpWGyrVE0vOhmLmVolwqL-zC_d3tyvBO29im9-PQ9GRsI3kGvW3b4oF3DlOPvCzdex-WxGqQoA_nvMuFfTH51u3j2HgmsY8PvtqdT35mKRm975hfX9M54NIwF1uakHdf8Zd44qZ0IdCZcttzlWGHGrkHdZmo9bM3CPnwNEtqmfHldYvQd-wkKvPfvjP3DZ9n" alt="Sports Complex" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-white font-headline-md text-headline-md mb-2 text-2xl font-bold">Sports Complex</h4>
                <p className="text-white/80 max-w-sm text-sm">Olympic-size swimming pool, professional cricket pitch, and basketball courts.</p>
              </div>
            </div>

            {/* Library */}
            <div className="md:col-span-2 relative group overflow-hidden rounded-2xl reveal shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 to-transparent z-10"></div>
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYFmUkEKvXcJrvMxnL1vmGyDdojkNwVO3Bq33z5O_gkT0lZAj_49fbolH6us-syiiRt3R4BV7TErASVmHOAr2mskeC9QaK87qbYaQeT67aOfNfvnFB2miv4dPxYsqklIBf4WbK5IuXfrGZMvYnheviHnX87tzXwQKKyzmIBsNqwBmWE60m5aO4oxfXaqQn0h6aSpmX6RT2L-eIIc7oZaDl3de4pZ57uwiRABW3b0T5p4LToeF2hh4fugMAkgvbBkUJ5JFrME8vZSnH" alt="Library" />
              <div className="absolute bottom-8 left-8 z-20">
                <h4 className="text-white font-bold text-xl mb-1">Central Library</h4>
                <p className="text-white/80 text-sm">Home to over 15,000 volumes and digital resources.</p>
              </div>
            </div>

            {/* Labs */}
            <div className="relative group overflow-hidden rounded-2xl reveal shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 to-transparent z-10"></div>
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO92uyXxDcFapIwBtx1mFLNzHtdiommFMNWI_VFc6wYXhzMD4fZZuICScU-ZjEGxFUIqk26K3D3TXObmzzPXRaicR-FPWPQI1I9UeC2vt1sGvRYOVn3JLrWS0KOLJ4q2__ktraPU0dYIyaQKBsmV57Uwibkpe-WKf5DVn-Ckr4TspwULD-Q8Yrpg_ExfVYVrGxN-6j1xkOvBp8Pn6up888kXxB8dO2qK2gEXwHwARkg7elDm5GTVjUnShQr87H3Mn9UK5VYzRfL0OM" alt="Innovation Labs" />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="text-white font-bold">Innovation Labs</h4>
              </div>
            </div>

            {/* Transport */}
            <div className="relative group overflow-hidden rounded-2xl reveal shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/80 to-transparent z-10"></div>
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCebA0x1poGi_UQminUC_3kQKUFAwb-vF4r-7fPhdBpXJ0_7_rWk9o0xN6PLrHzGMz5DqkL2avXz_rJxlESRFigaRReQ-XDsHOKtPtxEJaSIDf2aN4OSZOBCb0yL1rg71yrwqFiJlMQvDvUKnAkpVqnyG_s5TW-gMqv5iaDkWf8oLAG2_mzgFmqyUFzotHF0ChBHQ6fDbybBGW9TycFWBEA0j7XW63Grcv6xRixqwrrf9epw8ir3z27zoLUZdSmu10jIoHprbQ5KVxf" alt="Safe Transport" />
              <div className="absolute bottom-6 left-6 z-20">
                <h4 className="text-white font-bold">Safe Transport</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice of Parents (Matching Screenshot 2) */}
      <section className="py-20 bg-[#e0e2ee] overflow-hidden">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-14 reveal">
            <h2 className="font-headline-lg text-headline-lg text-[#000666] mb-3 text-3xl md:text-4xl font-extrabold">
              Voice of Parents
            </h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[#7e5700] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm reveal flex flex-col justify-between">
              <div>
                <div className="text-[#feb300] text-4xl font-bold font-serif mb-4 leading-none tracking-tight">99</div>
                <p className="font-body-lg text-[#191c1d] mb-8 italic text-base leading-relaxed">
                  "The individual attention my daughter receives at Krishna International is unparalleled. Her confidence has grown immensely in just two years."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#d9dadb] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#000666] text-base">Dr. Sunita Sharma</p>
                  <p className="text-xs text-[#454652]">Parent of Grade 7 Student</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm reveal delay-100 flex flex-col justify-between">
              <div>
                <div className="text-[#feb300] text-4xl font-bold font-serif mb-4 leading-none tracking-tight">99</div>
                <p className="font-body-lg text-[#191c1d] mb-8 italic text-base leading-relaxed">
                  "The school doesn't just focus on grades but on character building. The teachers are mentors who truly care about the kids' well-being."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#d9dadb] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#000666] text-base">Mr. Rajesh Khanna</p>
                  <p className="text-xs text-[#454652]">Business Owner</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm reveal delay-200 flex flex-col justify-between">
              <div>
                <div className="text-[#feb300] text-4xl font-bold font-serif mb-4 leading-none tracking-tight">99</div>
                <p className="font-body-lg text-[#191c1d] mb-8 italic text-base leading-relaxed">
                  "Exceptional sports facilities! My son has found his passion for swimming here, thanks to the world-class coaches and infrastructure."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-[#d9dadb] flex-shrink-0" />
                <div>
                  <p className="font-bold text-[#000666] text-base">Mrs. Meera Verma</p>
                  <p className="text-xs text-[#454652]">Professor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Banner (Matching Screenshot 1 & 2) */}
      <section className="max-w-[1360px] mx-auto px-6 md:px-16 my-16">
        <div className="bg-[#feb300] rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg reveal">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10 text-center md:text-left space-y-2">
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#281900] tracking-tight">
              Admissions Open 2026–27
            </h2>
            <p className="font-body-lg text-[#604100] text-base md:text-lg max-w-xl">
              Take the first step towards a bright future. Limited seats available for the upcoming academic session.
            </p>
          </div>
          <div className="relative z-10 flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/admissions"
              className="bg-[#000666] text-white px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 transition-all text-base text-center"
            >
              Apply Online Now
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#000666] px-8 py-4 rounded-full font-bold shadow-md hover:scale-105 transition-all text-base text-center"
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
