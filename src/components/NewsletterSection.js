import React from "react";
import newslatterBg from "../Images/newslatter-bg.png";

const NewsletterSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-16"
      style={{
        backgroundImage: `url(${newslatterBg})`,
      }}>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative flex items-center justify-center h-full py-8 px-4">
        <div className="bg-black bg-opacity-40 p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 rounded-lg text-center max-w-fit w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white mb-6">
            Stay updated with our latest news and offers. Enter your email below
            to subscribe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="p-2 rounded-lg text-black w-full sm:w-auto"
            />
            <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-hover transition-transform transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
