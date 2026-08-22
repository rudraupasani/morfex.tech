"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Morfex delivered a product that exceeded our expectations. The attention to detail and speed of delivery was remarkable.",
    author: "Siddharth Soni",
    role: "Founder, Jwellery Brand",
    initials: "SS",
  },
  {
    quote: "They understood our vision from day one and translated it into a polished, high-performing platform. Highly recommended.",
    author: "Nilesh Upasani",
    role: "CEO, Microcam",
    initials: "NU",
  },
  {
    quote: "Working with Morfex was seamless. Their technical expertise and communication made the project a great success.",
    author: "Benjin Lee",
    role: "Co-founder, Drft Marketing",
    initials: "BL",
  },

];

const doubled = [...testimonials, ...testimonials];

function TestimonialCard({ item }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] md:w-[400px] border p-6 flex flex-col gap-4"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      {/* Quote mark */}
      <span
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "1.5rem",
          color: "var(--line-strong)",
          lineHeight: 1,
        }}
      >
        "
      </span>
      <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--fg)" }}>
        {item.quote}
      </p>
      <div
        className="flex items-center gap-3 border-t pt-4"
        style={{ borderColor: "var(--line)" }}
      >
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center text-xs font-medium"
          style={{
            background: "var(--fg)",
            color: "var(--bg)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
            {item.author}
          </p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t overflow-hidden"
      style={{ borderColor: "var(--line)" }}
      id="testimonials"
    >
      <div className="shell" ref={ref}>
        <div className="grid gap-6 md:grid-cols-12 md:gap-x-8 mb-12">
          <div className="md:col-span-2">
            <p className="eyebrow">04 — Testimonials</p>
          </div>
          <div className="md:col-span-7">
            <motion.h2
              className="h1"
              style={{ color: "var(--fg)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              What our clients say.
            </motion.h2>
          </div>
        </div>
      </div>

      {/* Scrolling ticker */}
      <div className="border-t border-b py-8" style={{ borderColor: "var(--line)" }}>
        <div className="flex gap-5 animate-testimonial-slider w-max">
          {doubled.map((item, i) => (
            <TestimonialCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
