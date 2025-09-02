import React from 'react';

function Gallery() {
  const images = [
    'gallery1.jpg',
    'gallery2.jpg',
    'gallery3.jpg',
  ];
  return (
    <section id="gallery" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <div key={i} className="rounded-lg overflow-hidden shadow-lg">
            <img src={img} alt="project" className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
