"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import projects from "@/data/projects.json";

export default function ProjectsShowcase() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Show 1 project initially, 3 when expanded
  const displayedProjects = isExpanded ? projects.slice(0, 3) : projects.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcase of our best work and successful client projects
          </p>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/work/${project.slug}`} className="block group cursor-pointer">
                {/* IMAGE CONTAINER */}
                <div className="relative overflow-hidden rounded-xl shadow-md mb-6 bg-gray-100">
                  <div className="relative w-full h-64 md:h-72">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-fit w-full h-full"
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* CONTENT SECTION */}
                <div className="px-1">
                  {/* CATEGORY & STATUS */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-500">{project.year}</span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* LEARN MORE LINK */}
                  <div className="mt-6 flex items-center text-blue-600 font-semibold text-sm">
                    <span>View Project</span>
                    <span className="ml-2">→</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* VIEW MORE BUTTON */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 hover:bg-blue-700"
          >
            {isExpanded ? "Show Less Projects" : "View All Projects"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
