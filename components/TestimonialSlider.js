
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Nilesh Upasani",
    role: "Microcam",
    message:
      "Morfex Tech delivered an outstanding product with excellent performance and a clean, modern UI. Their team understood our requirements clearly and executed everything smoothly.",
  },
  {
    name: "Benjin Lee",
    role: "Instakit",
    message:
      "Working with Morfex Tech was a great experience. Communication was clear, timelines were respected, and the final product exceeded our expectations.",
  },
  {
    name: "Siddharth Soni",
    role: "M/s Yogeshkumar And Brothers",
    message:
      "Their UI/UX improvements significantly boosted engagement and conversions. The design felt premium, intuitive, and highly professional.",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold">
            Client Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-5 text-slate-900">
            Trusted by Businesses
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We help startups and companies build modern digital products that
            scale, perform, and create exceptional user experiences.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.4 }}
              className="
                bg-white
                border border-slate-200
                rounded-3xl
              
                p-8 md:p-10
              "
            >
              <Quote
                size={32}
                className="text-blue-600 mb-6"
              />

              <p className="text-lg md:text-xl leading-relaxed text-slate-600 mb-8">
                "{testimonials[current].message}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                  {testimonials[current].name
                    .split(" ")
                    .map((word) => word[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonials[current].name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition - all duration - 300 rounded - full ${current === index
                  ? "w-8 h-2 bg-blue-600"
                  : "w-2 h-2 bg-slate-300"
                  } `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
