// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} MyApp. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#facebook" className="hover:text-blue-400">
            Facebook
          </a>
          <a href="#twitter" className="hover:text-blue-300">
            Twitter
          </a>
          <a href="./about" className="hover:text-pink-400">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
