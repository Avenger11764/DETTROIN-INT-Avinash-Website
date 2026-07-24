import React, { useState } from 'react';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      {/* 1. Hero Header Section */}
      <section className="relative overflow-hidden py-16 px-6 md:px-16 max-w-[1360px] mx-auto text-center z-1">
        <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
          WE ARE HERE TO HELP
        </span>
        <h1 className="reveal-drop delay-100 font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] font-extrabold mb-6 tracking-tight">
          Contact Krishna International
        </h1>
        <p className="reveal-fade delay-200 font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto leading-relaxed">
          Have questions about our CBSE curriculum, admissions process, or campus facilities? Reach out to our dedicated administration team today.
        </p>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-12 max-w-[1360px] mx-auto px-6 md:px-16 relative z-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Interactive Form (Slide Left Animation) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-[#c6c5d4] space-y-6 relative z-10 reveal-left">
            <h3 className="font-headline-lg text-2xl sm:text-3xl font-extrabold text-[#000666]">
              Send Us a Message
            </h3>
            {formSubmitted ? (
              <div className="p-8 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-3 animate-fade-in">
                <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                <h4 className="font-bold text-xl">Thank You for Reaching Out!</h4>
                <p className="text-sm">We have received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Your Full Name</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="e.g. Rahul Sharma"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Phone Number</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="+91 98765 43210"
                      required
                      type="tel"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Email Address</label>
                    <input
                      className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm"
                      placeholder="rahul@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Inquiry Topic</label>
                    <select className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm text-[#191c1d]">
                      <option>General Inquiry</option>
                      <option>Admissions 2026-27</option>
                      <option>School Fee Structure</option>
                      <option>Transport Facilities</option>
                      <option>Career Opportunities</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Your Message</label>
                  <textarea
                    className="w-full bg-[#f3f4f5] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm h-36 resize-none"
                    placeholder="Please write your inquiry details here..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#feb300] text-[#281900] font-bold py-4 rounded-xl shadow-lg hover:bg-[#ffdeac] hover-lift transition-all text-base flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span className="material-symbols-outlined text-xl">send</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Quick Contact Cards & Info (Slide Right Animation) */}
          <div className="lg:col-span-5 space-y-6 relative z-10 reveal-right">
            <div className="bg-white p-8 rounded-[2.5rem] shadow-md border border-[#c6c5d4] flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">location_on</span>
              </div>
              <div>
                <h4 className="font-bold text-[#000666] text-xl mb-1">Campus Address</h4>
                <p className="text-sm text-[#454652] leading-relaxed">
                  Krishna Nagar, Opp. Reliance Petrol Pump, 5th Km, Delhi G.T. Road, Aligarh, Uttar Pradesh 202001
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-md border border-[#c6c5d4] flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 bg-[#ffdeac] text-[#7e5700] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">call</span>
              </div>
              <div>
                <h4 className="font-bold text-[#000666] text-xl mb-1">Phone & Whatsapp</h4>
                <p className="text-sm text-[#454652] leading-relaxed">+91 98765 43210 / +91 91234 56789</p>
                <p className="text-xs text-[#7e5700] font-semibold mt-1">Mon – Sat: 8:00 AM – 4:00 PM</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] shadow-md border border-[#c6c5d4] flex items-start gap-5 hover-lift">
              <div className="w-14 h-14 bg-[#e0e0ff] text-[#000666] rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">mail</span>
              </div>
              <div>
                <h4 className="font-bold text-[#000666] text-xl mb-1">Email Helpline</h4>
                <p className="text-sm text-[#454652] leading-relaxed">info@kisaligarh.com</p>
                <p className="text-sm text-[#454652] leading-relaxed">admissions@kisaligarh.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google Maps Embedded Section */}
      <section className="py-16 max-w-[1360px] mx-auto px-6 md:px-16 relative z-1 reveal-zoom">
        <div className="bg-white p-6 rounded-[2.5rem] shadow-xl border border-[#c6c5d4] overflow-hidden space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 pt-2">
            <div>
              <h3 className="font-headline-lg text-2xl font-bold text-[#000666]">Find Us on Google Maps</h3>
              <p className="text-xs text-[#454652]">Krishna Nagar, Opp. Reliance Petrol Pump, 5th Km, Delhi G.T. Road, Aligarh</p>
            </div>
            <a
              href="https://maps.google.com/?q=27.92509384688022,78.03272676934976"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 sm:mt-0 bg-[#feb300] text-[#281900] text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[#ffdeac] transition-all flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>

          {/* Embedded Google Maps iFrame */}
          <div className="w-full h-96 rounded-2xl overflow-hidden shadow-inner border border-[#c6c5d4]/50 relative z-10">
            <iframe
              title="Krishna International School Aligarh Location Map"
              src="https://maps.google.com/maps?q=27.92509384688022,78.03272676934976&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. Department Directory Cards */}
      <section className="py-16 bg-[#edeeef]/40 relative z-1">
        <div className="max-w-[1360px] mx-auto px-6 md:px-16">
          <div className="text-center mb-12 reveal-drop">
            <h2 className="font-headline-lg text-3xl font-extrabold text-[#000666]">Department Directory</h2>
            <p className="text-sm text-[#454652] mt-1">Direct contacts for specific administrative departments</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-3 reveal-left hover-lift relative z-10">
              <h4 className="font-bold text-[#000666] text-xl">Principal's Office</h4>
              <p className="text-xs text-[#454652]">For academic inquiries & appointments</p>
              <p className="text-sm font-bold text-[#7e5700] pt-2">principal@kisaligarh.com</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-3 reveal-fade delay-100 hover-lift relative z-10">
              <h4 className="font-bold text-[#000666] text-xl">Accounts & Fee Desk</h4>
              <p className="text-xs text-[#454652]">For fee payment & receipt queries</p>
              <p className="text-sm font-bold text-[#7e5700] pt-2">accounts@kisaligarh.com</p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-[#c6c5d4] space-y-3 reveal-right delay-200 hover-lift relative z-10">
              <h4 className="font-bold text-[#000666] text-xl">Transport Office</h4>
              <p className="text-xs text-[#454652]">For bus routes, timing & stops</p>
              <p className="text-sm font-bold text-[#7e5700] pt-2">transport@kisaligarh.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
