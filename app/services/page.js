"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Our Custom Mobile App Development Services",
    description:
      "We design and develop high-performance mobile applications tailored to your business goals. From concept to deployment, our mobile apps are secure, scalable, and optimized for user engagement.",
    techStack: [
      "React Native",
      "Flutter",
      "Android (Kotlin)",
      "Firebase",
      "Supabase",
      "MongoDB"
    ],
    image: "https://softwebcreations.com/assets/img/about.png",
    reverse: false,
  },
  {
    title: "Our Web App Development Services",
    description:
      "We create fast, responsive, and SEO-friendly web applications using modern frameworks. Our solutions focus on performance, scalability, and exceptional user experience.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Supabase",
      "Firebase",   
      "Node.js",
      "MySQL",
      "MongoDB",
      "Vercel",
      "PHP"
    ],
    image: "https://softwebcreations.com/assets/img/features-1.png",
    reverse: true,
  },
  {
    title: "Our MVP Development Services",
    description:
      "Launch your product faster with our MVP development services. We help startups and enterprises validate ideas quickly, reduce risks, and gather real user feedback.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Supabase",
      "Firebase",   
      "Node.js",
      "MySQL",
      "MongoDB",
      "Vercel",
      "AWS",
    ],
    image: "https://softwebcreations.com/assets/img/about.png",
    reverse: false,
  },
  {
    title: "Our SaaS Development Services",
    description:
      "We build secure, cloud-native SaaS platforms with modern architectures that scale effortlessly. From startups to enterprise SaaS, we handle everything end-to-end.",
    techStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "REST APIs",
      "Supabase",
      "Firebase",   
      "Node.js",
      "MySQL",
      "MongoDB",
      "Vercel",
      "AWS",
    ],
    image: "https://softwebcreations.com/assets/img/features-1.png",
    reverse: true,
  },
  
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <section className="bg-white py-30">
        <div className="text-center max-w-3xl mx-auto mb-20 px-6">
          <span className="text-blue-600 font-medium text-2xl">Our Services</span>
          <p className="text-gray-600 mt-4 text-lg">
            At Morfex Tech, we offer end-to-end software development services to help businesses of all sizes build modern, scalable, and secure digital products. Our expertise spans mobile apps, web applications, SaaS platforms, and MVP development.
          </p>  
        </div>
        <div className="max-w-7xl mx-auto px-6 space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Text */}
              <div className={service.reverse ? "lg:order-2" : ""}>

                <h2 className="text-4xl font-bold mt-3">
                  {service.title}
                </h2>

                <p className="text-gray-600 mt-5 text-lg">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4">
                    Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {service.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium border border-blue-100"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <motion.div
                className={`relative ${service.reverse ? "lg:order-1" : ""}`}
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl" />
                <img
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={450}
                  className="relative rounded-3xl shadow-2xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
