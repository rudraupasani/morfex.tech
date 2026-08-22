"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const values = [
  {
    number: "01",
    title: "Precision over speed",
    desc: "We take the time to understand your problem before writing a single line of code. Good software comes from good thinking.",
  },
  {
    number: "02",
    title: "Built to last",
    desc: "We write code that your future team can read, extend and maintain. No shortcuts that create debt three months later.",
  },
  {
    number: "03",
    title: "Performance is a feature",
    desc: "Every millisecond matters. We profile, measure and optimise until the interface answers immediately.",
  },
  {
    number: "04",
    title: "Design and engineering together",
    desc: "Our interfaces are grounded in engineering reality. We don't hand off mockups — we build what we design.",
  },
  {
    number: "05",
    title: "Honest, direct communication",
    desc: "We tell you what's realistic, what's risky, and what we'd do if it were our own product. No fluff.",
  },
  {
    number: "06",
    title: "One team, full ownership",
    desc: "You work with the people building your product — not account managers passing notes to engineers.",
  },
];

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

function ValueCard({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="border-t pt-6 pb-6"
      style={{ borderColor: "var(--line)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <span
        className="block mb-4"
        style={{
          fontFamily: "var(--font-geist-mono)",
          fontSize: "0.6875rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "var(--faint)",
        }}
      >
        {item.number}
      </span>
      <h3
        className="font-medium leading-snug tracking-[-0.025em] mb-3"
        style={{ fontSize: "1.0625rem", color: "var(--fg)" }}
      >
        {item.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
        {item.desc}
      </p>
    </motion.div>
  );
}

export default function BenefitsPage() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t"
      style={{ borderColor: "var(--line)" }}
      id="approach"
    >
      <div className="shell">
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-x-8 mb-14" ref={headRef}>
          <div className="md:col-span-2">
            <p className="eyebrow">03 — Our Approach</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="h1" style={{ color: "var(--fg)" }}>
              <CurtainReveal delay={0}>The principles behind</CurtainReveal>
              <CurtainReveal delay={0.15}>how we build.</CurtainReveal>
            </h2>
            <motion.p
              className="lede mt-5 max-w-[52ch]"
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              We don't believe in feature factories. We believe in understanding the
              problem deeply, then solving it with minimal, precise software.
            </motion.p>
          </div>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((item, i) => (
            <ValueCard key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}