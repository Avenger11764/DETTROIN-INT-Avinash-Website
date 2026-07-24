import React, { useState } from 'react';

const galleryCategories = [
  { id: 'all', label: 'All Events' },
  { id: 'sports', label: 'Sports Day' },
  { id: 'classroom', label: 'Classroom' },
  { id: 'annual', label: 'Annual Fest' },
  { id: 'life', label: 'Student Life' },
  { id: 'science', label: 'Science Fair' },
];

const galleryItems = [
  {
    id: 1,
    category: 'classroom',
    title: 'Robotics Club',
    icon: 'precision_manufacturing',
    aspect: 'aspect-[4/5]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_1Q_xUhnpd7V3cdFFbBnK7BDYkDNnt9_p1gyfv-ojAh2KXn5OBsMv-nrTwJwL4aWY5Ep04rLR9Tr3kuzfQkFg6KzEe7pV3WtsP84hPPy5PaDiPKPKACDQwQW0fBAWZEI5GOI7Zr2JjgpzFswSiRuoaLSL74-bC1engvqiyWH7J3KnO8UjXtM800UiuOBPv-I-x2nb-aSkONPq0Lf0vf1Fh7LjjNydhlxskkx2nqBTMdcFqd_f9WRL2e2gqli1kpUwiyXQJxVFSSpS',
  },
  {
    id: 2,
    category: 'classroom',
    title: 'Innovation Lab',
    icon: 'school',
    aspect: 'aspect-square',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8xbDpwcynSh-L_DJfSAkJ562EeE-5PXdf1hyUaAyZ9zqB2fOMa_AwZwoqm-ItpzihDjAvP57ZtC4A4YKOJjzcEFY-j4_umVg2wBkzBTkuofbLKig-uSJTgbNPlnUuUbgtFvL49JY3JViA5cW-sWC4K857XQ5Aiz30PZ89u5T-2VXIqKnfX9lXZ90NS5loVUS72YznlP2z4YNy50MJx1TmcRf_gKZ7yeDSMkkWHpHoMvQuritypUvEBzwk0w-gSjvBE0UWyV3Jdchw',
  },
  {
    id: 3,
    category: 'annual',
    title: 'Kathak Performance',
    icon: 'theater_comedy',
    aspect: 'aspect-[3/4]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJe4CKSt9Idh4qvhvDs3ml3IGT8_slTTlZ8fKBgObaLgf1FzFInJ70hvyBvNTqqNsyFAT38ASrNVPptib78wDfaKIZIwHdeCg8PG-Vy3x9egjz3tJSsVVEptRMSCTfIjgFsseBb4hQFBCNJhibMlwN7etOGWGVhQ6EVTtqxIvWnSKbI6aKDUqQ5wazhkd9-LDx62PXU0u43Sg_dgCPOGU9bcWcxzGIWJYfdEkkwNF_vWNo6TkM74LALgrr1UygXIg6fApeJjvVBdnl',
  },
  {
    id: 4,
    category: 'life',
    title: 'Student Council',
    icon: 'groups',
    aspect: 'aspect-[3/4]',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDk0y9sO4VFp5etdtc8H32lTNDUvWFj48PaZIPkMywHp699X8ujUJ9qHVrYkEKLXBRU1TgO0lSq9qTlwVs10ve253uQg0kouJozz3fAk0dtw0lxOElUIa9ToD8CMzYQ8RHGZF2PKu8GE4DKHDo-RL5MhHRkht_rAUZhuPaYCvEVw47ftvIzMDKXASOE3lSGBccvwo5p3ofrbvlXfpqCtHDyNYAWlju_To05UDK7Q9HqRR9o1QofHWMII4zgiEQAatiD21gnG7JO-piZ',
  },
  {
    id: 5,
    category: 'classroom',
    title: 'Knowledge Hub',
    icon: 'menu_book',
    aspect: 'aspect-video',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUmCdR-tvEKdw7Vzq0ygULEfMwNo1QnmjpxmLtxPxZvC6AVZPEYrxrhIVM4Sau8iMofROqmfnATCcXm4aKcGpEeo6Po5sXQsocEr-PwwD4Pt574LWV657hCpJ1tH7_DC3cTPOY-6xaW2tYAYJsYtYXPJO2lgp_ufiaWC08iAlHjgsh27Y-HZFCqhinM1IbKD5hs_h8Au-fhVCL4AcbdQmfVUO4wspI4P695JUSTqrb3zql59lIuAxtJh_LA3H7jJwYy08nGuyg6Pp2',
  },
  {
    id: 6,
    category: 'science',
    title: 'Lab Discovery',
    icon: 'science',
    aspect: 'aspect-square',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZzLiuyrZGUq3RvKP2l9rxwZ8dtAFSQykVbhKfBqnc-m-0RmUl5u5Wb7f5q90xdR9Yk00A566xyvRS_XWKunLuGqmEI_B2_nn4vhZXQmjkv9eHv9Y6lSVvOOd2Ldb2GQ4-sq9QbpeQ72DZlyd2XwZNkW18vNxuKaQcARE1IcRgZcHhgmof7f-4jdwECHhSG_lK9uJHaj-jol_cf4cYxps3BnoYwjNJd7DGFIHlqWEEwA0TCP2VTCyG4y9DDNCmjucYWBNvxYQ09HqN',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [playingVideo, setPlayingVideo] = useState(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => setContactSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] font-body-md overflow-x-hidden pt-20">
      {/* 1. Hero Section (Matching Screenshot 1) */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000666]/40 z-10 backdrop-blur-[2px]" />
          <img
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyAP9t5RkFs1y2bux6SvqESjJWLJDWxfhaQSMyA7Gzt4pPNpPgxffmM9ldaQTIQPRpf2NXGNNYMhy8bvka1WqXwTq5hwOduSw09rgYte60FrTLz9xi4JB0lLLXDoUyR95gRF71cPrQQU5SF-8YhPIVVtog6GwyCrXkXEtYJyi5AD3WxbKlnGpImTFhWX_xnSiLDvybTlGFyPONzCQ1UJw5j6BgnnH96mWgBcCVYA1CCX8bFHvc0rn0JMgPfZarFufxV6tTVBqa6PL"
            alt="Krishna International School Campus Gallery"
          />
        </div>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="font-display-lg text-4xl sm:text-5xl lg:text-[64px] font-extrabold mb-4 tracking-tight">
            Capturing Excellence
          </h1>
          <p className="font-body-lg text-base sm:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            Experience the vibrant life at Krishna International School through our visual journey of learning, sports, and creativity.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Pills & Masonry Photo Grid (Matching Screenshot 1 & 2) */}
      <section className="px-6 md:px-16 max-w-[1360px] mx-auto mb-20">
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-label-md text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#000666] text-white shadow-md'
                  : 'bg-[#e7e8e9] text-[#191c1d] hover:bg-[#e0e0ff]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-[2rem] shadow-lg border border-[#c6c5d4] bg-white hover:shadow-2xl transition-all duration-500"
            >
              <div className={`relative overflow-hidden ${item.aspect}`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={item.img}
                  alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/90 via-[#000666]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-label-md text-base font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined">{item.icon}</span>
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Video Gallery Section (Matching Screenshot 2 & 3) */}
      <section className="px-6 md:px-16 max-w-[1360px] mx-auto mb-20">
        <div className="text-center mb-12">
          <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mb-4">
            Video Gallery
          </h2>
          <p className="font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto">
            Take a virtual walk through our campus and relive the most memorable moments of our school year.
          </p>
        </div>

        <div className="space-y-8">
          {/* Featured Main Video */}
          <div
            onClick={() => setPlayingVideo('Campus Virtual Tour')}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden group cursor-pointer shadow-2xl border border-[#c6c5d4]"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtyAP9t5RkFs1y2bux6SvqESjJWLJDWxfhaQSMyA7Gzt4pPNpPgxffmM9ldaQTIQPRpf2NXGNNYMhy8bvka1WqXwTq5hwOduSw09rgYte60FrTLz9xi4JB0lLLXDoUyR95gRF71cPrQQU5SF-8YhPIVVtog6GwyCrXkXEtYJyi5AD3WxbKlnGpImTFhWX_xnSiLDvybTlGFyPONzCQ1UJw5j6BgnnH96mWgBcCVYA1CCX8bFHvc0rn0JMgPfZarFufxV6tTVBqa6PL"
              alt="Campus Virtual Tour"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="w-20 h-20 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  play_arrow
                </span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-headline-md text-2xl font-extrabold mb-1">Campus Virtual Tour</h3>
              <p className="text-white/80 font-body-md text-sm">
                Explore our state-of-the-art facilities and vibrant learning environment.
              </p>
            </div>
          </div>

          {/* 3 Secondary Video Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Video 1 */}
            <div
              onClick={() => setPlayingVideo('Annual Cultural Fest')}
              className="space-y-3 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJe4CKSt9Idh4qvhvDs3ml3IGT8_slTTlZ8fKBgObaLgf1FzFInJ70hvyBvNTqqNsyFAT38ASrNVPptib78wDfaKIZIwHdeCg8PG-Vy3x9egjz3tJSsVVEptRMSCTfIjgFsseBb4hQFBCNJhibMlwN7etOGWGVhQ6EVTtqxIvWnSKbI6aKDUqQ5wazhkd9-LDx62PXU0u43Sg_dgCPOGU9bcWcxzGIWJYfdEkkwNF_vWNo6TkM74LALgrr1UygXIg6fApeJjvVBdnl"
                  alt="Annual Cultural Fest"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  4:15
                </div>
              </div>
              <h4 className="font-bold text-[#000666] text-lg group-hover:text-[#7e5700] transition-colors">
                Annual Cultural Fest
              </h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                A grand celebration of music, dance, and theater showcasing our students' artistic talents.
              </p>
            </div>

            {/* Video 2 */}
            <div
              onClick={() => setPlayingVideo('Sports Day Highlights')}
              className="space-y-3 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_1Q_xUhnpd7V3cdFFbBnK7BDYkDNnt9_p1gyfv-ojAh2KXn5OBsMv-nrTwJwL4aWY5Ep04rLR9Tr3kuzfQkFg6KzEe7pV3WtsP84hPPy5PaDiPKPKACDQwQW0fBAWZEI5GOI7Zr2JjgpzFswSiRuoaLSL74-bC1engvqiyWH7J3KnO8UjXtM800UiuOBPv-I-x2nb-aSkONPq0Lf0vf1Fh7LjjNydhlxskkx2nqBTMdcFqd_f9WRL2e2gqli1kpUwiyXQJxVFSSpS"
                  alt="Sports Day Highlights"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  2:30
                </div>
              </div>
              <h4 className="font-bold text-[#000666] text-lg group-hover:text-[#7e5700] transition-colors">
                Sports Day Highlights
              </h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                Relive the energy and spirit of competition from our latest athletic championships.
              </p>
            </div>

            {/* Video 3 */}
            <div
              onClick={() => setPlayingVideo('Science Fair 2024')}
              className="space-y-3 group cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md border border-[#c6c5d4]">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZzLiuyrZGUq3RvKP2l9rxwZ8dtAFSQykVbhKfBqnc-m-0RmUl5u5Wb7f5q90xdR9Yk00A566xyvRS_XWKunLuGqmEI_B2_nn4vhZXQmjkv9eHv9Y6lSVvOOd2Ldb2GQ4-sq9QbpeQ72DZlyd2XwZNkW18vNxuKaQcARE1IcRgZcHhgmof7f-4jdwECHhSG_lK9uJHaj-jol_cf4cYxps3BnoYwjNJd7DGFIHlqWEEwA0TCP2VTCyG4y9DDNCmjucYWBNvxYQ09HqN"
                  alt="Science Fair 2024"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-bold px-2.5 py-1 rounded-md">
                  3:45
                </div>
              </div>
              <h4 className="font-bold text-[#000666] text-lg group-hover:text-[#7e5700] transition-colors">
                Science Fair 2024
              </h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                Witness the innovation and curiosity of our young scientists as they present their projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Get in Touch Section (Matching Screenshot 4 with Exact GPS Coordinates Google Map Pin) */}
      <section className="bg-[#f3f4f5] py-20" id="contact">
        <div className="px-6 md:px-16 max-w-[1360px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mb-4">
              Get in Touch
            </h2>
            <p className="font-body-lg text-base md:text-lg text-[#454652] max-w-xl mx-auto">
              We are here to answer any questions you may have about our curriculum, admissions, or campus life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-[#c6c5d4]">
              {contactSubmitted ? (
                <div className="p-8 bg-[#e0e0ff] text-[#000767] rounded-2xl text-center space-y-3">
                  <span className="material-symbols-outlined text-4xl text-[#000666]">check_circle</span>
                  <h3 className="font-bold text-xl">Message Sent!</h3>
                  <p className="text-sm">Thank you for contacting Krishna International School. We will get back to you shortly.</p>
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
        </div>
      </section>

      {/* Video Modal */}
      {playingVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl p-8 max-w-2xl w-full text-center space-y-6 relative shadow-2xl">
            <button
              onClick={() => setPlayingVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-[#f3f4f5] rounded-full flex items-center justify-center font-bold text-lg hover:bg-slate-200"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-[#feb300] text-[#281900] rounded-full flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                play_arrow
              </span>
            </div>
            <h3 className="font-extrabold text-2xl text-[#000666]">{playingVideo}</h3>
            <p className="text-[#454652] text-sm">
              Video preview for <strong>{playingVideo}</strong> at Krishna International School, Delhi G.T. Road, Aligarh.
            </p>
            <button
              onClick={() => setPlayingVideo(null)}
              className="bg-[#000666] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#1a237e]"
            >
              Close Player
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
