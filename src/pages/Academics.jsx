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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoJChyGFL5JksHmkbneOW3HJu0Jwji3fdP1m1kGbUJyCFZvr4UuIMRl_BZTxxRR4_M8QhPGRvfXjXgdfB1WxnjDA4gKiLBjKDUtG-pF0xNEB1kZgicxQ9g_zLe1i0bG-xcA7YXoLcP4bj28ziwukNc1SqaCbyEKHs3Y5bTWZP9XM6aCPv4AeG653v0Bi-HkzziZI5U-orLl3B7mS75QCc4pKvaxsZEgtIU90bJsDOXBCFcVp--iuRBtXAF6Tt_4C-cXp2blr4yUk1_',
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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVejo26ejAJJQ6_8M-lOgthq9VfWi4xfRarOvONYubqqOASitvaNq-9P3iEeRtv3RWHGTdoskd-dzFpJpu41dpijV3PaaqCGB2Hxg_-m5HGBKaoNF1AR22mpEWB1JFF73JslojddlVz07XdnosYrA07W3g51uEIoFeMv6SFTrYpZkDlsuSqso93Wp5dagAqdHoU5JCmYEXtyGsFMC1U0V4TMxgVja_rabLcQqxNcuN5L-aVT1XNHKJeT6zQX4xae7kfNkTJM46yP2s',
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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcEufHIrrjbhZKDAFH0aR0VgM1RN__xcEg-h3hZ-IlLJQCRQrG3q6-0QCWDpo3E61qP3B-P6VExe7hX6t_lfZAvdwpr89RX48CktYKtPG_a1vW5UgTE9owhdmWqiQJOx2qWlbwAgI2NwlQuz7bE8uxglgUmrDZR6xR4b5D12XHqD7EjKEkY_VgD7jlEZhnRBLSXm7EZZ6f8kvHCyMTdsTNdXbqDqNUKk4oqOWArlSt1vMCumOH7rggtm9Aaf1hg8ndL0XnyeEx2CGi',
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
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBj8hD54Djzrs_lE1JrmwQzVO-VZv1oKBKY3IbV0A3dulLI01R-tOKxW3J97LWjtZ5LVu2S22Ysqp60E83pYe8ja-J6zpVjjmiJSIfMSb1S_cPQOisrGdmjo0e9t_yemvUnjYmVglHjZ8unH-dBF1ddRcI2hR3FM-gx7x1yD-xkQcavD6za1mt6YTCTB-Fg84h6tDSlrczjV1tvQ3W32oJI_084NnamA26US4t9OzP1BVkvIMdyAIUue2t_i7YVKW1kbu96xvNzCDEL',
  },
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('pre-primary');

  const currentContent = curriculumTabsData[activeTab];

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md overflow-x-hidden pt-20">
      {/* 1. Hero Section (Matching Screenshot 1) */}
      <section className="relative overflow-hidden py-20 px-6 md:px-16 max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="z-10 space-y-6">
            <span className="bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block shadow-sm">
              Excellence in Education
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] mb-6 leading-tight font-extrabold tracking-tight">
              A Foundation for Lifelong Learning
            </h1>
            <p className="font-body-lg text-base md:text-lg text-[#454652] mb-8 max-w-xl leading-relaxed">
              At Krishna International School, we nurture curiosity and empower students with a robust academic framework that blends traditional values with modern pedagogy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#curriculum"
                className="bg-[#000666] text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 hover:bg-[#1a237e] transition-all text-base"
              >
                <span>Explore Curriculum</span>
                <span className="material-symbols-outlined text-xl">arrow_downward</span>
              </a>
              <button
                onClick={() => alert('Krishna International School 2026-27 Academic Calendar will open...')}
                className="border-2 border-[#000666] text-[#000666] px-8 py-4 rounded-full font-bold hover:bg-[#e0e0ff] transition-colors text-base"
              >
                Academic Calendar
              </button>
            </div>
          </div>

          {/* Right Photo Frame */}
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl aspect-video md:aspect-square border border-[#c6c5d4]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSgtMLx0wIxCrfdNcNrpMF0u8LFEUwxy82KtSPqyDUCCmcUZTHgvAhz_HQRfMtrV3-55ptm347xrqhWyQNSzmMiiBES3NsC0lCCNbMFOliEqD38Ii0IbE64FEPC6pcOBWhcY8jF8BJ38C3tLX7YhdoeWL9mSqW9BZGJASR_h4wi4txFWKcNdyk_VOmIWfn5YMyrghCxfxOXhf1rx2Yo3fjcdZ4DtxouYrvDDqaeZ4yaX02TFoHKBFSy7Ycash0jOHeVvjDZazlQPT"
                alt="Krishna International Classroom"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#feb300] rounded-3xl -z-10 shadow-md"></div>
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-[#1a237e]/10 rounded-full -z-10 blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* 2. Academic Excellence Stats Bar (Matching Screenshot 1) */}
      <section className="bg-[#000666] py-16 text-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-[#e0e0ff] mb-2">100%</div>
            <div className="font-label-md text-xs font-semibold text-white/70 uppercase tracking-widest">
              Board Pass Rate
            </div>
          </div>
          <div>
            <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-[#e0e0ff] mb-2">15:1</div>
            <div className="font-label-md text-xs font-semibold text-white/70 uppercase tracking-widest">
              Student-Teacher Ratio
            </div>
          </div>
          <div>
            <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-[#e0e0ff] mb-2">40+</div>
            <div className="font-label-md text-xs font-semibold text-white/70 uppercase tracking-widest">
              Elective Subjects
            </div>
          </div>
          <div>
            <div className="font-display-lg text-4xl sm:text-5xl font-extrabold text-[#e0e0ff] mb-2">95%</div>
            <div className="font-label-md text-xs font-semibold text-white/70 uppercase tracking-widest">
              Distinctions in CBSE
            </div>
          </div>
        </div>
      </section>

      {/* 3. Curriculum Tabs (Matching Screenshot 2) */}
      <section className="py-20 px-6 md:px-16 max-w-[1360px] mx-auto" id="curriculum">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">
            Our Curriculum Pathway
          </h2>
          <p className="font-body-md text-base text-[#454652] max-w-2xl mx-auto">
            A structured approach to learning that evolves with the child's developmental needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Tab Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-4 w-full">
            {/* Tab 1: Pre-Primary */}
            <button
              onClick={() => setActiveTab('pre-primary')}
              className={`text-left p-6 rounded-2xl transition-all ${
                activeTab === 'pre-primary'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Pre-Primary</div>
              <div className="font-label-md text-sm text-[#454652]">Montessori Based (Nursery - UKG)</div>
            </button>

            {/* Tab 2: Primary */}
            <button
              onClick={() => setActiveTab('primary')}
              className={`text-left p-6 rounded-2xl transition-all ${
                activeTab === 'primary'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Primary</div>
              <div className="font-label-md text-sm text-[#454652]">Skills & Discovery (Grade I - V)</div>
            </button>

            {/* Tab 3: Middle */}
            <button
              onClick={() => setActiveTab('middle')}
              className={`text-left p-6 rounded-2xl transition-all ${
                activeTab === 'middle'
                  ? 'bg-[#edeeef] border-l-4 border-[#7e5700] shadow-sm'
                  : 'bg-white hover:bg-[#f3f4f5] border border-[#c6c5d4]/40'
              }`}
            >
              <div className="font-headline-md text-xl font-bold text-[#000666] mb-1">Middle</div>
              <div className="font-label-md text-sm text-[#454652]">Critical Thinking (Grade VI - VIII)</div>
            </button>

            {/* Tab 4: Senior Secondary */}
            <button
              onClick={() => setActiveTab('senior')}
              className={`text-left p-6 rounded-2xl transition-all ${
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
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-[#c6c5d4] space-y-6">
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

              <div className="mt-8 rounded-2xl overflow-hidden h-64 border border-[#c6c5d4]">
                <img className="w-full h-full object-cover" src={currentContent.img} alt={currentContent.title} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pedagogy & Holistic Growth (Matching Screenshot 3) */}
      <section className="bg-[#edeeef] py-20">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Left Info */}
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666]">
                Pedagogy & Holistic Growth
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-2 bg-[#ffdeac] rounded-full text-[#7e5700]">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      stars
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Board Excellence</h4>
                    <p className="text-[#454652] text-sm leading-relaxed">
                      Consistent top ranks in CBSE district results, with 90% of students securing above 80% aggregate.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-2 bg-[#e0e0ff] rounded-full text-[#000666]">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      groups
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Mentorship Program</h4>
                    <p className="text-[#454652] text-sm leading-relaxed">
                      Personalized academic counseling for every senior secondary student to navigate career choices.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="mt-1 p-2 bg-[#ffdeac] rounded-full text-[#7e5700]">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      rocket_launch
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Innovation Labs</h4>
                    <p className="text-[#454652] text-sm leading-relaxed">
                      State-of-the-art STEM and Robotics labs to foster hands-on learning and technological fluency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Grid Images */}
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="rounded-2xl overflow-hidden h-48 mt-6 shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY8TqkjnX8X-UXosEaoSIfMMnximCwLZ-xEILE8D47Ua9qeV4EFN5Affgh3h30JdYN3FjxO07Iv2dy8ebcZNfU9p86Z-Y8meu3Ij3BtLbW0oR0xfpI9ilH33sY6SSSNjr2u0_MVeyHswzs-kHjCQxTkMbf3g_qxtHhZFbZMVoKHW7AQbkGe1uZez-L0kmhiHsXusabhV-KTtE5v9yi6MdrLfrpCFeiXaPNlkqhCId5eZqOSVXeWMRcPiuSPqYBzW0EaMo4_KVBpR9B"
                  alt="Science Lab Student"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKXkLaD5sB8Yc-HyfNg3LWrSDeN5qXOoBE-JTg5tUSUL-5FoNjpK_g-vMEprjWXclXxjMnzpO2ciu_IKnglq-bE9ot-yegybgBSUJOp3Qkyiq_FV-FNeO6wMmTWaQgNDlm1fcib4QbzPrdO4td5JomCGGbOg0ckGvWe9-x7GmMd0zSPPRl7Zy9FSZ-s92rTzVIssTKsVuNJ5vSvLgjAeT8XJCMeMZGzsJB2XjfJ55dYe9BAq9qOuUyeveTxwhxLm3sNrCycTfwCs6v"
                  alt="Student Awards"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 -mt-6 shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxyp3eJPM4ok1MRVO0XJGFq01Vbi5R3QBQiOJlaGWRnm5s3C0hSi-xA1zpUoaR9DLbg2wOEXpYZBYlZcvgIJSSGEmPIDreJHyEvidjLvt1JmsM74a2h1T_Yid6A2zVkJHj71ImiZfXFoydDiRj30-b6-2vO4D7ntxeTsF7aLSu6elepBu8Buq5BUSEUPU-epzFd8WjN6z9lTVX-uFD8RGqCynpAqAbwRpEPPAo_a3rmcBQMx7nmLCHQ-jZqDmwvHpU5sZVnjL496Hp"
                  alt="Digital Classroom"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-48 shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfErq9hyIresTR7N0h_S0sPya3dpcap2UG40yqLa8hR6WXCZvzA0VNUOGDe6uFm5kTE11qD8461bbMmRN-iPgbogc8XaXZaMTej4vPAF4eRekcsBki8ELFT5tgWm_QNf7K38LkciHIP4Ol2loyRIdLTkABi4F3oUk4PaqhsgX06OXPn9rdFchjIxIhoplZaTE8y8Ot4ZMUaNkDYIDsgZomY6vuZlyQHdGFEvqcrjFiUe0_c2iFALhQ9G_yaAYkiXUVVwYOfIBA_Pk5"
                  alt="Library Reading Area"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Teaching Faculty (Matching Screenshot 3) */}
      <section className="py-20 px-6 md:px-16 max-w-[1360px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">
            Meet Our Specialized Educators
          </h2>
          <p className="font-body-md text-base text-[#454652] max-w-2xl mx-auto">
            Our faculty comprises passionate experts dedicated to mentoring the next generation of leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Faculty Card 1 */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#c6c5d4] text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz__4aM-IL-TmPPUSkkri2pBb0ZdCzBDPOBFssDS4608jo4R0nd2a2TET3if2Yr5ZFBwG7RojhamPhMPns-yalAbDPqDFguE8KsgjLSl-Jg2wTWPDb6gM6n_r_N4LsgLtNPo7Ov10Ezeoo7augrQ_MGnbXIo0_QxKF62D8cgevHd7qeys9mUtTOIzUxnuiQCsi1BLxgLuhICGWUugB5HWVamkBth9w4OKT26olVXuECpWSns1MGZDksa7KibY5gZkajCxQB1u0SiQh"
                alt="Dr. Anita Sharma"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Dr. Anita Sharma</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Head of Sciences</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              PhD in Physics with 15+ years of experience in CBSE curriculum planning.
            </p>
          </div>

          {/* Faculty Card 2 */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#c6c5d4] text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpq03mX96kj3gzdmjQG92ySEEToWo3ijuPAPTktuv43i6QloAhbsgOqJAHA22olvVYVeUxRwoIOOGqR4GioDDj0jA5QMdx3U_wpsvyoSwVB1vlTozuAmBpUYWlmuLANMGpzOHY9-NCBLFLqWjGLydS0loGkEKx-BLYGEbg6BGavEGX2qp3aNdUQIePz7KxWUrGJ4LJf2eU3SkkB_jCiukxynSujUq4XJae4WrpBXohRKfIGk1A481c5_yI1M1rb6KIBsGNfKCx8Cmu"
                alt="Mr. Rajesh Iyer"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Mr. Rajesh Iyer</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Math Lead</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              Specialist in Competitive Exam Coaching (JEE/NEET) and advanced calculus.
            </p>
          </div>

          {/* Faculty Card 3 */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#c6c5d4] text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ7YiPaxeyWKIcPlrtDnHCJjEMGaG33LzBeovE6QJ2eLyEeah-GHY3Ok6nqu_83uLVuyAd7iJqItEcATRZtUY5WR-8nB33GGqXiK3J2JjOgzUCRwG8nmvwNM9wc-HvwG1K2vg4adk4k1dV35FxnUMEMldsCgBGF3feGYWtLSxH8wbxAF2MhZNJZ7i1GtYn1-OxBElpz5ozgu_pJp4VvwMyklOpTxP0QYuafLT4eiMrIS-Sbg9Ad27_KrnBlL6BGdEdeVyB4C6THhQX"
                alt="Ms. Sarah Khan"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Ms. Sarah Khan</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Head of Humanities</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              Expert in Creative Writing and Global Perspectives with an M.A. from DU.
            </p>
          </div>

          {/* Faculty Card 4 */}
          <div className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-lg transition-shadow border border-[#c6c5d4] text-center">
            <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#1a237e]">
              <img
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCt5C2_ecX8K199rt0E1fV0qaZi3iVTQLWfb4vNz99i5yu1Fo3nhXPBmG4hlDr4AAcWxcNC3P_5CnuEPFsjhvky9UnvC_uJ5mSGo4XmHv_Etdy7yjsy3S7MF137ZvBCDCwIEppCpgXh_aYwOnS2tZRtSbpTeds6o7U0NGz2XelG0RK6nG-iArb5OWOlTaH_k-wvl-sEECzfprzzWLKSL0ZAfppgAfKpDLmweXquYSGFDnUQsAQl68YPa3xL2b4YcuG0ULILTJd9r0mI"
                alt="Mr. David Samuel"
              />
            </div>
            <h4 className="font-headline-md text-xl font-bold text-[#000666]">Mr. David Samuel</h4>
            <p className="font-label-md text-sm text-[#7e5700] font-bold mb-3">Pre-Primary Lead</p>
            <p className="text-xs text-[#454652] leading-relaxed">
              Certified Montessori Expert with a focus on early childhood emotional growth.
            </p>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (Matching Screenshot 4) */}
      <section className="max-w-[1360px] mx-auto px-6 md:px-16 my-16">
        <div className="bg-[#000666] rounded-[2.5rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-64 h-64 border-8 border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 border-8 border-white rounded-full translate-x-1/2 translate-y-1/2" />
          </div>
          <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold mb-6 relative z-10">
            Start Your Child's Journey Today
          </h2>
          <p className="font-body-lg text-base md:text-lg mb-8 max-w-2xl mx-auto text-white/90 relative z-10 leading-relaxed">
            Admissions for the 2026-27 academic session are now open. Visit us for a campus tour.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <button
              onClick={() => alert('Downloading KIS 2026-27 Academic Brochure...')}
              className="bg-[#feb300] text-[#281900] px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform text-base shadow-lg"
            >
              Download Brochure
            </button>
            <Link
              to="/contact"
              className="bg-white text-[#000666] px-10 py-4 rounded-full font-bold hover:bg-white/90 transition-all text-base shadow-lg"
            >
              Book a Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
