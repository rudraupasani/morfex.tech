"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What types of projects do you take on?",
    a: "We work on web applications, SaaS platforms, AI integrations, mobile apps, e-commerce stores, and marketing sites. We're selective — we take on projects where we can add real value, not just ship code.",
  },
  {
    q: "How long does a typical project take?",
    a: "It depends on scope. A marketing site might take 2–3 weeks. A full SaaS product can take 8–12 weeks. We always define a clear timeline in discovery before any work begins.",
  },
  {
    q: "Do you work with startups or only established businesses?",
    a: "Both. We've worked with early-stage founders building their first product and with established businesses modernising legacy systems. The engagement adapts to where you are.",
  },
  {
    q: "What's your development process?",
    a: "We start with a discovery session to understand your goals and constraints. Then we move into design, development, testing, and deployment — with clear checkpoints and your input throughout.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Yes. We audit existing codebases regularly and take over maintenance or feature development when asked. We'll give you an honest assessment of what we find.",
  },
  {
    q: "How do we communicate during the project?",
    a: "We keep communication async-first via Slack or email with weekly sync calls. You'll always know where the project stands. No surprises.",
  },
  {
    q: "What does it cost?",
    a: "Pricing is project-based or a monthly retainer depending on the engagement. We'll give you a clear quote after a short discovery call. No hidden fees, no hourly billing anxiety.",
  },
];

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className="border-b"
      style={{ borderColor: "var(--line)" }}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="group relative flex w-full items-start gap-5 py-5 text-left md:gap-8"
        aria-expanded={open}
      >
        {/* Left accent bar */}
        <span
          className="absolute inset-y-0 left-0 w-px origin-top transition-transform duration-[560ms]"
          style={{
            background: "var(--fg)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
            transform: open ? "scaleY(1)" : "scaleY(0)",
          }}
          aria-hidden="true"
        />

        {/* Index */}
        <span
          className="mt-[0.3rem] shrink-0 transition-[padding] duration-500"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            color: "var(--faint)",
            paddingLeft: open ? "1rem" : "0",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Question */}
        <span
          className="flex-1 font-medium leading-snug tracking-[-0.02em]"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)", color: "var(--fg)" }}
        >
          {item.q}
        </span>

        {/* Plus / minus */}
        <span
          className="relative mt-1 block h-4 w-4 shrink-0"
          aria-hidden="true"
          style={{ color: "var(--muted)" }}
        >
          <span
            className="absolute inset-y-[7px] left-0 right-0 h-[1.5px] bg-current transition-opacity duration-300"
            style={{ opacity: 1 }}
          />
          <span
            className="absolute inset-x-[7px] top-0 bottom-0 w-[1.5px] bg-current transition-all duration-300"
            style={{
              transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
              transform: open ? "scaleY(0)" : "scaleY(1)",
            }}
          />
        </span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-6 text-sm leading-relaxed"
              style={{ color: "var(--muted)", paddingLeft: "calc(0.6875rem + 2.5rem)" }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

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

export default function QuestionsPage() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t"
      style={{ borderColor: "var(--line)" }}
      id="faq"
    >
      <div className="shell">
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-x-8 mb-12" ref={headRef}>
          <div className="md:col-span-2">
            <p className="eyebrow">05 — FAQ</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="h1" style={{ color: "var(--fg)" }}>
              <CurtainReveal delay={0}>Questions we get</CurtainReveal>
              <CurtainReveal delay={0.15}>asked a lot.</CurtainReveal>
            </h2>
            <motion.p
              className="lede mt-5 max-w-[50ch]"
              initial={{ opacity: 0, y: 12 }}
              animate={headInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              If your question isn't here, just send us a message — we reply
              within 24 hours.
            </motion.p>
          </div>
        </div>

        {/* FAQ list */}
        <div className="border-t" style={{ borderColor: "var(--line)" }}>
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
