"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star, UserCircle, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nilesh Upasani",
    role: "Microcam",
    message:
      "Morfex Tech delivered an outstanding product with excellent performance and a clean, modern UI. Their team understood our requirements clearly and executed everything smoothly from start to finish.",
  },
  {
    name: "Benjin Lee",
    role: "Instakit",
    message:
      "Working with Morfex Tech was a great experience. Communication was clear, timelines were respected, and the final product matched our expectations perfectly.",
  },
  // {
  //   name: "Rahul Mehta",
  //   role: "Drft Marketing",
  //   message:
  //     "The team delivered a reliable and scalable solution on time. Their technical expertise helped us launch faster and with confidence.",
  // },
  {
    name: "Siddharth Soni",
    role: "M/s Yogeshkumar And Brothers",
    message:
      "Their UI/UX improvements significantly boosted engagement and conversions. The design felt premium and intuitive.",
  },
];

const sliderItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            Client Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-6 text-gray-900">
            Trusted by Businesses
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            We help startups and companies build modern digital products
            that scale, perform, and impress users.
          </p>
        </div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden"
        >
          <motion.div
            className="flex gap-10"
            animate={{ x: paused ? undefined : "-50%" }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
          >
            {sliderItems.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  min-w-[340px]
                  max-w-[340px]
                  rounded-2xl
                  border border-gray-200
                  bg-white/70
                  backdrop-blur-lg
                  shadow-lg
                  p-7
                  transition-all
                "
              >
                {/* Quote Icon */}
                <Quote className="text-blue-500 mb-4" size={22} />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-gray-600 text-sm leading-relaxed mb-7">
                  “{item.message}”
                </p>

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-full">
                    <UserCircle size={32} className="text-blue-600" />
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}