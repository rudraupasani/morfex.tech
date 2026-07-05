"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";

/* ================= ANIMATION VARIANTS ================= */

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
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

/* ================= COMPONENT ================= */

export default function OurWorkPage() {
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
                            Projects We&apos;ve Delivered
                        </h1>

                        <p className="text-gray-600 mt-4">
                            Real products crafted with performance &amp; scalability.
                        </p>
                    </motion.div>

                    {/* ================= PROJECT LIST ================= */}
                    <motion.div
                        variants={containerVariants}
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        className="space-y-16"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.slug}
                                variants={cardVariants}
                                className="rounded-3xl p-8 shadow-sm"
                            >
                                {/* ROW */}
                                <div className="grid md:grid-cols-2 gap-14 items-center">

                                    {/* IMAGE */}
                                    <motion.img
                                        src={project.image}
                                        alt={project.title}
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

                                        {/* BUTTON — navigates to /work/[slug] */}
                                        <Link href={`/work/${project.slug}`}>
                                            <motion.button
                                                whileHover={{ scale: 1.04 }}
                                                whileTap={{ scale: 0.97 }}
                                                className="mt-4 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition cursor-pointer"
                                            >
                                                View Project →
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    );
}
