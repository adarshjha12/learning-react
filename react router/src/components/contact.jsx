// ContactPage.js
import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-black py-12 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">
          Contact Us
        </h2>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Subject"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
