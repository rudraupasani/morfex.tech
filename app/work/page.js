"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15, // stagger animation
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

/* ================= PROJECT DATA ================= */

const projects = [
    {
        title: "Microcam - CCTV & Surveillance",
        description:
            "Modern security product website showcasing CCTV cameras and surveillance systems.",
        longDescription:
            "Microcam is a premium surveillance brand website built for product showcasing, branding, smooth animations and professional user experience.",
        image: "https://myacernity.vercel.app/micro-ss.png",
        tech: ["React", "Tailwind", "Framer Motion"],
        live: "#",
    },
    {
        title: "Drft Marketing",
        description:
            "A modern marketing website focused on conversion, animations and high-performance architecture.",
        longDescription:
            "Drft Marketing was built with performance-first architecture, smooth animations, SEO optimization and strong conversion design to maximize engagement and leads.",
        image: "https://myacernity.vercel.app/drft-thumb.png",
        tech: ["Next.js", "Tailwind", "Framer Motion", "Node JS"],
        live: "#",
    },
    {
        title: "Instakit",
        description:
            "Toolkit platform with auth, dashboards and scalable backend using Supabase and MongoDB.",
        longDescription:
            "Instakit provides authentication, dashboards, database management and scalable backend services for teams and startups.",
        image: "https://myacernity.vercel.app/qucikit-thumb.png",
        tech: ["React", "Supabase", "Node JS", "MongoDB"],
        live: "#",
    },
    {
        title: "Hook.live",
        description:
            "Real-time live platform with blazing fast UI and scalable backend architecture.",
        longDescription:
            "Hook.live enables real-time communication with optimized React UI, websocket architecture and high performance backend services.",
        image: "https://myacernity.vercel.app/hook-thumb.png",
        tech: ["React", "Supabase", "Node JS", "MongoDB" , "Express JSs"],
        live: "#",
    },

];

/* ================= COMPONENT ================= */

export default function OurWorkPage() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleProject = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Navbar />

            <section className="bg-white py-28">
                <div className="max-w-7xl mx-auto px-6">

                    {/* ================= HEADER ================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-24"
                    >
                        <span className="text-blue-600 font-medium">Our Work</span>

                        <h1 className="text-5xl font-bold mt-3">
                            Projects We’ve Delivered
                        </h1>

                        <p className="text-gray-600 mt-4">
                            Real products crafted with performance & scalability.
                        </p>
                    </motion.div>

                    {/* ================= PROJECT LIST ================= */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"            // 🔥 animation only on scroll
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-16"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="rounded-3xl  p-8 shadow-sm hover:shadow-lg transition"
                            >
                                {/* ROW */}
                                <div className="grid md:grid-cols-2 gap-14 items-center">

                                    {/* IMAGE */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        className="rounded-2xl shadow-lg w-full"
                                    />

                                    {/* INFO */}
                                    <div className="space-y-5">
                                        <h2 className="text-3xl font-bold">
                                            {project.title}
                                        </h2>

                                        <p className="text-gray-600">
                                            {project.description}
                                        </p>

                                        {/* TECH TAGS */}
                                        <div className="flex flex-wrap gap-3">
                                            {project.tech.map((t, i) => (
                                                <span
                                                    key={i}
                                                    className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        {/* BUTTON */}
                                        <button
                                            onClick={() => toggleProject(index)}
                                            className="mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition cursor-pointer"
                                        >
                                            {openIndex === index
                                                ? "Close Details ↑"
                                                : "See More →"}
                                        </button>
                                    </div>
                                </div>

                                {/* ================= EXPAND DETAILS ================= */}
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.35 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-8 border-t pt-8 text-gray-700">
                                                <p className="leading-relaxed mb-6">
                                                    {project.longDescription}
                                                </p>

                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                                                >
                                                    Live Demo
                                                </a>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
