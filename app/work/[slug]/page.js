"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";

export default function ProjectPage({ params }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Navbar />

            <section className="bg-white min-h-screen py-28">
                <div className="max-w-5xl mx-auto px-6">

                    {/* BACK BUTTON */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-12"
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition"
                        >
                            ← Back to Work
                        </Link>
                    </motion.div>

                    {/* PROJECT HERO */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* IMAGE */}
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-14">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                            />
                        </div>

                        {/* TITLE */}
                        <h1 className="text-5xl font-bold mb-5">{project.title}</h1>

                        {/* TECH TAGS */}
                        <div className="flex flex-wrap gap-3 mb-8">
                            {project.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* TIME */}
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                            <span className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                    />
                                </svg>
                                Delivered in : {project.Time}
                            </span>
                        </div>

                        {/* DIVIDER */}
                        <div className="border-t my-8" />

                        {/* DESCRIPTION */}
                        <p className="text-gray-500 text-lg leading-relaxed mb-4">
                            {project.description}
                        </p>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            {project.longDescription}
                        </p>

                        {/* DIVIDER */}
                        <div className="border-t my-10" />

                        {/* LIVE LINK */}
                        <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-2xl text-lg font-medium hover:bg-blue-700 transition"
                        >
                            View Live Demo →
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
