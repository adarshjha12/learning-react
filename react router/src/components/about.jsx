// About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-black text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://via.placeholder.com/400"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
          <p className=" mb-4">
            Welcome to MyApp! We are dedicated to providing the best services to
            our customers. Our mission is to deliver high-quality products and
            exceptional customer support. With a team of experienced
            professionals, we aim to make a positive impact in the industry.
          </p>
          <p className="">
            Join us on our journey as we continue to grow and innovate. We value
            transparency, quality, and customer satisfaction above all. Thank
            you for choosing MyApp!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
