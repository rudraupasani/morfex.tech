"use client";

import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import Image from "next/image";
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

          {/* BACK */}
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

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-xl mb-14">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={700}
                className="w-full object-cover"
              />
            </div>

            {/* TITLE */}
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>

            {/* META INFO */}
            <div className="flex flex-wrap gap-6 text-sm text-gray-500 mb-8">
              <span>Category: {project.category}</span>
              <span>Year: {project.year}</span>
              <span>Role: {project.role}</span>
              <span>Status: {project.status}</span>
            </div>

            {/* TECH */}
            <div className="flex flex-wrap gap-3 mb-10">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* TIME */}
            <div className="text-sm text-gray-500 mb-10">
              Delivered in: {project.Time}
            </div>

            <div className="border-t my-8" />

            {/* DESCRIPTION */}
            <p className="text-gray-500 text-lg leading-relaxed mb-4">
              {project.description}
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-12">
              {project.longDescription}
            </p>

            {/* FEATURES */}
            {project.features && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Key Features</h2>

                <div className="grid md:grid-cols-2 gap-4 mb-12">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="p-4 border rounded-xl bg-gray-50"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </>
            )}

 
            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">

            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}