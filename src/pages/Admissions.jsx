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
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      {/* 1. Hero Section (Drop & Slide Animations) */}
      <section className="relative min-h-[580px] flex items-center overflow-hidden z-1">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16 w-full py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Copy */}
            <div className="space-y-6 z-10">
              <span className="reveal-drop inline-block px-5 py-2 rounded-full bg-[#feb300] text-[#281900] font-label-md text-xs font-bold uppercase tracking-wider shadow-sm">
                ADMISSIONS OPEN 2026-27
              </span>
              <h1 className="reveal-left delay-100 font-display-lg text-4xl sm:text-5xl lg:text-[60px] text-[#000666] font-extrabold leading-[1.12] tracking-tight">
                Begin Your Child's Journey of Excellence
              </h1>
              <p className="reveal-left delay-200 font-body-lg text-base md:text-lg text-[#454652] max-w-lg leading-relaxed">
                Join a community dedicated to holistic education, modern facilities, and character building in Aligarh.
              </p>
              <div className="reveal-fade delay-300 flex flex-wrap gap-4 pt-2">
                <a
                  href="#inquiry-form"
                  className="bg-[#000666] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#1a237e] hover-lift transition-all text-base"
                >
                  Apply Online Now
                </a>
                <a
                  href="#process"
                  className="border-2 border-[#000666] text-[#000666] font-bold px-8 py-4 rounded-full hover:bg-[#e0e0ff] hover-lift transition-all text-base"
                >
                  Admission Process
                </a>
              </div>
            </div>

            {/* Right Card / Form Preview (Slide Right Animation) */}
            <div className="relative z-10 reveal-right delay-200" id="inquiry-form">
              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-[#c6c5d4] space-y-6">
                <h3 className="font-headline-lg text-2xl font-bold text-[#000666]">
                  Admission Inquiry Form
                </h3>
                {formSubmitted ? (
                  <div className="p-6 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-2">
                    <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                    <p className="font-bold text-lg">Inquiry Submitted!</p>
                    <p className="text-sm">Our admissions team will contact you shortly.</p>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleFormSubmit}>
                    <div>
                      <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Parent's Full Name</label>
                      <input
                        className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 mt-1 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                        placeholder="e.g. Rajesh Kumar"
                        required
                        type="text"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Phone Number</label>
                        <input
                          className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 mt-1 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                          placeholder="+91 98765 43210"
                          required
                          type="tel"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Grade Seeking</label>
                        <select className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 mt-1 focus:ring-2 focus:ring-[#000666] outline-none text-sm text-[#191c1d]">
                          <option>Nursery / KG</option>
                          <option>Primary (Grade I-V)</option>
                          <option>Middle (Grade VI-VIII)</option>
                          <option>Senior (Grade IX-XII)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Email Address</label>
                      <input
                        className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 mt-1 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                        placeholder="parent@example.com"
                        required
                        type="email"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#feb300] text-[#281900] font-bold py-4 rounded-xl shadow-md hover:bg-[#ffdeac] hover-lift transition-all text-base mt-2"
                    >
                      Submit Application
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Admission Process (Staggered Zoom & Fade Animations) */}
      <section className="py-20 bg-[#edeeef]/40 relative z-1" id="process">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
              SIMPLE & TRANSPARENT
            </span>
            <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666] mt-2">
              4-Step Admission Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-zoom hover-lift">
              <div className="w-12 h-12 bg-[#000666] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Submit Inquiry</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Fill out the online application or visit our campus admissions cell.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-zoom delay-100 hover-lift">
              <div className="w-12 h-12 bg-[#000666] text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Campus Interaction</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Schedule an informal interaction and guided tour of our facilities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-zoom delay-200 hover-lift">
              <div className="w-12 h-12 bg-[#000666] text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Document Verification</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Submit birth certificate, past academic records, and ID proofs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-4 relative z-10 reveal-zoom delay-300 hover-lift">
              <div className="w-12 h-12 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center font-bold text-xl">
                4
              </div>
              <h3 className="font-bold text-[#000666] text-xl">Enrollment</h3>
              <p className="text-sm text-[#454652] leading-relaxed">
                Complete fee payment and secure seat for Session 2026-27.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (Fade & Drop Animations) */}
      <section className="py-20 max-w-[1360px] mx-auto px-6 md:px-16 relative z-1">
        <div className="text-center mb-16 reveal-drop">
          <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
            GOT QUESTIONS?
          </span>
          <h2 className="font-headline-lg text-3xl sm:text-4xl font-extrabold text-[#000666] mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 relative z-10">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-[#c6c5d4] overflow-hidden shadow-sm transition-all relative z-10 reveal-fade delay-${
                index * 100
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full p-6 text-left font-bold text-[#000666] text-lg flex justify-between items-center gap-4"
              >
                <span>{faq.question}</span>
                <span className="material-symbols-outlined text-2xl text-[#7e5700]">
                  {activeFaq === index ? 'remove' : 'add'}
                </span>
              </button>
              {activeFaq === index && (
                <div className="px-6 pb-6 text-[#454652] text-sm leading-relaxed border-t border-[#c6c5d4]/40 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Admissions;
