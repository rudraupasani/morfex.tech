"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

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

export default function CTASection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t"
      style={{ borderColor: "var(--line)" }}
      id="cta"
    >
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-12 md:gap-x-8">
          {/* Left label */}
          <div className="md:col-span-2">
            <p className="eyebrow">06 — Start a project</p>
          </div>

          {/* Centre content */}
          <div className="md:col-span-8" ref={ref}>
            <h2
              className="display"
              style={{ color: "var(--fg)" }}
            >
              <CurtainReveal delay={0}>Have a project in mind?</CurtainReveal>
              <CurtainReveal delay={0.18}>Let's build it together.</CurtainReveal>
            </h2>

            <motion.p
              className="lede mt-7 max-w-[48ch]"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              We're selective about the projects we take on — which means if we're
              talking, we're already interested. Tell us what you're building.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center gap-3 overflow-hidden px-6 text-[0.9375rem] font-medium"
                style={{ background: "var(--inverse)", color: "var(--inverse-fg)" }}
              >
                <span className="relative block overflow-hidden">
                  <span
                    className="block transition-transform duration-[520ms] group-hover:-translate-y-full"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    Get in touch
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    Get in touch
                  </span>
                </span>
                <span aria-hidden="true" className="relative block h-[7px] w-[7px] shrink-0 overflow-hidden">
                  <span
                    className="absolute inset-0 border border-current transition-transform duration-[520ms] group-hover:translate-x-[8px] group-hover:-translate-y-[8px]"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  />
                  <span
                    className="absolute inset-0 -translate-x-[8px] translate-y-[8px] border border-current transition-transform duration-[520ms] group-hover:translate-x-0 group-hover:translate-y-0"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  />
                </span>
              </Link>

              {/* Email link */}
              <a
                href="mailto:morfextech@gmail.com"
                className="group inline-flex h-12 items-center gap-3 border px-6 text-[0.9375rem] font-medium transition-colors duration-300"
                style={{ borderColor: "var(--line-strong)", color: "var(--fg)" }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--fg)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--line-strong)")}
              >
                <span className="relative block overflow-hidden">
                  <span
                    className="block transition-transform duration-[520ms] group-hover:-translate-y-full"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    morfextech@gmail.com
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    morfextech@gmail.com
                  </span>
                </span>
              </a>
            </motion.div>

            {/* Response time note */}
            <motion.p
              className="mt-5 flex items-center gap-2 text-sm"
              style={{ color: "var(--faint)" }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
            >
              <span className="block h-[5px] w-[5px] rounded-full bg-emerald-500" aria-hidden="true" />
              We reply within 24 hours.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
