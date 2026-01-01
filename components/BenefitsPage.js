"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, Users, TrendingUp, Rocket } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "High-Quality Software",
    description:
      "We deliver reliable, scalable, and maintainable software solutions using the latest technologies. Every line of code is optimized for performance and future scalability.",
    tag: "Reliable",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description:
      "Our agile workflow ensures your projects are delivered on time without compromising quality. We streamline sprints and prioritize efficiency in every stage.",
    tag: "Efficient",
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description:
      "Security is our top priority. We implement best practices and conduct thorough audits to protect your applications and sensitive data from vulnerabilities.",
    tag: "Safe",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our team of experienced developers, designers, and product managers ensures top-notch results. Collaboration and expertise are at the core of our process.",
    tag: "Professional",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "We focus on building solutions that help your business scale efficiently. From performance optimization to user engagement, we aim for measurable growth.",
    tag: "Scalable",
  },
  {
    icon: Rocket,
    title: "Innovative Solutions",
    description:
      "We bring creativity and modern technology together to provide innovative solutions that keep your business ahead in the digital landscape.",
    tag: "Modern",
  },
];

export default function BenefitsPage() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">

      {/* Background Decorative Shapes */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-40 -left-20 w-72 h-72 bg-pink-300/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-300/5 rounded-full blur-2xl"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-600 font-medium text-sm md:text-base">Why Choose Morfex Tech</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">
            Benefits of Working with Morfex Tech
          </h1>
          <p className="text-gray-600 mt-4 text-lg md:text-xl">
            Partner with us to get modern, secure, and scalable software solutions tailored to your business needs. We combine expertise, innovation, and commitment to deliver outstanding results.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={index}
                className="flex flex-col items-start gap-4 p-8 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 shadow-inner">
                  <Icon size={28} />
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 mt-2 text-base md:text-lg">{benefit.description}</p>
                  {benefit.tag && (
                    <span className="inline-block mt-3 px-3 py-1 text-sm font-medium bg-blue-50 text-blue-600 rounded-full">
                      {benefit.tag}
                    </span>
                  )}
                </div>

                {/* Subtle hover glow */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl pointer-events-none"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
