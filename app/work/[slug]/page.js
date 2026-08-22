"use client";

import { notFound } from "next/navigation";
import { use, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import projects from "@/data/projects.json";

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

export default function ProjectPage({ params }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main id="main" style={{ background: "var(--bg)" }}>

        {/* ── Page head ── */}
        <section className="page-head border-b" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div
              className="flex flex-wrap items-center justify-between gap-4 border-b pb-4"
              style={{ borderColor: "var(--line)" }}
            >
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 eyebrow transition-colors duration-300"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <span aria-hidden="true" className="h-px w-4 bg-current" />
                Back to work
              </Link>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                {project.year}
              </p>
            </div>

            <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-8">
                {/* Category + status */}
                <div className="flex items-center gap-3 mb-5">
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

                <h1 className="display" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0.2}>{project.title}</CurtainReveal>
                </h1>
                <motion.p
                  className="lede mt-7 max-w-[50ch]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {project.description}
                </motion.p>
              </div>

              {/* Right: meta */}
              <div className="md:col-span-4">
                <motion.div
                  className="border p-6 flex flex-col gap-6"
                  style={{ borderColor: "var(--line)" }}
                  initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
                  animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
                  transition={{ delay: 0.55, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
                >
                  {[
                    { label: "Role", value: project.role },
                    { label: "Delivered in", value: project.Time },
                  ].map(({ label, value }) =>
                    value ? (
                      <div key={label}>
                        <p
                          className="mb-1"
                          style={{
                            fontFamily: "var(--font-geist-mono)",
                            fontSize: "0.625rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.14em",
                            color: "var(--faint)",
                          }}
                        >
                          {label}
                        </p>
                        <p className="text-sm" style={{ color: "var(--muted)" }}>
                          {value}
                        </p>
                      </div>
                    ) : null
                  )}

                  {/* Metrics */}
                  {project.metrics && Object.keys(project.metrics).length > 0 && (
                    <div>
                      <p
                        className="mb-3"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.625rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: "var(--faint)",
                        }}
                      >
                        Results
                      </p>
                      <div className="flex flex-col gap-2">
                        {Object.entries(project.metrics).map(([key, val]) => (
                          <div key={key} className="flex items-baseline justify-between">
                            <p
                              className="text-[0.6rem] uppercase tracking-widest"
                              style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
                            >
                              {key}
                            </p>
                            <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                              {val}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Tech stack row */}
            <motion.dl
              className="cells mt-10 border-b"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="px-4 py-4" style={{ borderRight: "1px solid var(--line)" }}>
                <dt className="eyebrow mb-2">Tech stack</dt>
                <dd className="flex flex-wrap gap-1.5 mt-2">
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
                </dd>
              </div>
              <div className="px-4 py-4">
                <dt className="eyebrow mb-2">Category</dt>
                <dd className="text-[0.875rem] mt-2" style={{ color: "var(--fg)" }}>
                  {project.category}
                </dd>
              </div>
            </motion.dl>
          </div>
        </section>

        {/* ── Project image ── */}
        <section className="section border-b" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <motion.div
              className="overflow-hidden border"
              style={{ borderColor: "var(--line)" }}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
                style={{ aspectRatio: "16/9" }}
              />
            </motion.div>
          </div>
        </section>

        {/* ── Long description ── */}
        {project.longDescription && (
          <section className="section border-b" style={{ borderColor: "var(--line)" }}>
            <div className="shell">
              <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
                <div className="md:col-span-2">
                  <p className="eyebrow">Overview</p>
                </div>
                <div className="md:col-span-7">
                  <motion.p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--muted)", fontSize: "1.0625rem", lineHeight: "1.75" }}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ease: [0.16, 1, 0.3, 1] }}
                  >
                    {project.longDescription}
                  </motion.p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Features ── */}
        {project.features && project.features.length > 0 && (
          <section className="section border-b" style={{ borderColor: "var(--line)" }}>
            <div className="shell">
              <div className="grid gap-10 md:grid-cols-12 md:gap-x-8 mb-12">
                <div className="md:col-span-2">
                  <p className="eyebrow">Features</p>
                </div>
                <div className="md:col-span-7">
                  <h2 className="h1" style={{ color: "var(--fg)" }}>
                    <CurtainReveal delay={0}>Key capabilities.</CurtainReveal>
                  </h2>
                </div>
              </div>
              <div className="border-t" style={{ borderColor: "var(--line)" }}>
                {project.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-8 border-b py-5"
                    style={{ borderColor: "var(--line)" }}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span
                      className="shrink-0 w-8"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.6875rem",
                        letterSpacing: "0.08em",
                        color: "var(--faint)",
                        paddingTop: "0.2rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Navigation CTA ── */}
        <section className="section" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-2" />
              <div className="md:col-span-7">
                <h2 className="h1" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0}>Like what you see?</CurtainReveal>
                </h2>
                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href="/contact"
                    className="group inline-flex h-11 items-center gap-3 overflow-hidden px-5 text-[0.875rem] font-medium"
                    style={{ background: "var(--inverse)", color: "var(--inverse-fg)" }}
                  >
                    <span className="relative block overflow-hidden">
                      <span
                        className="block transition-transform duration-[520ms] group-hover:-translate-y-full"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      >
                        Start a project
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      >
                        Start a project
                      </span>
                    </span>
                  </Link>
                  <Link
                    href="/work"
                    className="group inline-flex h-11 items-center gap-3 border px-5 text-[0.875rem] font-medium transition-colors duration-300"
                    style={{ borderColor: "var(--line-strong)", color: "var(--fg)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line-strong)")}
                  >
                    All projects
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}