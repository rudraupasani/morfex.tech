"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Cloud, Shield } from "lucide-react";

const services = [
  {
    title: "Web Development",
    desc: "High-performance, scalable web applications using modern frameworks.",
    icon: Code,
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform Android & iOS apps with smooth UX and fast performance.",
    icon: Smartphone,
  },
  {
    title: "Cloud & Backend Solutions",
    desc: "Secure, scalable backend systems with cloud-ready architecture.",
    icon: Cloud,
  },
  {
    title: "Security & Optimization",
    desc: "Performance tuning, security audits, and application hardening.",
    icon: Shield,
  },
  {
    title: "UI/UX Design",
    desc: "User-centric designs that enhance engagement and drive conversions.",
    icon: Code,
  },
  {
    title: "E-commerce Solutions",
    desc: "Robust online stores with seamless shopping experiences.",
    icon: Smartphone,
  },
  {
    title: "API Development & Integration",
    desc: "Custom APIs and third-party integrations for enhanced functionality.",
    icon: Cloud,
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing support, updates, and performance monitoring.",
    icon: Shield,
  }
];

export default function ServicesSection() {
  return (
    <section className="relative bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-blue-600 font-medium">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Software Development Services
          </h2>
          <p className="text-gray-600 mt-4">
            Morfex Tech delivers reliable, secure, and scalable digital solutions
            tailored for modern businesses.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5 group-hover:scale-110 transition">
                  <Icon size={24} />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
