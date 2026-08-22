"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { name: "Work", href: "/work" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

function FlipLink({ href, children, isActive, style }) {
  return (
    <Link
      href={href}
      className="flip-group group flex h-9 items-center gap-2 px-3.5 text-[0.8125rem] tracking-[-0.005em] transition-colors duration-300"
      style={style}
    >
      {isActive && (
        <span
          aria-hidden="true"
          className="block h-[4px] w-[4px] shrink-0 bg-current"
        />
      )}
      <span className="flip-text">
        <span className="flip-inner">{children}</span>
        <span className="flip-clone" aria-hidden="true">{children}</span>
      </span>
    </Link>
  );
}

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("morfex-theme");
    const prefersDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(prefersDark);
    setMounted(true);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    localStorage.setItem("morfex-theme", next ? "dark" : "light");
  };

  return (
    <motion.header
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500"
      style={{
        borderColor: scrolled ? "var(--line)" : "transparent",
        backgroundColor: scrolled ? "var(--bg)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
      }}
    >
      <div className="shell">
        <div
          className="flex items-center justify-between transition-[height] duration-500"
          style={{ height: scrolled ? "64px" : "80px" }}
        >
          {/* Logo */}
          <Link
            href="/"
            aria-label="Morfex Technologies — home"
            className="-ml-2 flex w-fit items-center py-2"
          >
            <Image
              src="/logo.png"
              alt="Morfex Technologies"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <FlipLink
                  key={link.name}
                  href={link.href}
                  isActive={isActive}
                  style={{ color: isActive ? "var(--fg)" : "var(--muted)" }}
                >
                  {link.name}
                </FlipLink>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Dark mode toggle — suppressed until mounted to avoid hydration mismatch */}
            <button
              onClick={toggleDark}
              aria-label={mounted ? (dark ? "Switch to light theme" : "Switch to dark theme") : "Toggle theme"}
              aria-pressed={mounted ? dark : undefined}
              className="relative hidden h-9 w-9 shrink-0 place-items-center border transition-colors duration-300 sm:grid"
              style={{ borderColor: "var(--line)", color: "var(--fg)" }}
            >
              <span className="relative block h-[13px] w-[13px] overflow-hidden">
                <span className="absolute inset-0 border border-current" />
                <span
                  className="absolute inset-0 bg-current transition-transform duration-500"
                  style={{
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transform: mounted && dark
                      ? "translateX(0) translateY(0)"
                      : "translateX(-100%) translateY(100%)",
                  }}
                />
              </span>
            </button>

            {/* CTA button */}
            <Link
              href="/contact"
              className="flip-group group hidden h-9 items-center gap-3 overflow-hidden px-4 text-[0.8125rem] font-medium sm:inline-flex"
              style={{ background: "var(--inverse)", color: "var(--inverse-fg)" }}
            >
              <span className="flip-text">
                <span className="flip-inner">Let's Talk</span>
                <span className="flip-clone" aria-hidden="true">Let's Talk</span>
              </span>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen(!open)}
              className="relative grid h-9 w-9 place-items-center border lg:hidden"
              style={{ borderColor: "var(--line)" }}
            >
              <span className="relative block h-[9px] w-[15px]">
                <span
                  className="absolute left-0 block h-[1.4px] w-full bg-current transition-all duration-300"
                  style={{
                    color: "var(--fg)",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    top: 0,
                    transform: open ? "rotate(45deg) translateY(4.5px)" : "none",
                  }}
                />
                <span
                  className="absolute bottom-0 left-0 block h-[1.4px] w-full bg-current transition-all duration-300"
                  style={{
                    color: "var(--fg)",
                    transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                    transform: open ? "rotate(-45deg) translateY(-4.5px)" : "none",
                  }}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t lg:hidden"
            style={{ borderColor: "var(--line)", background: "var(--bg)" }}
          >
            <div className="shell py-6 flex flex-col gap-0">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ x: -16, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.055, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 border-b py-4 text-sm font-medium transition-colors duration-300"
                      style={{
                        borderColor: "var(--line)",
                        color: isActive ? "var(--fg)" : "var(--muted)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-geist-mono)",
                          fontSize: "0.625rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: "var(--faint)",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: navLinks.length * 0.055 + 0.05 }}
                className="pt-5"
              >
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center px-5 text-sm font-medium"
                  style={{ background: "var(--inverse)", color: "var(--inverse-fg)" }}
                >
                  Let's Talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
