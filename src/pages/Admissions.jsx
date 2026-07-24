import { useState } from 'react';

const Admissions = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    studentName: '',
    grade: 'Grade 1',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({
      parentName: '',
      phone: '',
      email: '',
      studentName: '',
      grade: 'Grade 1',
      message: '',
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-1">
        <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
          SESSION 2026 – 2027
        </span>
        <h1 className="reveal-drop delay-100 font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] font-extrabold mb-6 tracking-tight">
          Admissions & Registration
        </h1>
        <p className="reveal-fade delay-200 font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto leading-relaxed">
          Welcome to the Krishna International School admission process. Join our thriving educational community in Aligarh.
        </p>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-3 reveal-left hover-lift relative z-10">
            <span className="w-10 h-10 bg-[#e0e0ff] text-[#000666] rounded-full flex items-center justify-center font-bold text-lg">1</span>
            <h4 className="font-bold text-[#000666] text-lg">Inquiry & Tour</h4>
            <p className="text-xs text-[#454652]">Submit online form or visit campus to explore facilities and curriculum.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-3 reveal-left delay-100 hover-lift relative z-10">
            <span className="w-10 h-10 bg-[#ffdeac] text-[#7e5700] rounded-full flex items-center justify-center font-bold text-lg">2</span>
            <h4 className="font-bold text-[#000666] text-lg">Registration</h4>
            <p className="text-xs text-[#454652]">Obtain prospectus and fill out official registration document.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-3 reveal-left delay-200 hover-lift relative z-10">
            <span className="w-10 h-10 bg-[#e0e0ff] text-[#000666] rounded-full flex items-center justify-center font-bold text-lg">3</span>
            <h4 className="font-bold text-[#000666] text-lg">Interaction</h4>
            <p className="text-xs text-[#454652]">Informal interaction for primary; baseline assessment for senior grades.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-3 reveal-left delay-300 hover-lift relative z-10">
            <span className="w-10 h-10 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center font-bold text-lg">4</span>
            <h4 className="font-bold text-[#000666] text-lg">Fee Payment</h4>
            <p className="text-xs text-[#454652]">Complete verification and deposit admission fee to secure seat.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#c6c5d4] space-y-6 relative z-10 reveal-left">
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-[#000666]">
              Online Admission Inquiry Form
            </h3>
            {formSubmitted ? (
              <div className="p-8 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-3 animate-fade-in">
                <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                <h4 className="font-bold text-xl">Inquiry Submitted Successfully!</h4>
                <p className="text-sm">Our admissions counselor will contact you within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Parent/Guardian Name</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      required
                      minLength={3}
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Mobile Number</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      pattern="[0-9+\s-]{10,}"
                      title="Please enter a valid phone number with at least 10 digits"
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Email Address</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Student Full Name</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="e.g. Aarav Kumar"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      required
                      minLength={3}
                      type="text"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Grade Applying For</label>
                  <select
                    className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm text-[#191c1d]"
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                  >
                    <option>Nursery / LKG / UKG</option>
                    <option>Grade 1 - 5</option>
                    <option>Grade 6 - 8</option>
                    <option>Grade 9 - 10</option>
                    <option>Grade 11 - 12 (Science)</option>
                    <option>Grade 11 - 12 (Commerce)</option>
                    <option>Grade 11 - 12 (Humanities)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Additional Remarks / Questions</label>
                  <textarea
                    className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm h-32 resize-none"
                    placeholder="Tell us about your child or any specific questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#feb300] text-[#281900] font-bold py-4 rounded-xl shadow-lg hover:bg-[#ffdeac] hover-lift transition-all text-base flex items-center justify-center gap-2"
                >
                  <span>Submit Admission Inquiry</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-5 space-y-6 relative z-10 reveal-right">
            <div className="bg-[#000666] text-white p-8 rounded-3xl shadow-xl space-y-4">
              <h4 className="font-bold text-2xl text-white">Required Documents</h4>
              <ul className="space-y-3 text-sm text-white/90">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">check</span>
                  Birth Certificate copy
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">check</span>
                  Transfer Certificate (TC) from previous school
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">check</span>
                  Previous Year Marksheet / Report Card
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">check</span>
                  Passport-size photographs (4 Student, 2 Parents)
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#feb300]">check</span>
                  Aadhar Card copy of Student & Parents
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-md border border-[#c6c5d4] space-y-3">
              <h4 className="font-bold text-[#000666] text-xl">Admission Office Hours</h4>
              <p className="text-sm text-[#454652]">Monday – Saturday: 8:30 AM – 3:30 PM</p>
              <p className="text-xs text-[#7e5700] font-semibold">Helpdesk: +91 98765 43210 / admissions@kisaligarh.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
