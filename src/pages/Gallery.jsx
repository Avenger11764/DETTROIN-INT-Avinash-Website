import { useState } from 'react';

const galleryCategories = ['All', 'Campus & Labs', 'Sports & Swimming', 'Events & Cultural'];

const galleryItems = [
  {
    title: '5-Acre Main Building & Lawns',
    category: 'Campus & Labs',
    img: '/school-building.jpg',
  },
  {
    title: 'Advanced Science & Innovation Lab',
    category: 'Campus & Labs',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZzLiuyrZGUq3RvKP2l9rxwZ8dtAFSQykVbhKfBqnc-m-0RmUl5u5Wb7f5q90xdR9Yk00A566xyvRS_XWKunLuGqmEI_B2_nn4vhZXQmjkv9eHv9Y6lSVvOOd2Ldb2GQ4-sq9QbpeQ72DZlyd2XwZNkW18vNxuKaQcARE1IcRgZcHhgmof7f-4jdwECHhSG_lK9uJHaj-jol_cf4cYxps3BnoYwjNJd7DGFIHlqWEEwA0TCP2VTCyG4y9DDNCmjucYWBNvxYQ09HqN',
  },
  {
    title: 'Central Knowledge Library',
    category: 'Campus & Labs',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUmCdR-tvEKdw7Vzq0ygULEfMwNo1QnmjpxmLtxPxZvC6AVZPEYrxrhIVM4Sau8iMofROqmfnATCcXm4aKcGpEeo6Po5sXQsocEr-PwwD4Pt574LWV657hCpJ1tH7_DC3cTPOY-6xaW2tYAYJsYtYXPJO2lgp_ufiaWC08iAlHjgsh27Y-HZFCqhinM1IbKD5hs_h8Au-fhVCL4AcbdQmfVUO4wspI4P695JUSTqrb3zql59lIuAxtJh_LA3H7jJwYy08nGuyg6Pp2',
  },
  {
    title: 'Olympic-Standard Heated Pool',
    category: 'Sports & Swimming',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Inter-School Basketball Championship',
    category: 'Sports & Swimming',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Annual Cultural Festival Performance',
    category: 'Events & Cultural',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
  },
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      <section className="relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center z-1">
        <span className="reveal-drop bg-[#feb300] text-[#281900] px-5 py-2 rounded-full font-label-md text-xs font-bold uppercase tracking-wider inline-block mb-4 shadow-sm">
          CAMPUS & LIFE GALLERY
        </span>
        <h1 className="reveal-drop delay-100 font-display-lg text-4xl sm:text-5xl lg:text-6xl text-[#000666] font-extrabold mb-6 tracking-tight">
          Visual Tour of Krishna International
        </h1>
        <p className="reveal-fade delay-200 font-body-lg text-base md:text-lg text-[#454652] max-w-2xl mx-auto leading-relaxed">
          Glimpses of our vibrant 5-acre campus, academic laboratories, sporting tournaments, and cultural events.
        </p>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-1">
        <div className="flex justify-center gap-3 mb-12 flex-wrap reveal-drop">
          {galleryCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                selectedCategory === cat
                  ? 'bg-[#000666] text-white shadow-md'
                  : 'bg-white text-[#000666] hover:bg-[#e0e0ff]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl overflow-hidden shadow-md border border-[#c6c5d4] group hover-lift transition-all duration-500 relative z-10 reveal-zoom delay-${
                (idx % 3) * 100
              }`}
            >
              <div className="h-64 overflow-hidden relative z-10">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-[#7e5700] uppercase tracking-wider">{item.category}</span>
                <h3 className="font-bold text-lg text-[#000666] mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
