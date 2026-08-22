"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Curtain reveal: white mask slides away revealing text ── */
function CurtainReveal({ children, delay = 0 }) {
  return (
    <span className="relative block overflow-hidden pb-[0.06em]">
      <span className="block">{children}</span>
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 block"
        style={{ background: "var(--bg)", transformOrigin: "right center" }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        <span
          className="absolute inset-y-0 right-0 w-px"
          style={{ background: "var(--fg)" }}
        />
      </motion.span>
    </span>
  );
}

/* ── Letter-by-letter drop-in for badge text ── */
function LetterDrop({ text, delay = 0 }) {
  return (
    <span className="inline-flex overflow-hidden" aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className="inline-block whitespace-pre"
          initial={{ opacity: 0, y: "-110%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + i * 0.022,
            duration: 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

/* ── Flip text for buttons ── */
function FlipText({ text }) {
  return (
    <span className="relative block overflow-hidden">
      <span
        className="block transition-transform duration-[520ms]"
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        {text}
      </span>
    </span>
  );
}

/* ── Stats row at the bottom of the hero ── */
const stats = [
  { label: "Projects delivered", value: "8+" },
  { label: "Typical build", value: "1 – 6 wks" },
  { label: "First reply", value: "Within 24 hrs" },
  { label: "Engagements", value: "Project / Retained" },
];

export default function HeroSection() {
  return (
    <section className="page-head" id="top">
      <div className="shell">
        {/* ── Top status bar ── */}
        <div
          className="flex flex-wrap items-center justify-between gap-4 border-b pb-4"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="flex items-center gap-3"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--muted)",
            }}
          >
            <span
              aria-hidden="true"
              className="block h-[5px] w-[5px] shrink-0"
              style={{ background: "var(--fg)" }}
            />
            <LetterDrop text="Available for select projects" delay={0.35} />
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.6875rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--faint)",
            }}
          >
            Nadiad, Gujarat — India
          </motion.p>
        </div>

        {/* ── Main grid ── */}
        <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-x-8">
          {/* Left: heading + CTA */}
          <div className="md:col-span-8">
            <h1 className="display" style={{ color: "var(--fg)" }}>
              <CurtainReveal delay={0.2}>Building software</CurtainReveal>
              <CurtainReveal delay={0.36}>businesses actually</CurtainReveal>
              <CurtainReveal delay={0.52}>enjoy using.</CurtainReveal>
            </h1>

            <motion.p
              className="lede mt-7 max-w-[50ch]"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Morfex Technologies is a software studio in Nadiad, India. We design
              and engineer web applications, SaaS platforms, and AI-powered
              tools  the kind that stay fast, stay clear, and scale with your
              business three years from now.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-3 overflow-hidden px-5 text-[0.875rem] font-medium"
                style={{ background: "var(--inverse)", color: "var(--inverse-fg)" }}
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    Start a project
                  </span>
                  <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    Start a project
                  </span>
                </span>
                {/* Arrow icon */}
                <span aria-hidden="true" className="relative block h-[7px] w-[7px] shrink-0 overflow-hidden">
                  <span className="absolute inset-0 border border-current transition-transform duration-[520ms] group-hover:translate-x-[8px] group-hover:-translate-y-[8px]" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
                  <span className="absolute inset-0 -translate-x-[8px] translate-y-[8px] border border-current transition-transform duration-[520ms] group-hover:translate-x-0 group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }} />
                </span>
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/work"
                className="group inline-flex h-11 items-center gap-3 overflow-hidden border px-5 text-[0.875rem] font-medium transition-colors duration-300"
                style={{ borderColor: "var(--line-strong)", color: "var(--fg)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--fg)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--line-strong)")}
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    See our work
                  </span>
                  <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    See our work
                  </span>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: decorative grid SVG */}
          <div className="hidden md:block md:col-span-4">
            <motion.div
              className="border"
              style={{ borderColor: "var(--line)" }}
              initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
              transition={{ delay: 0.55, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="aspect-[248/240] w-full"
                style={{ color: "var(--line-strong)" }}
                aria-hidden="true"
              >
                <svg viewBox="0 0 248 240" className="h-full w-full" fill="none">
                  {/* Grid lines — vertical */}
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240].map((x) => (
                    <line key={`v${x}`} x1={x} y1="0" x2={x} y2="240" stroke="var(--line)" strokeWidth="0.5" />
                  ))}
                  {/* Grid lines — horizontal */}
                  {[20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220].map((y) => (
                    <line key={`h${y}`} x1="0" y1={y} x2="248" y2={y} stroke="var(--line)" strokeWidth="0.5" />
                  ))}
                  {/* Rect blocks */}
                  {[
                    { x: 24, y: 96, w: 60, h: 34 },
                    { x: 104, y: 60, w: 84, h: 34 },
                    { x: 104, y: 114, w: 40, h: 58 },
                    { x: 164, y: 114, w: 60, h: 26 },
                    { x: 24, y: 150, w: 60, h: 46 },
                    { x: 164, y: 158, w: 60, h: 38 },
                  ].map((r, i) => (
                    <motion.rect
                      key={i}
                      x={r.x} y={r.y} width={r.w} height={r.h}
                      fill="var(--surface)"
                      stroke="var(--line-strong)"
                      strokeWidth="1"
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 1 }}
                      transition={{ delay: 0.8 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{ transformOrigin: `${r.x + r.w / 2}px ${r.y + r.h / 2}px` }}
                    />
                  ))}
                  {/* Main path */}
                  <motion.path
                    d="M 24 214 L 24 96 L 84 96 L 84 60 L 188 60 L 188 114 L 224 114 L 224 196 L 104 196 L 104 172"
                    stroke="var(--fg)"
                    strokeWidth="1.4"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.0, duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* End dots */}
                  <rect x="21" y="211" width="6" height="6" fill="var(--fg)" />
                  <rect x="101" y="169" width="6" height="6" fill="var(--fg)" />
                </svg>
              </div>
              <div
                className="flex items-center justify-between gap-4 border-t px-4 py-3"
                style={{ borderColor: "var(--line)" }}
              >
                <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                  System architected before it is built.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-geist-mono)",
                    fontSize: "0.625rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    color: "var(--faint)",
                  }}
                >
                  Fig. 00
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Stats cells ── */}
        <dl
          className="cells mt-12 border-b"
          style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="px-4 py-5"
              style={{
                borderRight:
                  i % 2 === 0
                    ? "1px solid var(--line)"
                    : i < stats.length - 2
                      ? "1px solid var(--line)"
                      : "none",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 1.15 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
                duration: 0.5,
              }}
            >
              <dt className="eyebrow">{stat.label}</dt>
              <dd
                className="mt-2 text-[0.875rem] tracking-[-0.012em]"
                style={{ color: "var(--fg)" }}
              >
                {stat.value}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
