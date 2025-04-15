import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import CustomerLogin from "../src/Login Page/CustomerLogin";

const Homepage = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="font-sans">
      <div className="bg-black text-white text-center text-xs py-1">
        Free shipping on orders over $100. Shop Now
      </div>

      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
          <div className="font-bold text-2xl">E-commerce.</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:underline">Mobile</a>
            <a href="#" className="hover:underline">Laptop</a>
            <a href="#" className="hover:underline">Products</a>
            <a href="#" className="hover:underline">Categories</a>
            <a href="#" className="hover:underline">Accessories</a>
          </nav>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border px-2 py-1 rounded hidden md:block"
            />
            <button>Bag (0)</button>
            <button
              onClick={() => setShowLoginModal(true)}
              className="bg-black text-white px-6 py-2 rounded hover:bg-zinc-900 transition"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      <section
        className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/black-friday-concept-with-space-middle_23-2147695919.jpg')",
        }}
      >
        <div className="text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SEASONAL BRIGHTS</h1>
          <p className="text-lg md:text-xl mb-4">
            Find your golf look, designed especially for you
          </p>
          <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
            DISCOVER MORE
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold mb-6">POPULAR PRODUCTS </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              name: "IPhone 13",
              price: "$304",
              image:
                "https://img.freepik.com/free-photo/smartphone-nature-concept_23-2150246099.jpg",
            },
            {
              name: "Keypad Phone",
              price: "$210",
              image:
                "https://image.made-in-china.com/202f0j00MCpigkoEqUGL/Ulefone-Note-14-6-52-Inch-HD-Mobile-Phone-4500mAh-4-64GB-Slim-Fashion-4G-Volte-Android-Smartphone-with-Face-Unlock.webp",
            },
            {
              name: "Android Phone",
              price: "$370",
              image:
                "https://image.made-in-china.com/202f0j00wrCvyiedypqU/4-SIM-Card-4-Standby-GSM-Phone-with-Blacklist-for-Disturbing.webp",
            },
            {
              name: "Google Pixel 11",
              price: "$192",
              image:
                "https://image.made-in-china.com/202f0j00vCpiPlzhJYRe/Ulefone-Note-16-PRO-6-52-Inch-HD-Mobile-Phone-4400mAh-8-128GB-4G-Fashion-Slim-Android-Smartphone-with-Fingerprint-and-Face-Unlock.webp",
            },
          ].map((product, index) => (
            <div key={index} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-92 object-cover rounded-lg mb-2"
              />
              <p className="font-semibold">{product.name}</p>
              <p className="text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/front-view-shop-word-red-table_23-2148281114.jpg')",
        }}
      >
        <div className="text-center -mt-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-yellow-400">SHOP SALE</h2>
          <p className="mb-4">LAST CHANCE UP TO 50% OFF</p>
          <button className="bg-white -mt-2 text-black font-semibold px-6 py-2 rounded hover:bg-gray-200 transition">
            SHOP NOW
          </button>
        </div>
      </section>

      <footer className="bg-gray-100 text-gray-700 py-10 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-bold mb-2">ABOUT US</h4>
            <ul className="space-y-1">
              <li>Store Locator</li>
              <li>Boutiques</li>
              <li>Corporate Gifting</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">HELP</h4>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>Frequently Asked Questions</li>
              <li>Shipping</li>
              <li>Returns</li>
              <li>Repair Service</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">LEGAL</h4>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Accessibility Statement</li>
              <li>Responsible Business Practices</li>
              <li>Provenance Claim</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">SOCIAL</h4>
            <div className="flex space-x-4">
              <FaFacebook className="w-8 text-blue-500" />
              <FaInstagram className="w-8 text-red-500" />
              <FaTiktok className="w-8 text-black" />
              <FaYoutube className="w-8 text-red-700" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-1">CONTACT US</h4>
            <p>Email: client@jointor.com</p>
            <p>Phone: 1.666.727.8000</p>
            <p>Hours: Mon-Thu: 9AM - 7PM</p>
            <p>Fri: 9AM - 2PM</p>
          </div>
        </div>
      </footer>

      <div className="text-center py-4 w-full bg-black text-md text-gray-200">
        © E-commerce. 2024. All rights reserved.
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/90 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 relative shadow-lg">
            <button
              onClick={() => setShowLoginModal(false)}
              className="absolute top-2 right-2 text-gray-600 cursor-pointer hover:text-black text-2xl"
            >
              &times;
            </button>
            <CustomerLogin />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
