"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Web Development",
    desc: "Product-grade applications on Next.js, React and a considered data layer.",
    timeline: "2 – 8 weeks",
    href: "/services",
  },
  {
    title: "SaaS Development",
    desc: "Scalable SaaS platforms with auth, billing, dashboards and admin panels.",
    timeline: "4 – 12 weeks",
    href: "/services",
  },
  {
    title: "Mobile App Development",
    desc: "Cross-platform Android & iOS apps with smooth UX and native feel.",
    timeline: "4 – 10 weeks",
    href: "/services",
  },
  {
    title: "AI Integration",
    desc: "AI-powered features and automation built into your existing product.",
    timeline: "1 – 4 weeks",
    href: "/services",
  },
  {
    title: "UI/UX Design",
    desc: "Interface design grounded in engineering reality, not decoration.",
    timeline: "1 – 3 weeks",
    href: "/services",
  },
  {
    title: "E-commerce Solutions",
    desc: "Custom storefronts with seamless checkout, inventory and CMS.",
    timeline: "2 – 6 weeks",
    href: "/services",
  },
  {
    title: "Backend & Cloud",
    desc: "Secure, scalable APIs and cloud infrastructure built to last.",
    timeline: "2 – 6 weeks",
    href: "/services",
  },
  {
    title: "Maintenance & Support",
    desc: "Ongoing performance monitoring, updates and iterative improvements.",
    timeline: "Ongoing",
    href: "/services",
  },
];

/* ── Curtain reveal used on section headings ── */
function CurtainReveal({ children, delay = 0, once = true }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-80px" });
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

function ServiceRow({ service, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -14 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={service.href}
        className="group relative flex items-start gap-5 border-b py-5 transition-colors duration-500 md:gap-8"
        style={{ borderColor: "var(--line)" }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--surface)")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
      >
        {/* Left accent bar */}
        <span
          className="absolute inset-y-0 left-0 w-px origin-top transition-transform duration-[560ms]"
          style={{
            background: "var(--fg)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
          aria-hidden="true"
        />

        {/* Index number */}
        <span
          className="mt-[0.3rem] shrink-0 transition-[padding] duration-500 group-hover:pl-4"
          style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.6875rem",
            letterSpacing: "0.12em",
            color: "var(--faint)",
            transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
          }}
          aria-label={String(index + 1).padStart(2, "0")}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Content */}
        <span className="min-w-0 flex-1 md:grid md:grid-cols-12 md:items-baseline md:gap-x-8">
          {/* Title */}
          <span
            className="block font-medium leading-tight tracking-[-0.03em] md:col-span-5"
            style={{
              fontSize: "clamp(1.1rem, 1.9vw, 1.5rem)",
              color: "var(--fg)",
            }}
          >
            <span className="relative block overflow-hidden">
              <span
                className="block transition-transform duration-[520ms] group-hover:-translate-y-full"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                {service.title}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0"
                style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
              >
                {service.title}
              </span>
            </span>
          </span>

          {/* Description */}
          <span
            className="mt-1.5 block max-w-[54ch] leading-relaxed md:col-span-5 md:mt-0"
            style={{ fontSize: "0.875rem", color: "var(--muted)" }}
          >
            {service.desc}
          </span>

          {/* Timeline */}
          <span
            className="mt-2 block whitespace-nowrap md:col-span-2 md:mt-0 md:text-right"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontSize: "0.625rem",
              textTransform: "uppercase",
              letterSpacing: "0.13em",
              color: "var(--faint)",
            }}
          >
            {service.timeline}
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

export default function ServicesSection() {
  const headRef = useRef(null);
  const headInView = useInView(headRef, { once: true, margin: "-80px" });

  return (
    <section
      className="section border-t"
      style={{ borderColor: "var(--line)" }}
      id="capabilities"
    >
      <div className="shell">
        {/* Header */}
        <div className="grid gap-6 md:grid-cols-12 md:gap-x-8" ref={headRef}>
          <div className="md:col-span-2">
            <p className="eyebrow">01 — Services</p>
          </div>
          <div className="md:col-span-7">
            <h2 className="h1" style={{ color: "var(--fg)" }}>
              <CurtainReveal delay={0}>Eight things we do properly,</CurtainReveal>
              <CurtainReveal delay={0.15}>rather than forty we could list.</CurtainReveal>
            </h2>
          </div>
          <div className="flex items-end md:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={headInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[0.875rem]"
                style={{ color: "var(--fg)" }}
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    All services
                  </span>
                  <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                    All services
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

        {/* Services list */}
        <div className="mt-10 border-t" style={{ borderColor: "var(--line)" }}>
          {services.map((service, i) => (
            <ServiceRow key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
