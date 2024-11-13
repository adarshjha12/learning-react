// MainPage.js
import React from 'react';
import Navbar from './components/Header';
import Footer from './components/footer';
import About from './components/about';
import ContactPage from './components/contact';

const MainPage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyApp</h1>
          <p className="text-lg mb-6">
            Discover the best solutions tailored for your needs.
          </p>
          <a
            href="#about"
            className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* About Section */}
      {/* <About /> */}

      {/* Features Section */}
      <section id="features" className="py-12 px-6 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature One</h3>
              <p className="text-gray-700">
                Description of the first feature offered by the app.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Two</h3>
              <p className="text-gray-700">
                Description of the second feature offered by the app.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature Three</h3>
              <p className="text-gray-700">
                Description of the third feature offered by the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-4">
            Have questions? Reach out to us!
          </p>
          <a
            href="mailto:support@myapp.com"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Email Us
          </a>
        </div>
      </section>
      {/* <ContactPage></ContactPage> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainPage;
