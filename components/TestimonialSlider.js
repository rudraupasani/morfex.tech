"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star, UserCircle } from "lucide-react";

const testimonials = [
  {
    name: "Mr Nilesh",
    role: "Founder , Microcam",
    message:
      "Morfex Tech delivered an outstanding product with excellent performance and a clean, modern UI. Their team understood our requirements clearly and executed everything smoothly from start to finish.",
  },
  {
    name: "Bhargav Rao",
    role: "Product Manager ",
    message:
      "Working with Morfex Tech was a great experience. Communication was clear, timelines were respected, and the final product matched our expectations perfectly with great attention to detail.",
  },
  {
    name: "Rahul Mehta",
    role: "CEO",
    message:
      "The team delivered a reliable and scalable solution on time. Their technical expertise and problem-solving approach helped us launch faster and with confidence.",
  },
  {
    name: "Priya Verma",
    role: "Marketing Lead , Optivex",
    message:
      "Their UI/UX improvements significantly boosted user engagement and conversions. The design felt premium, intuitive, and aligned perfectly with our brand goals.",
  },
];


const sliderItems = [...testimonials, ...testimonials];

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-slate-50 to-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-blue-600 text-sm font-medium uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Customer Reviews
          </h2>
        </div>

        {/* Slider */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative overflow-hidden"
        >
          <motion.div
            className="flex gap-6"
            animate={{ x: paused ? undefined : "-50%" }}
            transition={{
              duration: 24,
              ease: "linear",
              repeat: Infinity,
            }}
            style={{ width: "max-content" }}
          >
            {sliderItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[250px] max-w-[250px] bg-white border border-gray-200 rounded-xl shadow-md p-5"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  “{item.message}”
                </p>

                {/* User */}
                <div className="flex items-center gap-2">
                  <UserCircle size={32} className="text-blue-600" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <span className="text-xs text-gray-500">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
