"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

const products = [
  {
    name: "Cluezy",
    desc: "An AI-powered productivity platform that helps users discover insights, automate workflows, and make smarter decisions faster.",
    tag: "AI SaaS",
    status: "Live",
    link: "https://www.cluezy.site",
    number: "01",
  },
];

export default function ProductsPage() {
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
              <p className="eyebrow">Morfex Products</p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                {products.length} product{products.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-8">
                <h1 className="display" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0.2}>Software we built</CurtainReveal>
                  <CurtainReveal delay={0.36}>for ourselves.</CurtainReveal>
                </h1>
                <motion.p
                  className="lede mt-7 max-w-[50ch]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  Beyond client work, we build our own SaaS products and intelligent platforms that
                  help startups grow faster and operate smarter.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Products grid ── */}
        <section className="section">
          <div className="shell">
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {products.map((product, i) => (
                <motion.div
                  key={product.number}
                  className="grid gap-8 border-b py-12 md:grid-cols-12 md:gap-x-8"
                  style={{ borderColor: "var(--line)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.6875rem",
                        letterSpacing: "0.12em",
                        color: "var(--faint)",
                      }}
                    >
                      {product.number}
                    </span>
                  </div>

                  {/* Name + tag */}
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="text-[0.625rem] uppercase tracking-widest px-2 py-0.5 border inline-flex items-center gap-1.5"
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          borderColor: "var(--line)",
                          color: "var(--faint)",
                        }}
                      >
                        <span className="block h-[4px] w-[4px] rounded-full bg-emerald-500" />
                        {product.status}
                      </span>
                    </div>
                    <h2
                      className="font-medium leading-snug tracking-[-0.022em]"
                      style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", color: "var(--fg)" }}
                    >
                      {product.name}
                    </h2>
                    <p
                      className="mt-1"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--faint)",
                      }}
                    >
                      {product.tag}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {product.desc}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="md:col-span-3 flex items-start">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-sm"
                      style={{ color: "var(--fg)" }}
                    >
                      <span className="relative block overflow-hidden">
                        <span
                          className="block transition-transform duration-[520ms] group-hover:-translate-y-full"
                          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                        >
                          Visit {product.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0"
                          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                        >
                          Visit {product.name}
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-px w-6 origin-left bg-current transition-transform duration-500 group-hover:scale-x-150"
                        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                      />
                    </a>
                  </div>
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
                  <CurtainReveal delay={0}>Have an idea</CurtainReveal>
                  <CurtainReveal delay={0.15}>worth building?</CurtainReveal>
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