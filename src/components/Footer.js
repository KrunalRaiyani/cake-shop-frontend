import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGoogle,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-4 lg:px-8 xl:px-12">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex-1 min-w-[200px] md:mr-12">
            <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
            <p className="text-sm">
              We bake delicious cakes with love and care. Our cakes are made
              from the finest ingredients, ensuring quality and taste in every
              bite.
            </p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h2 className="font-semibold mb-4">Useful Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:underline">
                  Our Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1 min-w-[200px]">
            <h2 className="font-semibold mb-4">Contact Us</h2>
            <p className="text-sm mb-2">123 Bakery Street, Sweet City</p>
            <p className="text-sm mb-2">Email: support@ourcakeshop.com</p>
            <p className="text-sm mb-2">Phone: (123) 456-7890</p>
          </div>

          <div className="flex-1 min-w-[150px]">
            <h2 className="font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com">
                <FaFacebook size={21} />
              </a>
              <a href="https://twitter.com">
                <FaTwitter size={21} />
              </a>
              <a href="https://instagram.com">
                <FaInstagram size={21} />
              </a>
              <a href="https://linkedin.com">
                <FaLinkedin size={21} />
              </a>
              <a href="https://google.com">
                <FaGoogle size={21} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-8">
          © 2024 Our Cake Shop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
