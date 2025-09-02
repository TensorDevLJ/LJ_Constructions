import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded bg-white dark:bg-gray-800 border" />
        <input type="email" placeholder="Your Email" className="w-full p-3 rounded bg-white dark:bg-gray-800 border" />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-white dark:bg-gray-800 border" rows="5"></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
