"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with modern web and mobile technologies including React, Next.js, Node.js, React Native, Supabase, MongoDB, and more to deliver scalable solutions.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Project timelines vary depending on the scope. Typically, web applications take 4–12 weeks, while complex platforms or mobile apps may take 3–6 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer maintenance, updates, and long-term support packages to keep your product stable, secure, and optimized.",
  },
  {
    question: "Can you handle enterprise-level projects?",
    answer:
      "Absolutely. We design enterprise-ready systems focusing on scalability, security, and performance.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we collaborate with startups and SMBs, offering flexible pricing and scalable solutions tailored to growth.",
  },
];

export default function QuestionsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-28">

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-medium">FAQs</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 mt-5 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with Morfex Tech.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                className="relative rounded-2xl border border-gray-200 bg-white shadow-md"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-6 p-7 text-left"
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ChevronDown
                      size={26}
                      className="text-blue-600"
                    />
                  </motion.div>
                </button>

                {/* Answer – LAG FREE */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="px-7 pb-7 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
