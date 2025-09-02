import React from 'react';

function Services() {
  return (
    <section id="services" className="py-16 px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Residential</h3>
          <p>We design and construct modern, durable, and affordable homes.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Commercial</h3>
          <p>High-quality commercial projects with timely delivery.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Renovation</h3>
          <p>Transform your old spaces into modern, stylish, and functional areas.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
