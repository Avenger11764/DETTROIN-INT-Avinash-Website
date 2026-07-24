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
    title: 'Robotics & AI Club',
    icon: 'precision_manufacturing',
    aspect: 'aspect-[4/5]',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    category: 'classroom',
    title: 'Innovation Science Lab',
    icon: 'school',
    aspect: 'aspect-square',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    category: 'annual',
    title: 'Cultural Dance Performance',
    icon: 'theater_comedy',
    aspect: 'aspect-[3/4]',
    img: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    category: 'life',
    title: 'Student Council Leaders',
    icon: 'groups',
    aspect: 'aspect-[4/3]',
    img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'sports',
    title: 'Basketball Championship',
    icon: 'sports_basketball',
    aspect: 'aspect-square',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    category: 'science',
    title: 'Chemistry Lab Experiment',
    icon: 'science',
    aspect: 'aspect-[3/4]',
    img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    category: 'annual',
    title: 'Annual School Orchestra',
    icon: 'music_note',
    aspect: 'aspect-[4/5]',
    img: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    category: 'sports',
    title: 'Swimming Tournament',
    icon: 'pool',
    aspect: 'aspect-video',
    img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80',
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="bg-[#f8f9fa]/40 text-[#191c1d] font-body-md overflow-x-hidden pt-20 relative z-1">
      {/* 1. Hero Section */}
      <section className="relative h-[420px] flex items-center justify-center overflow-hidden mb-16 z-1">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#000666]/40 z-10 backdrop-blur-[2px]" />
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80"
            alt="Krishna International School Campus Gallery"
            loading="eager"
            decoding="async"
          />
        </div>
        <div className="relative z-20 text-center text-white px-6">
          <h1 className="reveal-drop font-display-lg text-4xl sm:text-5xl lg:text-[64px] font-extrabold mb-4 tracking-tight">
            Capturing Excellence
          </h1>
          <p className="reveal-fade delay-200 font-body-lg text-base sm:text-lg max-w-2xl mx-auto opacity-90 leading-relaxed">
            Experience the vibrant life at Krishna International School through our visual journey of learning, sports, and creativity.
          </p>
        </div>
      </section>

      {/* 2. Category Filter Pills & True CSS Masonry Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-20 relative z-1">
        <div className="flex flex-wrap gap-3 mb-12 justify-center reveal-drop">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full font-label-md text-sm font-bold transition-all hover-lift ${
                activeCategory === cat.id
                  ? 'bg-[#000666] text-white shadow-md'
                  : 'bg-[#e7e8e9] text-[#191c1d] hover:bg-[#e0e0ff]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Column Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`break-inside-avoid relative overflow-hidden rounded-3xl shadow-lg border border-[#c6c5d4] group cursor-pointer hover-lift transition-all duration-500 bg-white relative z-10 reveal-zoom delay-${
                (idx % 4) * 100 + 100
              }`}
            >
              <div className={`w-full ${item.aspect} relative overflow-hidden`}>
                <img
                  className="w-full h-full object-cover block transition-transform duration-700 group-hover:scale-110 relative z-10"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000666]/90 via-[#000666]/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 z-20">
                  <span className="text-white font-label-md text-base md:text-lg font-bold flex items-center gap-2 drop-shadow-md">
                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Event Highlights & Videos Section */}
      <section className="bg-[#f3f4f5]/50 py-20 relative z-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal-drop">
            <span className="text-[#7e5700] font-label-md text-sm font-bold uppercase tracking-wider">
              CAMPUS REELS
            </span>
            <h2 className="font-display-lg text-3xl md:text-5xl font-extrabold text-[#000666] mt-2 mb-4">
              Event Video Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-left hover-lift relative z-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1518834107812-67b0b7c58434?auto=format&fit=crop&w=800&q=80"
                  alt="Annual Cultural Fest"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="font-bold text-[#000666] text-lg">Annual Cultural Fest</h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                A grand celebration of music, dance, and theater showcasing our students' artistic talents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-fade delay-100 hover-lift relative z-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80"
                  alt="Sports Day Highlights"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="font-bold text-[#000666] text-lg">Sports Day Highlights</h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                Relive the energy and spirit of competition from our latest athletic championships.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-[#c6c5d4] space-y-4 reveal-right delay-200 hover-lift relative z-10">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-md">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80"
                  alt="Science Fair 2024"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h4 className="font-bold text-[#000666] text-lg">Science Fair 2024</h4>
              <p className="text-[#454652] text-sm leading-relaxed">
                Witness the innovation and curiosity of our young scientists as they present their projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-4 p-6 relative"
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/10 hover:bg-black/20 rounded-full flex items-center justify-center text-[#191c1d] transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <div className="rounded-xl overflow-hidden aspect-video">
              <img className="w-full h-full object-cover" src={selectedImage.img} alt={selectedImage.title} />
            </div>
            <h3 className="font-bold text-2xl text-[#000666] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#7e5700]">{selectedImage.icon}</span>
              {selectedImage.title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
