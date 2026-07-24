import { useState } from 'react';

const ResourceModal = ({ type, onClose }) => {
  const [portalMode, setPortalMode] = useState('student');
  const [studentId, setStudentId] = useState('');
  const [password, setPassword] = useState('');
  const [portalLoggedIn, setPortalLoggedIn] = useState(false);
  const [activeFeeTab, setActiveFeeTab] = useState('primary');

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#c6c5d4] w-full max-w-2xl max-h-[90vh] overflow-y-auto relative p-6 sm:p-8 animate-zoom">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#f3f4f5] text-[#000666] hover:bg-[#feb300] hover:text-[#281900] transition-colors flex items-center justify-center font-bold text-lg"
          aria-label="Close modal"
        >
          ✕
        </button>

        {type === 'portal' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="bg-[#e0e0ff] text-[#000666] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                ONLINE LEARNING & ERP
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000666]">
                Student & Parent Portal
              </h3>
              <p className="text-xs sm:text-sm text-[#454652]">
                Access attendance records, exam report cards, homework assignments, and fee receipts.
              </p>
            </div>

            {portalLoggedIn ? (
              <div className="bg-[#f8f9fa] rounded-2xl p-6 border border-[#c6c5d4] space-y-4 text-center">
                <div className="w-16 h-16 bg-[#e0e0ff] text-[#000666] rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                  🎓
                </div>
                <h4 className="font-bold text-lg text-[#000666]">Welcome back, Aarav Sharma!</h4>
                <p className="text-xs text-[#7e5700] font-semibold">Grade 8-A | Roll No: 20260814</p>
                <div className="grid grid-cols-2 gap-3 text-left pt-2">
                  <div className="bg-white p-3 rounded-xl border border-[#c6c5d4]/40">
                    <p className="text-[11px] text-[#454652]">Overall Attendance</p>
                    <p className="font-bold text-base text-[#000666]">96.5%</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-[#c6c5d4]/40">
                    <p className="text-[11px] text-[#454652]">Term 1 Result</p>
                    <p className="font-bold text-base text-[#7e5700]">Grade A1 (94.2%)</p>
                  </div>
                </div>
                <button
                  onClick={() => setPortalLoggedIn(false)}
                  className="bg-[#000666] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#1a237e] transition-all"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPortalLoggedIn(true);
                }}
                className="space-y-4"
              >
                <div className="flex bg-[#f3f4f5] p-1 rounded-xl gap-1">
                  <button
                    type="button"
                    onClick={() => setPortalMode('student')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      portalMode === 'student' ? 'bg-[#000666] text-white shadow-sm' : 'text-[#454652]'
                    }`}
                  >
                    Student Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setPortalMode('parent')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                      portalMode === 'parent' ? 'bg-[#000666] text-white shadow-sm' : 'text-[#454652]'
                    }`}
                  >
                    Parent / Guardian Login
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#454652] uppercase">
                    {portalMode === 'student' ? 'Student Enrollment ID' : 'Registered Mobile / Parent ID'}
                  </label>
                  <input
                    type="text"
                    required
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)}
                    placeholder={portalMode === 'student' ? 'e.g. KIS-2026-814' : '+91 98765 43210'}
                    className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-[#000666]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#454652] uppercase">Password / DOB (DDMMYYYY)</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#f3f4f5] border-none rounded-xl p-3.5 text-sm outline-none focus:ring-2 focus:ring-[#000666]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#feb300] text-[#281900] font-bold py-3.5 rounded-xl shadow-md hover:bg-[#ffdeac] transition-all text-sm"
                >
                  Sign In to ERP Portal
                </button>

                <p className="text-center text-[11px] text-[#454652]">
                  Demo Credentials: Enter any Admission ID & Password to preview portal dashboard.
                </p>
              </form>
            )}
          </div>
        )}

        {type === 'fee' && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <span className="bg-[#ffdeac] text-[#7e5700] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                ACADEMIC YEAR 2026–27
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000666]">
                Annual Fee Structure & Schedule
              </h3>
              <p className="text-xs sm:text-sm text-[#454652]">
                Transparent fee breakdown with quarterly installment options and zero hidden charges.
              </p>
            </div>

            <div className="flex justify-center gap-2 bg-[#f3f4f5] p-1 rounded-xl">
              <button
                onClick={() => setActiveFeeTab('primary')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeFeeTab === 'primary' ? 'bg-[#000666] text-white shadow-sm' : 'text-[#454652]'
                }`}
              >
                Primary (Nursery–5)
              </button>
              <button
                onClick={() => setActiveFeeTab('middle')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeFeeTab === 'middle' ? 'bg-[#000666] text-white shadow-sm' : 'text-[#454652]'
                }`}
              >
                Middle (Grades 6–8)
              </button>
              <button
                onClick={() => setActiveFeeTab('senior')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeFeeTab === 'senior' ? 'bg-[#000666] text-white shadow-sm' : 'text-[#454652]'
                }`}
              >
                Senior Sec (9–12)
              </button>
            </div>

            <div className="bg-[#f8f9fa] rounded-2xl p-5 border border-[#c6c5d4] space-y-3">
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c5d4]/40">
                <span className="font-bold text-[#454652]">Admission Fee (One-Time)</span>
                <span className="font-bold text-[#000666]">₹ 10,000</span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c5d4]/40">
                <span className="font-bold text-[#454652]">Quarterly Tuition Fee</span>
                <span className="font-bold text-[#000666]">
                  {activeFeeTab === 'primary' ? '₹ 12,500 / Quarter' : activeFeeTab === 'middle' ? '₹ 14,800 / Quarter' : '₹ 18,200 / Quarter'}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs pb-2 border-b border-[#c6c5d4]/40">
                <span className="font-bold text-[#454652]">Annual Activity & Lab Fund</span>
                <span className="font-bold text-[#000666]">₹ 4,500 / Year</span>
              </div>
              <div className="flex justify-between items-center text-xs pt-1">
                <span className="font-bold text-[#7e5700]">Optional AC Bus Transport</span>
                <span className="font-bold text-[#7e5700]">₹ 2,200 / Month</span>
              </div>
            </div>

            <div className="bg-[#e0e0ff]/40 p-4 rounded-xl text-xs text-[#000767] space-y-1">
              <p className="font-bold">Quarterly Payment Due Dates:</p>
              <p>Q1: 10th April | Q2: 10th July | Q3: 10th October | Q4: 10th January</p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <span className="bg-[#e0e0ff] text-[#000666] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                COMPLIANCE & PROTECTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000666]">
                Privacy Policy
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#454652] leading-relaxed max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>1. Data Collection:</strong> Krishna International School collects personal information such as student names, guardian contacts, academic history, and medical records solely for educational and safety purposes.
              </p>
              <p>
                <strong>2. Student Safety & Photo Release:</strong> Campus CCTV footage and photographs taken during school events are strictly protected and used exclusively for internal security and official academic publications.
              </p>
              <p>
                <strong>3. Third-Party Sharing:</strong> We do not sell, rent, or trade personal data to third parties. Data is shared only with CBSE board examination registries and regulatory educational bodies as mandated by law.
              </p>
              <p>
                <strong>4. Parental Consent:</strong> Parents may review or request updates to their child&apos;s stored information at any time by contacting the school administration office.
              </p>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-5">
            <div className="text-center space-y-2">
              <span className="bg-[#ffdeac] text-[#7e5700] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                CODE OF CONDUCT
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#000666]">
                Terms of Service & Rules
              </h3>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#454652] leading-relaxed max-h-80 overflow-y-auto pr-2">
              <p>
                <strong>1. Minimum Attendance Rule:</strong> Students must maintain a minimum of 75% attendance in each academic term to be eligible for CBSE board and internal annual examinations.
              </p>
              <p>
                <strong>2. Campus Conduct & Ethics:</strong> Respect for teachers, peers, and school property is mandatory. Any form of bullying, vandalism, or unauthorized absence will invite strict disciplinary action.
              </p>
              <p>
                <strong>3. Punctuality & Uniform:</strong> All students must arrive in clean, complete school uniform by 7:55 AM. Late arrivals beyond 8:10 AM will require written guardian authorization.
              </p>
              <p>
                <strong>4. Electronic Devices:</strong> Personal smartphones and unapproved electronic gadgets are prohibited on campus premises unless explicitly requested for academic workshops.
              </p>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-[#c6c5d4]/40 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#000666] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#1a237e] transition-all"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourceModal;
