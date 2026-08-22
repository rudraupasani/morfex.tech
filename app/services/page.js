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

const services = [
  {
    number: "01",
    title: "Custom Mobile App Development",
    description:
      "We design and develop high-performance mobile applications tailored to your business goals. From concept to deployment, our mobile apps are secure, scalable, and optimised for user engagement.",
    techStack: ["React Native", "Flutter", "Android (Kotlin)", "Firebase", "Supabase", "MongoDB"],
  },
  {
    number: "02",
    title: "Web App Development",
    description:
      "We create fast, responsive, and SEO-friendly web applications using modern frameworks. Our solutions focus on performance, scalability, and exceptional user experience.",
    techStack: ["React", "Next.js", "REST APIs", "Supabase", "Firebase", "Node.js", "MySQL", "MongoDB", "Vercel", "PHP"],
  },
  {
    number: "03",
    title: "MVP Development",
    description:
      "Launch your product faster with our MVP development services. We help startups and enterprises validate ideas quickly, reduce risks, and gather real user feedback before full-scale build.",
    techStack: ["React", "Next.js", "Supabase", "Firebase", "Node.js", "MongoDB", "Vercel", "AWS"],
  },
  {
    number: "04",
    title: "SaaS Development",
    description:
      "We build secure, cloud-native SaaS platforms with modern architectures that scale effortlessly. From startups to enterprise SaaS, we handle everything end-to-end.",
    techStack: ["React", "Next.js", "Supabase", "Firebase", "Node.js", "MySQL", "MongoDB", "Vercel", "AWS"],
  },
  {
    number: "05",
    title: "AI Integration",
    description:
      "Infuse intelligence into your product with custom AI integrations — chatbots, recommendation engines, natural language interfaces, and workflow automation built on modern LLMs and APIs.",
    techStack: ["OpenAI API", "LangChain", "Python", "FastAPI", "Pinecone", "Supabase"],
  },
  {
    number: "06",
    title: "UI / UX Design",
    description:
      "Design that is precise, purposeful, and beautiful. We create interfaces that feel instantly familiar and make complex products simple — from wireframes through production-ready design systems.",
    techStack: ["Figma", "Framer", "Design Systems", "Prototyping", "User Research"],
  },
];

function ServiceRow({ service, index }) {
  return (
    <motion.div
      className="grid gap-8 border-b py-12 md:grid-cols-12 md:gap-x-8"
      style={{ borderColor: "var(--line)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: 0.05, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
          {service.number}
        </span>
      </div>

      {/* Title */}
      <div className="md:col-span-3">
        <h2
          className="font-medium leading-snug tracking-[-0.022em]"
          style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "var(--fg)" }}
        >
          {service.title}
        </h2>
      </div>

      {/* Description + Stack */}
      <div className="md:col-span-5">
        <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          {service.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="md:col-span-3">
        <p
          className="mb-3 text-[0.625rem] uppercase tracking-widest"
          style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
        >
          Stack
        </p>
        <div className="flex flex-wrap gap-1.5">
          {service.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[0.6875rem] border"
              style={{
                borderColor: "var(--line)",
                color: "var(--muted)",
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
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
              <p className="eyebrow">Our Services</p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                {services.length} disciplines
              </p>
            </div>
            <div className="grid gap-10 pt-10 md:grid-cols-12 md:gap-x-8">
              <div className="md:col-span-8">
                <h1 className="display" style={{ color: "var(--fg)" }}>
                  <CurtainReveal delay={0.2}>End-to-end software</CurtainReveal>
                  <CurtainReveal delay={0.36}>built to last.</CurtainReveal>
                </h1>
                <motion.p
                  className="lede mt-7 max-w-[50ch]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  At Morfex, we offer end-to-end software development across mobile apps, web
                  applications, SaaS platforms, and AI integrations — built for businesses of all sizes.
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services list ── */}
        <section className="section">
          <div className="shell">
            <div className="border-t" style={{ borderColor: "var(--line)" }}>
              {services.map((service, i) => (
                <ServiceRow key={service.number} service={service} index={i} />
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
                  <CurtainReveal delay={0.15}>a project together?</CurtainReveal>
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
