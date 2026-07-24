import React, { useState } from 'react';

const Contact = () => {
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md overflow-x-hidden pt-20">
      {/* Hero Section */}
      <section className="relative h-[360px] flex items-center justify-center overflow-hidden mb-16 bg-[#000666] text-white">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyAP9t5RkFs1y2bux6SvqESjJWLJDWxfhaQSMyA7Gzt4pPNpPgxffmM9ldaQTIQPRpf2NXGNNYMhy8bvka1WqXwTq5hwOduSw09rgYte60FrTLz9xi4JB0lLLXDoUyR95gRF71cPrQQU5SF-8YhPIVVtog6GwyCrXkXEtYJyi5AD3WxbKlnGpImTFhWX_xnSiLDvybTlGFyPONzCQ1UJw5j6BgnnH96mWgBcCVYA1CCX8bFHvc0rn0JMgPfZarFufxV6tTVBqa6PL"
            alt="Contact Krishna International School"
          />
        </div>
        <div className="relative z-20 text-center px-6">
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="font-body-lg text-base sm:text-lg max-w-xl mx-auto text-white/90">
            We are here to answer your queries about admissions, academics, and campus life at Krishna International School.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 md:px-16 max-w-[1360px] mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#c6c5d4]">
            {contactSubmitted ? (
              <div className="p-8 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-3">
                <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                <h3 className="font-bold text-xl">Message Sent!</h3>
                <p className="text-sm">
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleContactSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Full Name</label>
                    <input
                      className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                      placeholder="John Doe"
                      required
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Email Address</label>
                    <input
                      className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                      placeholder="john@example.com"
                      required
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all cursor-pointer">
                    <option>Admission Enquiry</option>
                    <option>General Information</option>
                    <option>Careers</option>
                    <option>Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-bold text-xs text-[#454652] uppercase tracking-wider">Your Message</label>
                  <textarea
                    className="w-full bg-[#F3F4F6] border-none rounded-xl p-4 focus:ring-2 focus:ring-[#000666] outline-none text-sm transition-all"
                    placeholder="How can we help you today?"
                    required
                    rows={5}
                  />
                </div>

                <button
                  className="w-full bg-[#feb300] text-[#281900] py-4 rounded-full font-bold text-base hover:bg-[#ffdeac] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg"
                  type="submit"
                >
                  <span className="material-symbols-outlined">send</span> Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Details & Marked Google Map Box with Exact Coordinates 27.92509384688022, 78.03272676934976 */}
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Address */}
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#e0e0ff] rounded-full flex items-center justify-center text-[#000666]">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <h3 className="font-bold text-xl text-[#000666]">Address</h3>
                <p className="text-[#454652] text-sm leading-relaxed">
                  Krishna Nagar, Opp. Reliance Petrol Pump,<br />
                  5th Km, Delhi G.T. Road, Aligarh,<br />
                  Uttar Pradesh 202001, India
                </p>
              </div>

              {/* Call Us */}
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#e0e0ff] rounded-full flex items-center justify-center text-[#000666]">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <h3 className="font-bold text-xl text-[#000666]">Call Us</h3>
                <p className="text-[#454652] text-sm leading-relaxed">
                  +91 12345 67890<br />
                  +91 98765 43210
                </p>
              </div>

              {/* Email */}
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#e0e0ff] rounded-full flex items-center justify-center text-[#000666]">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <h3 className="font-bold text-xl text-[#000666]">Email</h3>
                <p className="text-[#454652] text-sm leading-relaxed">
                  info@kisaligarh.com<br />
                  admissions@kisaligarh.com
                </p>
              </div>

              {/* Hours */}
              <div className="space-y-3">
                <div className="w-12 h-12 bg-[#e0e0ff] rounded-full flex items-center justify-center text-[#000666]">
                  <span className="material-symbols-outlined">schedule</span>
                </div>
                <h3 className="font-bold text-xl text-[#000666]">School Hours</h3>
                <p className="text-[#454652] text-sm leading-relaxed">
                  Mon - Sat: 8:00 AM - 2:30 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Official Google Map Embed Box with Exact GPS Pin */}
            <div className="relative w-full h-[340px] rounded-[2.5rem] overflow-hidden shadow-xl border-4 border-white">
              <iframe
                title="Krishna International School Aligarh Location Pin"
                src="https://maps.google.com/maps?q=27.92509384688022,78.03272676934976+(Krishna+International+School+Aligarh)&t=&z=16&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href="https://www.google.com/maps?q=27.92509384688022,78.03272676934976"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 right-4 bg-[#000666] text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5 hover:bg-[#1a237e] transition-all z-20"
              >
                <span className="material-symbols-outlined text-sm">open_in_new</span>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
