"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { CheckCircle, Target, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AboutPage() {
    const router = useRouter()
  return (
    <>
      <Navbar />

      <section className="relative w-full bg-gradient-to-br from-white via-slate-50 to-slate-100 text-gray-900 overflow-hidden">

        {/* Background Glows */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        {/* ================= HERO ================= */}
        <div className="max-w-7xl mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-600 border border-blue-200">
              About Morfex Tech
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6 leading-tight">
              Engineering Digital Solutions
              <span className="text-blue-600"> For Growth</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              We help startups and businesses build scalable, secure, and
              future-ready software products with modern technologies.
            </p>
          </motion.div>
        </div>

        {/* ================= WHO WE ARE ================= */}
        <div className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>

            <p className="text-gray-600 text-lg">
              Morfex Tech is a modern software development company specializing
              in web apps, mobile apps, SaaS platforms, and cloud solutions.
            </p>

            <p className="text-gray-600 text-lg">
              We combine clean architecture, performance-driven development,
              and user-centric design to deliver products that scale confidently.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
              {[
                { label: "Projects Delivered", value: "10+" },
                { label: "Happy Clients", value: "10+" },
                { label: "Years Experience", value: "1+" },
                { label: "Tech Stack Mastery", value: "10+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border text-center"
                >
                  <h3 className="text-3xl font-bold text-blue-600">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-6 bg-blue-500/10 rounded-3xl blur-2xl" />
            <img
              src="https://softwebcreations.com/assets/img/hero-img.png"
              alt="About Morfex Tech"
              className="relative rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="bg-white py-24 border-t">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <motion.h2 className="text-3xl md:text-4xl font-bold">
              Our Mission
            </motion.h2>

            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              To help businesses transform ideas into powerful digital products
              through innovation, technology excellence, and strategic execution.
            </p>
          </div>
        </div>

        {/* ================= GOAL & VISION ================= */}
        <div className="max-w-7xl mx-auto px-6 py-28 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Goal */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-xl border"
          >
            <Target className="w-10 h-10 text-blue-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
            <p className="text-gray-600 text-lg">
              Our goal is to empower startups and enterprises by building
              high-quality, scalable, and secure digital solutions that solve
              real-world problems and accelerate business growth.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-3xl p-10 shadow-xl border"
          >
            <Eye className="w-10 h-10 text-indigo-600 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To become a trusted global technology partner known for innovation,
              reliability, and delivering digital products that shape the future.
            </p>
          </motion.div>

        </div>

        {/* ================= CORE VALUES ================= */}
        <div className="bg-gradient-to-br from-slate-50 to-white py-28 border-t">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center">
              Our Core Values
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
              {[
                {
                  title: "Quality First",
                  desc: "We prioritize clean code, performance, and scalability.",
                },
                {
                  title: "Client-Centric",
                  desc: "Your business goals shape every technical decision.",
                },
                {
                  title: "Innovation",
                  desc: "We leverage modern technologies for future-ready products.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-xl border"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= WHY CHOOSE US ================= */}
        <div className="py-28 border-t">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2 className="text-3xl md:text-4xl font-bold text-center">
              Why Choose Morfex Tech
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {[
                "Modern Tech Stack & Best Practices",
                "Transparent Communication",
                "Scalable Architecture",
                "Fast MVP Delivery",
                "Long-term Support",
                "Startup & Enterprise Experience",
              ].map((point, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="text-blue-600 mt-1" />
                  <p className="text-lg text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CTA ================= */}
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

      </section>

      <Footer />
    </>
  );
}
