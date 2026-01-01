"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
    {
        title: "Cluezy - Agentic Research Engine",
        description:
            "Spain Academy approached me to design a modern, vibrant website that would help attract students to their Spanish-LCA course. This intensive course immerses students in the Spanish language, culture, and university experience, ultimately helping them gain access to Spanish universities. The website had to reflect the energy and excitement of the Spanish culture while providing clear information on the course offerings and the admissions process.",
        image: "",
        tech: ["Next.js", "Tailwind", "Framer Motion" , "Supabase" , "Vercel" , "Redis" , "Node.js" ],
    },
    {
        title: "Drft Marketing",
        description:
            "Spain Academy approached me to design a modern, vibrant website that would help attract students to their Spanish-LCA course. This intensive course immerses students in the Spanish language, culture, and university experience, ultimately helping them gain access to Spanish universities. The website had to reflect the energy and excitement of the Spanish culture while providing clear information on the course offerings and the admissions process.",
        image: "https://myacernity.vercel.app/drft-thumb.png",
        tech: ["Next.js", "Tailwind", "Framer Motion"],
    },
    {
        title: "Instakit",
        description:
            "Spain Academy approached me to design a modern, vibrant website that would help attract students to their Spanish-LCA course. This intensive course immerses students in the Spanish language, culture, and university experience, ultimately helping them gain access to Spanish universities. The website had to reflect the energy and excitement of the Spanish culture while providing clear information on the course offerings and the admissions process.",
        image: "https://myacernity.vercel.app/qucikit-thumb.png",
        tech: ["React", "Supabase", "AWS"],
    },
    {
        title: "Hook.live",
        description:
            "Spain Academy approached me to design a modern, vibrant website that would help attract students to their Spanish-LCA course. This intensive course immerses students in the Spanish language, culture, and university experience, ultimately helping them gain access to Spanish universities. The website had to reflect the energy and excitement of the Spanish culture while providing clear information on the course offerings and the admissions process.",
        image: "https://myacernity.vercel.app/hook-thumb.png",
        tech: ["React", "Supabase", "AWS"],
    },
    {
        title: "Microcam",
        description:
            "Microcam.in is a fully modern, responsive security product website designed to showcase CCTV cameras, DVR systems, and smart surveillance solutions. I built the entire frontend using React and Tailwind CSS, focusing on smooth UI, fast performance, and a premium brand feel.",
        image: "https://myacernity.vercel.app/micro-ss.png",
        tech: ["React", "Tailwind", "Framer Motion"],
    },
];

export default function OurWorkPage() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <>
            <Navbar />

            <section className="relative bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-blue-600 font-medium">Our Work</span>
                        <h1 className="text-4xl md:text-5xl font-bold mt-2">
                            Projects We've Delivered
                        </h1>
                        <p className="text-gray-600 mt-4 text-lg">
                            Real-world products crafted with modern technology and design.
                        </p>
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setActiveProject(project)}
                                className="group cursor-pointer rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                    <p className="text-gray-600 mt-2 text-sm line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            <AnimatePresence>
                {activeProject && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                        />

                        {/* Modal Card */}
                        <motion.div
                            className="fixed z-50 inset-0 flex items-center justify-center px-6"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="bg-white max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative">

                                {/* Close */}
                                <button
                                    onClick={() => setActiveProject(null)}
                                    className="absolute cursor-pointer top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                                >
                                    <X size={20} />
                                </button>

                                <img
                                    src={activeProject.image}
                                    alt={activeProject.title}
                                    className="w-full h-100 object-cover"
                                />

                                <div className="p-8">
                                    <h2 className="text-3xl font-bold">
                                        {activeProject.title}
                                    </h2>
                                    <p className="text-gray-600 mt-4">
                                        {activeProject.description}
                                    </p>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-3 mt-6">
                                        {activeProject.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
}
