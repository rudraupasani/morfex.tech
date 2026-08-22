"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import projects from "@/data/projects.json";

/* ── Curtain reveal ── */
function CurtainReveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <span className="relative block overflow-hidden pb-[0.06em]" ref={ref}>
      <span className="block">{children}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 block"
        style={{ background: "var(--bg)", transformOrigin: "right center" }}
        initial={{ scaleX: 1 }}
        animate={inView ? { scaleX: 0 } : { scaleX: 1 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="absolute inset-y-0 right-0 w-px" style={{ background: "var(--fg)" }} />
      </motion.span>
    </span>
  );
}

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="group block border transition-colors duration-500"
        style={{ borderColor: "var(--line)" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--line-strong)")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line)")}
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-[16/9]" style={{ background: "var(--surface)" }}>
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          />
          {/* Overlay on hover */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100 flex items-end p-5"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)" }}
          >
            <span
              className="text-xs font-medium uppercase tracking-widest text-white/80"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              View project →
            </span>
          </div>
          {/* Status badge */}
          <div className="absolute top-4 right-4">
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.625rem] uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-geist-mono)",
                background: "var(--bg)",
                color: "var(--fg)",
                border: "1px solid var(--line)",
              }}
            >
              <span className="block h-[5px] w-[5px] rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-5 border-t" style={{ borderColor: "var(--line)" }}>
          {/* Meta row */}
          <div className="flex items-center justify-between gap-4 mb-3">
            <span
              className="text-[0.625rem] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
            >
              {project.category}
            </span>
            <span
              className="text-[0.625rem] uppercase tracking-widest"
              style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
            >
              {project.year}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-medium leading-tight tracking-[-0.025em] mb-2"
            style={{ fontSize: "1.0625rem", color: "var(--fg)" }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[0.6875rem] border"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-geist-mono)",
                  letterSpacing: "0.03em",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics footer */}
        <div
          className="grid grid-cols-3 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          {Object.entries(project.metrics)
            .slice(0, 3)
            .map(([key, val]) => (
              <div
                key={key}
                className="px-4 py-3 border-r last:border-r-0"
                style={{ borderColor: "var(--line)" }}
              >
                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-0.5"
                  style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
                >
                  {key}
                </p>
                <p className="text-xs font-medium" style={{ color: "var(--fg)" }}>
                  {val}
                </p>
              </div>
            ))}
        </div>
      </Link>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t"
      style={{ borderColor: "var(--line)" }}
      id="work"
    >
      <div className="shell">
        {/* Section header */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-x-8 mb-12" ref={headRef}>
          <div className="md:col-span-2">
            <p className="eyebrow">02 — Selected Work</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="h1" style={{ color: "var(--fg)" }}>
              <CurtainReveal delay={0}>Projects we are proud to</CurtainReveal>
              <CurtainReveal delay={0.15}>put our name on.</CurtainReveal>
            </h2>
          </div>
          <div className="flex items-end md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-3 text-[0.875rem]"
                style={{ color: "var(--fg)" }}
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    All projects
                  </span>
                  <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    All projects
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="h-px w-8 origin-left transition-transform duration-500 group-hover:scale-x-150"
                  style={{ background: "var(--fg)", transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
