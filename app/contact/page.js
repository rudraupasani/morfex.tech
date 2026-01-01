"use client";

import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Page = () => {
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gray-50 pt-18 text-gray-900 overflow-hidden">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 py-28 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact Morfex Tech
          </h1>
          <p className="mt-6 text-lg md:text-xl text-blue-100">
            Let’s turn your idea into a scalable digital product.
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            Let’s Talk About Your Project
          </h2>

          <p className="text-gray-600 text-lg mb-10 max-w-xl">
            Whether you’re building an MVP, SaaS platform, or custom web/mobile
            solution <span className="font-semibold">Morfex Tech</span> helps
            you move fast with modern, scalable technology.
          </p>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-2xl shadow-md border-blue-500 border-l-15">
              <p className="font-semibold">Email</p>
              <p className="text-gray-600">rudraupasani7@gmail.com</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md border-blue-500 border-l-15">
              <p className="font-semibold">Phone</p>
              <p className="text-gray-600">+91 9054664402</p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md  border-l-15 border-blue-500 ">
              <p className="font-semibold">Location</p>
              <p className="text-gray-600">
                India • Working with global clients
              </p>
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl shadow-blue-200 p-10"
        >
          <h3 className="text-3xl font-bold mb-2">
            Start a Conversation
          </h3>
          <p className="text-gray-500 mb-8">
            Tell us about your idea we usually reply within 24 hours.
          </p>

          <form className="space-y-6">
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Company */}
            <input
              type="text"
              placeholder="Company / Startup Name"
              className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Service Type */}
            <select className="w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select Service</option>
              <option>Web App Development</option>
              <option>Mobile App Development</option>
              <option>MVP Development</option>
              <option>SaaS Product</option>
              <option>UI/UX Design</option>
            </select>

            {/* Budget & Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <select className="w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Estimated Budget</option>
                <option>$500 – $1K</option>
                <option>$2k – $5K</option>
                <option>$5K – $10K</option>
                <option>$10K+</option>
              </select>

              <select className="w-full px-5 py-4 rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Project Timeline</option>
                <option>2–4 Weeks</option>
                <option>1–2 Months</option>
                <option>3–6 Months</option>
                <option>Long Term</option>
              </select>
            </div>

            {/* Message */}
            <textarea
              rows="5"
              placeholder="Describe your project requirements..."
              className="w-full px-5 py-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full py-4 cursor-pointer rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg shadow-lg"
            >
              Submit Inquiry
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Page;
