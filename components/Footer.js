"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  "Web Development",
  "SaaS Development",
  "Mobile Apps",
  "AI Integration",
  "UI/UX Design",
  "Backend & Cloud",
];

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/morfex.tech" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/morfextech" },
  { label: "Twitter", href: "https://twitter.com/morfextech" },
];

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <footer
      className="border-t"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="shell">
        {/* ── Top section ── */}
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-x-8" ref={ref}>

          {/* Brand column */}
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src="/logo.png"
              alt="Morfex Technologies"
              className="h-8 w-auto mb-5"
            />
            <p
              className="text-sm leading-relaxed max-w-[32ch]"
              style={{ color: "var(--muted)" }}
            >
              A software studio building web applications, SaaS platforms and AI
              tools engineered for speed, clarity and longevity.
            </p>
            <p
              className="mt-4 text-sm"
              style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)", fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.12em" }}
            >
              Nadiad, Gujarat — India
            </p>
          </motion.div>

          {/* Navigation column */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.07, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--faint)", fontFamily: "var(--font-geist-mono)" }}
            >
              Navigate
            </p>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center text-sm transition-colors duration-300"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services column */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--faint)", fontFamily: "var(--font-geist-mono)" }}
            >
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm transition-colors duration-300"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact column */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="mb-5 text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--faint)", fontFamily: "var(--font-geist-mono)" }}
            >
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:morfextech@gmail.com"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  morfextech@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+919054664402"
                  className="text-sm transition-colors duration-300"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  +91 90546 64402
                </a>
              </li>
              <li className="text-sm" style={{ color: "var(--muted)" }}>
                Nadiad, Gujarat, India
              </li>
            </ul>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center text-sm transition-colors duration-300"
                  style={{ color: "var(--faint)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--faint)")}
                  aria-label={s.label}
                >
                  <span
                    className="text-[0.625rem] uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-geist-mono)" }}
                  >
                    {s.label}
                  </span>
                  <svg
                    viewBox="0 0 10 10"
                    aria-hidden="true"
                    className="ml-1 h-[7px] w-[7px] opacity-50 transition-transform duration-500 group-hover:translate-x-px group-hover:-translate-y-px"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                  >
                    <path d="M2.5 7.5 7.5 2.5M3.4 2.5h4.1v4.1" />
                  </svg>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div
          className="flex flex-col items-start justify-between gap-4 border-t py-6 sm:flex-row sm:items-center"
          style={{ borderColor: "var(--line)" }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--faint)" }}
            suppressHydrationWarning
          >
            © 2025 Morfex Technologies. All rights reserved.
          </p>
          <p
            className="text-[0.625rem] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
          >
            Built with precision in India
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
