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
      "Project timelines vary depending on the scope. Typically, web applications take 4-12 weeks, while complex platforms or mobile apps may take 3-6 months.",
  },
  {
    question: "Do you provide post-launch support?",
    answer:
      "Yes! We offer maintenance, updates, and support packages to ensure your software continues running smoothly.",
  },
  {
    question: "Can you handle enterprise-level projects?",
    answer:
      "Absolutely. Our team has experience working with startups as well as enterprise clients to deliver secure, scalable, and high-performance solutions.",
  },
  {
    question: "Do you work with startups and small businesses?",
    answer:
      "Yes, we tailor our services to fit your budget and requirements, ensuring high-quality results for projects of any size.",
  },
];

export default function QuestionsPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>

      <section className="relative bg-white py-24">
        <div className="max-w-5xl mx-auto px-6">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-medium">FAQs</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Answers to common questions about working with Morfex Tech.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:scale-[1.01] transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6, type: "spring", stiffness: 80 }}
                viewport={{ once: true }}
              >
                {/* Question */}
                <div
                  className="flex items-center justify-between p-6"
                  onClick={() => toggleIndex(index)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: "fade", stiffness: 300 }}
                  >
                    <ChevronDown size={24} className="text-blue-600" />
                  </motion.div>
                </div>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, type: "fade", stiffness: 90 }}
                      className="px-6 pb-6 text-gray-600 text-base"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
