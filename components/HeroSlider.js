"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative mt-10 w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-7"
        >
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-600 border border-blue-200"
          >
            Limited Offer - 20% Off
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
          >
            Building{" "}
            <span className="text-blue-600">
              Scalable Software
            </span>
            <br /> for Modern Businesses
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 text-lg max-w-xl"
          >
            Morfex Tech delivers high-performance web & mobile solutions using
            cutting-edge technologies. We transform ideas into reliable,
            future-ready digital products.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="px-10 py-3 cursor-pointer rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-semibold shadow-lg"
            >
              Let’s Discuss Your Project
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative w-full h-[320px] md:h-[440px] rounded-3xl overflow-hidden bg-white"
        >

          <motion.img
            src="https://softwebcreations.com/assets/img/hero-img.png"
            alt="Morfex Tech Hero"
            className="relative w-full h-full object-contain"
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
