import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqsData = [
  {
    question: "What is the age criteria for Nursery admission?",
    answer: "Children should be at least 3 years old by 31st March of the year they are seeking admission to Nursery."
  },
  {
    question: "Does the school provide transport facilities?",
    answer: "Yes, we have a fleet of AC buses equipped with GPS tracking and female attendants covering all major routes in Aligarh."
  },
  {
    question: "What is the teacher-student ratio?",
    answer: "We maintain a personalized learning environment with a 1:15 ratio in primary years and 1:25 in senior classes."
  },
  {
    question: "Are scholarships available?",
    answer: "Yes, merit-based scholarships are available for Grade 9 onwards for exceptional academic and sports achievements."
  }
];

const Admissions = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md overflow-x-hidden pt-20">
      {/* 1. Hero Section (Matching Screenshot 1) */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAwEdjMKekhJJ8SGdgfFM1_9hajIK0o4vbgj1_OQn1460Jb3wn591PPZ4tLgrMctFQyTWJFzL-KyNkLGI-wK59IOkZzlNaQctsEnzgqrCqPsDbYnG0IQVPAkhjknZnNcwHchb-lu_pIZaIyshr4k7-5qmznfJvQnsGUfGvS6hcDWYLZC_g2EFnasZZV3twAEjMHhF0KI3ffAouWVa3ZxEYUv3uAAY9Tyzcn2QtKD_zyHxQyBAQ7TtcegzjRh2QS-hYUl3v0W6hp3NGX')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000666]/90 via-[#000666]/70 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1360px] mx-auto px-6 md:px-16 w-full py-20">
          <div className="max-w-2xl text-white space-y-6">
            <span className="inline-block px-5 py-2 bg-[#feb300] text-[#281900] rounded-full font-label-md text-xs font-bold uppercase tracking-wider shadow-sm">
              Admissions Open 2026-27
            </span>
            <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Join the Krishna International Family
            </h1>
            <p className="font-body-lg text-base md:text-lg text-white/90 leading-relaxed">
              Nurturing global leaders through excellence in academics, character building, and holistic development in a state-of-the-art environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#enquiry"
                className="bg-[#feb300] text-[#281900] px-8 py-4 rounded-full font-bold shadow-lg hover:bg-[#ffdeac] transition-all text-base inline-block"
              >
                Apply Online
              </a>
              <button
                onClick={() => alert('Downloading KIS 2026-27 Admission Prospectus...')}
                className="border-2 border-white/30 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-colors text-base"
              >
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process Stepper (Matching Screenshot 1 & 2) */}
      <section className="py-20 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">
              The Admission Journey
            </h2>
            <p className="text-[#454652] max-w-xl mx-auto text-base">
              A transparent and straightforward four-step process to secure your child's future with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#1a237e] text-[#8690ee] flex items-center justify-center mb-6 relative z-10 step-line group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-4xl">edit_note</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-2">Enquiry</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Submit an online enquiry or visit our admissions office.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#1a237e] text-[#8690ee] flex items-center justify-center mb-6 relative z-10 step-line group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-4xl">location_city</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-2">Campus Visit</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Experience our world-class facilities first-hand with a guided tour.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#1a237e] text-[#8690ee] flex items-center justify-center mb-6 relative z-10 step-line group-hover:scale-110 transition-transform duration-300 shadow-md">
                <span className="material-symbols-outlined text-4xl">assignment_turned_in</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-2">Assessment</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                A friendly interaction and basic evaluation of the child's skills.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-full bg-[#feb300] text-[#281900] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="material-symbols-outlined text-4xl">school</span>
              </div>
              <h3 className="font-headline-md text-xl font-bold text-[#000666] mb-2">Enrollment</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Complete the documentation and welcome your child to the family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Timeline Section (Matching Screenshot 2) */}
      <section className="py-20 bg-[#f3f4f5]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666]">
                Admissions Timeline 2026-27
              </h2>
              <p className="text-[#454652] text-base leading-relaxed">
                Stay updated with the key milestones for the upcoming academic session. We encourage early applications to secure placement.
              </p>

              <div className="space-y-4">
                {/* Event 1 */}
                <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-[#c6c5d4] hover:shadow-md transition-shadow items-center">
                  <div className="text-center min-w-[80px] border-r border-[#c6c5d4] pr-6">
                    <span className="block text-[#7e5700] font-extrabold text-xl">OCT</span>
                    <span className="block text-[#454652] font-bold text-base">15</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Registration Opens</h4>
                    <p className="text-sm text-[#454652]">Online and offline forms available for all grades.</p>
                  </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-[#c6c5d4] hover:shadow-md transition-shadow items-center">
                  <div className="text-center min-w-[80px] border-r border-[#c6c5d4] pr-6">
                    <span className="block text-[#7e5700] font-extrabold text-xl">JAN</span>
                    <span className="block text-[#454652] font-bold text-base">10</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">Priority Deadline</h4>
                    <p className="text-sm text-[#454652]">Last date for early-bird registration benefits.</p>
                  </div>
                </div>

                {/* Event 3 */}
                <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-sm border border-[#c6c5d4] hover:shadow-md transition-shadow items-center">
                  <div className="text-center min-w-[80px] border-r border-[#c6c5d4] pr-6">
                    <span className="block text-[#7e5700] font-extrabold text-xl">MAR</span>
                    <span className="block text-[#454652] font-bold text-base">01</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#000666] text-lg">New Session Begins</h4>
                    <p className="text-sm text-[#454652]">Orientation program for parents and students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="w-full md:w-1/2">
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#c6c5d4] aspect-square">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYu6AHTDsOc04q9jBEFAe361nPL739K7wvnetPjlYPjPMV6IUc_D9qhr8u30uqdAxevNCUzp_7L0KSg5bGaRS5t4dm3HjKftWaXBNL07wxTXp4gWkdDGF2ceaoruK7Pamn6XSmtPZQvoBlaNrLFBFTUGoL6r-TlAhlnubKNsx-oRj60_GrEOVYr1tFBBJg0JI7SxKKNXOt5RXcfd2NIzjwyQh_IIu7p4XiIMUITLWqexdyAIfwWtWEnvF0vD6Or9wAT9smPn8K3p7W"
                  alt="Students at Krishna International School"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Enquiry Form Section (Matching Screenshot 3) */}
      <section className="py-20" id="enquiry">
        <div className="max-w-[1040px] mx-auto px-6 md:px-16">
          <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row border border-[#c6c5d4]">
            {/* Left Info Column */}
            <div className="md:w-2/5 bg-[#000666] p-10 md:p-12 text-white space-y-8 flex flex-col justify-between">
              <div>
                <h2 className="font-headline-lg text-3xl font-extrabold mb-4 leading-tight">
                  Let's Start a Conversation
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  Fill out the form and our admissions counselor will get in touch with you within 24 hours.
                </p>
              </div>

              <div className="space-y-5 text-sm">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#ffdeac] text-xl">call</span>
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#ffdeac] text-xl">mail</span>
                  <span>admissions@krishna.edu.in</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#ffdeac] text-xl">location_on</span>
                  <span>Aligarh-Palwal Road, Aligarh, UP</span>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div className="md:w-3/5 p-8 md:p-12 bg-white">
              {formSubmitted ? (
                <div className="p-8 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                  <h3 className="font-bold text-xl">Enquiry Submitted!</h3>
                  <p className="text-sm">Thank you for reaching out. Our counselor will call you shortly.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleFormSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#454652] mb-2 uppercase tracking-wider">
                        Parent Name
                      </label>
                      <input
                        className="w-full px-5 py-3.5 bg-[#f3f4f5] border-none rounded-xl focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                        placeholder="John Doe"
                        required
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#454652] mb-2 uppercase tracking-wider">
                        Email Address
                      </label>
                      <input
                        className="w-full px-5 py-3.5 bg-[#f3f4f5] border-none rounded-xl focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                        placeholder="john@example.com"
                        required
                        type="email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#454652] mb-2 uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        className="w-full px-5 py-3.5 bg-[#f3f4f5] border-none rounded-xl focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                        placeholder="+91 00000 00000"
                        required
                        type="tel"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#454652] mb-2 uppercase tracking-wider">
                        Applying for Grade
                      </label>
                      <select className="w-full px-5 py-3.5 bg-[#f3f4f5] border-none rounded-xl focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all appearance-none cursor-pointer">
                        <option>Nursery - KG</option>
                        <option>Grade 1 - 5</option>
                        <option>Grade 6 - 8</option>
                        <option>Grade 9 - 12</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#454652] mb-2 uppercase tracking-wider">
                      Your Message
                    </label>
                    <textarea
                      className="w-full px-5 py-3.5 bg-[#f3f4f5] border-none rounded-xl focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                      placeholder="Tell us about your child or ask a question..."
                      required
                      rows={4}
                    />
                  </div>

                  <button
                    className="w-full bg-[#feb300] text-[#281900] py-4 rounded-full font-bold text-base shadow-lg active:scale-[0.98] transition-all hover:bg-[#ffdeac]"
                    type="submit"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section (Matching Screenshot 4) */}
      <section className="py-20 bg-white">
        <div className="max-w-[860px] mx-auto px-6 md:px-16">
          <div className="text-center mb-12">
            <h2 className="font-headline-lg text-3xl md:text-4xl font-extrabold text-[#000666] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#454652] text-base">Find quick answers to common admission queries.</p>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#c6c5d4] rounded-2xl overflow-hidden transition-all duration-300 bg-white"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-[#f3f4f5] transition-colors focus:outline-none"
                  >
                    <span className="font-bold text-[#000666] text-base md:text-lg">{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-2xl transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#feb300]' : 'text-[#454652]'
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <div className="p-6 pt-0 text-[#454652] text-base leading-relaxed border-t border-[#c6c5d4]/40 bg-[#f8f9fa]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
