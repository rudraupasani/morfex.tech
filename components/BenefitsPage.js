"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Zap,
  Shield,
  Users,
  TrendingUp,
  Rocket,
} from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "High-Quality Software",
    description:
      "Reliable, scalable, and maintainable software built with modern technologies and optimized for long-term growth.",
    tag: "Reliable",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Our agile development workflow ensures fast project delivery while maintaining excellent code quality.",
    tag: "Efficient",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Security-first development with industry best practices to protect your data and systems.",
    tag: "Safe",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "A team of experienced developers and designers focused on building high-quality digital products.",
    tag: "Professional",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Solutions designed to scale with your business and improve performance and engagement.",
    tag: "Scalable",
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description:
      "Modern technologies and creative thinking to build innovative digital experiences.",
    tag: "Modern",
  },
];

export default function BenefitsPage() {
  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-white py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-blue-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-indigo-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900">
            Benefits of Working With Morfex Tech
          </h2>

          <p className="text-gray-600 mt-4 leading-relaxed">
            We combine modern technologies, strong engineering practices,
            and business-focused strategies to deliver software that drives growth.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-white border border-gray-200 rounded-2xl p-8 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500 text-white shadow-md mb-6 group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Tag */}
                <span className="inline-block mt-5 text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
                  {benefit.tag}
                </span>

                {/* subtle border glow */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-200 pointer-events-none transition"></div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}