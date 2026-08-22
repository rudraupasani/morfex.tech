"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const stats = [
  { label: "Projects delivered", value: "25+" },
  { label: "Happy clients", value: "20+" },
  { label: "Years active", value: "2+" },
  { label: "Technologies", value: "15+" },
];

const team = [
  {
    name: "Rudra Upasani",
    role: "Founder & Lead Engineer",
    initials: "RU",
    bio: "Full-stack engineer with a focus on React, Next.js and scalable backend systems. Passionate about building software that works beautifully.",
  },
];

const timeline = [
  { year: "2022", event: "Morfex Technologies founded in Nadiad, Gujarat." },
  { year: "2023", event: "First 5 client projects delivered — web apps & landing pages." },
  { year: "2024", event: "Expanded into SaaS, mobile development and AI integrations." },
  { year: "2025", event: "Delivered 20+ projects across industries. Studio now fully operational." },
  { year: "2026", event: "Growing team, taking on bigger and more complex engagements." },
];

export default function AboutPage() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <>
      <Navbar />
      <main id="main" style={{ background: "var(--bg)" }}>

        {/* ── Page head ── */}
        <section className="page-head border-b" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--line)" }}>
              <p className="eyebrow">About Morfex</p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                Est. 2022 — Nadiad, India
              </p>
            </div>
            <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-8">
                <h1 className="display" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0.2}>A software studio</CurtainReveal>
                  <CurtainReveal delay={0.36}>that cares about</CurtainReveal>
                  <CurtainReveal delay={0.52}>what it ships.</CurtainReveal>
                </h1>
                <motion.p
                  className="lede mt-7 max-w-[50ch]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95, ease: [0.16, 1, 0.3, 1] }}
                >
                  Morfex Technologies was founded on a simple belief: software should
                  be precise, fast, and a pleasure to use. We're a small, focused
                  team that takes on a limited number of projects so each one gets
                  the attention it deserves.
                </motion.p>
              </div>
            </div>

            {/* Stats */}
            <dl
              className="cells mt-12 border-b"
              style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
              ref={statsRef}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="px-4 py-5"
                  style={{
                    borderRight: i % 2 === 0 ? "1px solid var(--line)" : (i < stats.length - 2 ? "1px solid var(--line)" : "none"),
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 1.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <dt className="eyebrow">{s.label}</dt>
                  <dd className="mt-2 text-[0.875rem] tracking-[-0.012em]" style={{ color: "var(--fg)" }}>
                    {s.value}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Who we are ── */}
        <section className="section border-t" style={{ borderColor: "var(--line)" }} id="who">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-2">
                <p className="eyebrow">Who we are</p>
              </div>
              <div className="md:col-span-7">
                <h2 className="h1" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0}>Built around craft,</CurtainReveal>
                  <CurtainReveal delay={0.15}>not headcount.</CurtainReveal>
                </h2>
                <div className="mt-7 space-y-4 max-w-[55ch]">
                  {[
                    "We started Morfex because we were tired of seeing projects handed off between account managers, designers, and overseas teams — with quality dropping at every handoff.",
                    "So we built a studio where the engineers are the people you talk to, and the product you get reflects the care that went into building it.",
                    "We work with a small number of clients at any given time, which means you get genuine attention and not just a slot in a production queue.",
                  ].map((p, i) => (
                    <motion.p
                      key={i}
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {p}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Team ── */}
        <section className="section border-t" style={{ borderColor: "var(--line)" }} id="team">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:gap-x-8 mb-12">
              <div className="md:col-span-2">
                <p className="eyebrow">The team</p>
              </div>
              <div className="md:col-span-7">
                <h2 className="h1" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0}>People behind</CurtainReveal>
                  <CurtainReveal delay={0.15}>the work.</CurtainReveal>
                </h2>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {team.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="border p-6"
                  style={{ borderColor: "var(--line)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center mb-5 text-sm font-medium"
                    style={{
                      background: "var(--fg)",
                      color: "var(--bg)",
                      fontFamily: "var(--font-geist-mono)",
                    }}
                  >
                    {member.initials}
                  </div>
                  <p className="font-medium mb-1" style={{ color: "var(--fg)" }}>{member.name}</p>
                  <p
                    className="mb-4"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.625rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: "var(--faint)",
                    }}
                  >
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ── */}
        <section className="section border-t" style={{ borderColor: "var(--line)" }} id="history">
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:gap-x-8 mb-12">
              <div className="md:col-span-2">
                <p className="eyebrow">Timeline</p>
              </div>
              <div className="md:col-span-7">
                <h2 className="h1" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0}>How we got here.</CurtainReveal>
                </h2>
              </div>
            </div>
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className="flex items-start gap-8 border-b py-6"
                  style={{ borderColor: "var(--line)" }}
                  initial={{ opacity: 0, x: -14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span
                    className="shrink-0 w-16"
                    style={{
                      fontFamily: "var(--font-geist-mono)",
                      fontSize: "0.6875rem",
                      letterSpacing: "0.08em",
                      color: "var(--faint)",
                      paddingTop: "0.3rem",
                    }}
                  >
                    {item.year}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {item.event}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section border-t" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-2" />
              <div className="md:col-span-7">
                <h2 className="h1" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0}>Ready to start</CurtainReveal>
                  <CurtainReveal delay={0.15}>something new?</CurtainReveal>
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
                      <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                        Get in touch
                      </span>
                      <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                        Get in touch
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
                    See our work
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
