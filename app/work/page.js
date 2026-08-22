"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

function ProjectRow({ project, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-b py-10 md:py-14"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="grid gap-8 md:grid-cols-12 md:gap-x-8">
        {/* Meta column */}
        <div className="md:col-span-1 flex md:flex-col gap-3 md:gap-6">
          <span
            className="block"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.6875rem",
              letterSpacing: "0.12em",
              color: "var(--faint)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--faint)",
            }}
          >
            {project.year}
          </span>
        </div>

        {/* Image */}
        <div className="md:col-span-5">
          <Link href={`/work/${project.slug}`} className="group block">
            <div
              className="overflow-hidden border"
              style={{ borderColor: "var(--line)" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              />
            </div>
          </Link>
        </div>

        {/* Content */}
        <div className="md:col-span-6 flex flex-col justify-center gap-5">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-[0.625rem] uppercase tracking-widest"
                style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
              >
                {project.category}
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-[0.625rem] uppercase tracking-widest px-2 py-0.5 border"
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  borderColor: "var(--line)",
                  color: "var(--faint)",
                }}
              >
                <span className="block h-[4px] w-[4px] rounded-full bg-emerald-500" />
                {project.status}
              </span>
            </div>
            <h2
              className="font-medium leading-tight tracking-[-0.028em] mb-3"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--fg)" }}
            >
              {project.title}
            </h2>
            <p className="text-sm leading-relaxed max-w-[44ch]" style={{ color: "var(--muted)" }}>
              {project.description}
            </p>
          </div>

          {/* Tech */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 text-[0.6875rem] border"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--muted)",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6">
            {Object.entries(project.metrics).map(([key, val]) => (
              <div key={key}>
                <p
                  className="text-[0.6rem] uppercase tracking-widest mb-0.5"
                  style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
                >
                  {key}
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>{val}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-3 text-sm self-start"
            style={{ color: "var(--fg)" }}
          >
            <span className="relative block overflow-hidden">
              <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                View project
              </span>
              <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                View project
              </span>
            </span>
            <span aria-hidden="true" className="h-px w-6 origin-left bg-current transition-transform duration-500 group-hover:scale-x-150" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function OurWorkPage() {
  return (
    <>
      <Navbar />
      <main id="main" style={{ background: "var(--bg)" }}>
        {/* Page head */}
        <section className="page-head border-b" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--line)" }}>
              <p className="eyebrow">Selected work</p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                {projects.length} projects
              </p>
            </div>
            <div className="pt-10">
              <h1 className="display" style={{ color: "var(--fg)" }}>
                <CurtainReveal delay={0.2}>Projects we are</CurtainReveal>
                <CurtainReveal delay={0.36}>proud to put our name on.</CurtainReveal>
              </h1>
              <motion.p
                className="lede mt-6 max-w-[48ch]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                A curated selection of work across web apps, SaaS platforms, mobile
                applications, and marketing sites.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Projects list */}
        <section className="section">
          <div className="shell">
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {projects.map((project, i) => (
                <ProjectRow key={project.slug} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
