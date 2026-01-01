"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CTASection() {
    const router = useRouter();
  return (
    <section className="relative bg-blue-400 text-white py-24 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Build Your Next Digital Product?
        </h2>
        <p className="text-gray-100 mb-8">
          Let’s turn your ideas into powerful software solutions. Partner with Morfex Tech today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
          onClick={()=> {
            router.push("/contact");
          }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 cursor-pointer py-3 rounded-xl bg-white text-blue-600 font-medium shadow-lg hover:bg-gray-100 transition"
          >
              Let’s Discuss Your Project
          </motion.button>
        </div>
      </motion.div>

    </section>
  );
}
