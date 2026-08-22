"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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
        <span className="absolute inset-y-0 right-0 w-px" style={{ background: "var(--fg)" }} />
      </motion.span>
    </span>
  );
}

const inputClass = {
  width: "100%",
  padding: "0.875rem 1rem",
  border: "1px solid var(--line)",
  background: "transparent",
  color: "var(--fg)",
  fontSize: "0.875rem",
  outline: "none",
  transition: "border-color 0.3s ease",
  borderRadius: 0,
};

const selectStyle = {
  ...inputClass,
  color: "black",
  backgroundColor: "white",
};

const optionStyle = {
  color: "black",
  backgroundColor: "white",
};

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-[0.6875rem] uppercase tracking-widest"
        style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", company: "",
    service: "", budget: "", timeline: "", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const focusBorder = (e) => (e.target.style.borderColor = "var(--fg)");
  const blurBorder = (e) => (e.target.style.borderColor = "var(--line)");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwXo0Pd3LXBrOd591-d7lpJ94E1x5iZTXKe-xXbFp8MF4H2ROhri627vMQYjC_Z8Bawzg/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: Object.entries(form).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&"),
        }
      );
      setSent(true);
      setForm({ name: "", email: "", company: "", service: "", budget: "", timeline: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const infoRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-60px" });

  return (
    <>
      <Navbar />
      <main id="main" style={{ background: "var(--bg)" }}>

        {/* ── Page head ── */}
        <section className="page-head border-b" style={{ borderColor: "var(--line)" }}>
          <div className="shell">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-4" style={{ borderColor: "var(--line)" }}>
              <p className="eyebrow">Get in touch</p>
              <p
                style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.6875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "var(--faint)",
                }}
              >
                Reply within 24 hrs
              </p>
            </div>
            <div className="pt-10">
              <h1 className="display" style={{ color: "var(--fg)" }}>
                <CurtainReveal delay={0.2}>Tell us what</CurtainReveal>
                <CurtainReveal delay={0.36}>you're building.</CurtainReveal>
              </h1>
              <motion.p
                className="lede mt-6 max-w-[46ch]"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              >
                We're selective about the projects we take on  which means if we're
                talking, we're already interested.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Main content ── */}
        <section className="section">
          <div className="shell">
            <div className="grid gap-16 md:grid-cols-12 md:gap-x-8">

              {/* Left: contact info */}
              <div className="md:col-span-4" ref={infoRef}>
                {[
                  { label: "Email", value: "morfextech@gmail.com", href: "mailto:morfextech@gmail.com" },
                  { label: "Phone", value: "+91 90546 64402", href: "tel:+919054664402" },
                  { label: "Location", value: "Nadiad, Gujarat, India", href: null },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="border-b py-5"
                    style={{ borderColor: "var(--line)" }}
                    initial={{ opacity: 0, y: 16 }}
                    animate={infoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.1 + 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <p
                      className="mb-1.5"
                      style={{
                        fontFamily: "var(--font-geist-mono)",
                        fontSize: "0.625rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        color: "var(--faint)",
                      }}
                    >
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm transition-colors duration-300"
                        style={{ color: "var(--muted)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm" style={{ color: "var(--muted)" }}>{item.value}</p>
                    )}
                  </motion.div>
                ))}

                {/* Response note */}
                <motion.div
                  className="mt-8 flex items-start gap-3"
                  initial={{ opacity: 0 }}
                  animate={infoInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.65 }}
                >
                  <span className="mt-1.5 block h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    We reply within 24 hours on business days. For urgent work, mention it in your message.
                  </p>
                </motion.div>
              </div>

              {/* Right: form */}
              <motion.div
                className="md:col-span-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {sent ? (
                  <div
                    className="border p-10 flex flex-col gap-4"
                    style={{ borderColor: "var(--line)" }}
                  >
                    <span
                      className="block text-[0.6875rem] uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
                    >
                      Message sent
                    </span>
                    <h2 className="h1" style={{ color: "var(--fg)" }}>Thank you.</h2>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      We've received your inquiry and will be in touch within 24 hours.
                    </p>
                    <button
                      onClick={() => setSent(false)}
                      className="mt-2 self-start text-sm"
                      style={{ color: "var(--fg)", textDecoration: "underline", textUnderlineOffset: "3px" }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Name + Email */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name *">
                        <input
                          type="text"
                          required
                          placeholder="Your full name"
                          value={form.name}
                          onChange={set("name")}
                          style={inputClass}
                          onFocus={focusBorder}
                          onBlur={blurBorder}
                        />
                      </Field>
                      <Field label="Email *">
                        <input
                          type="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={set("email")}
                          style={inputClass}
                          onFocus={focusBorder}
                          onBlur={blurBorder}
                        />
                      </Field>
                    </div>

                    {/* Company */}
                    <Field label="Company / startup">
                      <input
                        type="text"
                        placeholder="Acme Inc. (optional)"
                        value={form.company}
                        onChange={set("company")}
                        style={inputClass}
                        onFocus={focusBorder}
                        onBlur={blurBorder}
                      />
                    </Field>

                    {/* Service */}
                    <Field label="Service needed">
                      <select
                        value={form.service}
                        onChange={set("service")}
                        style={selectStyle}
                        onFocus={focusBorder}
                        onBlur={blurBorder}
                      >
                        <option value="" style={optionStyle}>Select a service</option>
                        <option style={optionStyle}>Web Application Development</option>
                        <option style={optionStyle}>SaaS Development</option>
                        <option style={optionStyle}>Mobile App Development</option>
                        <option style={optionStyle}>AI Integration</option>
                        <option style={optionStyle}>UI/UX Design</option>
                        <option style={optionStyle}>E-commerce</option>
                        <option style={optionStyle}>Backend & Cloud</option>
                        <option style={optionStyle}>Other</option>
                      </select>
                    </Field>

                    {/* Budget + Timeline */}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Budget range">
                        <select
                          value={form.budget}
                          onChange={set("budget")}
                          style={selectStyle}
                          onFocus={focusBorder}
                          onBlur={blurBorder}
                        >
                          <option value="" style={optionStyle}>Select budget</option>
                          <option style={optionStyle}>Under $500</option>
                          <option style={optionStyle}>$500 – $1K</option>
                          <option style={optionStyle}>$1K – $5K</option>
                          <option style={optionStyle}>$5K – $10K</option>
                          <option style={optionStyle}>$10K – $25K</option>
                          <option style={optionStyle}>$25K+</option>
                        </select>
                      </Field>
                      <Field label="Timeline">
                        <select
                          value={form.timeline}
                          onChange={set("timeline")}
                          style={selectStyle}
                          onFocus={focusBorder}
                          onBlur={blurBorder}
                        >
                          <option value="" style={optionStyle}>Select timeline</option>
                          <option style={optionStyle}>1–2 weeks</option>
                          <option style={optionStyle}>1–2 months</option>
                          <option style={optionStyle}>3–6 months</option>
                          <option style={optionStyle}>6+ months</option>
                          <option style={optionStyle}>Ongoing / retainer</option>
                        </select>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Project description *">
                      <textarea
                        rows={5}
                        required
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        value={form.message}
                        onChange={set("message")}
                        style={{ ...inputClass, resize: "vertical" }}
                        onFocus={focusBorder}
                        onBlur={blurBorder}
                      />
                    </Field>

                    {/* Submit */}
                    <div className="flex items-center gap-6 pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="group cursor-pointer inline-flex h-12 items-center gap-3 overflow-hidden px-6 text-[0.9375rem] font-medium transition-opacity disabled:opacity-50"
                        style={{ background: "#09090b", color: "white", border: "1px solid #1a1a1a" }}
                      >
                        <span className="relative block overflow-hidden">
                          <span className="block transition-transform duration-[520ms] group-hover:-translate-y-full" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                            {loading ? "Sending..." : "Send message"}
                          </span>
                          <span aria-hidden="true" className="absolute inset-0 block translate-y-full transition-transform duration-[520ms] group-hover:translate-y-0" style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}>
                            {loading ? "Sending..." : "Send message"}
                          </span>
                        </span>
                      </button>
                      <p
                        className="text-[0.6875rem] uppercase tracking-widest"
                        style={{ fontFamily: "var(--font-geist-mono)", color: "var(--faint)" }}
                      >
                        Reply within 24 hrs
                      </p>
                    </div>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
