"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  FacebookIcon,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src="/logo.png"
              alt="Morfex Tech Logo"
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Morfex Tech is a modern software development company delivering
              scalable, secure, and high-performance digital solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {["Work", "Services", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-gray-900">Services</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li>Web Development</li>
              <li>Mobile App Development</li>
              <li>Backend & Cloud</li>
              <li>UI/UX Design</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-semibold mb-4 text-gray-900">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <a
                href="mailto:morfextech@gmail.com"
                className="flex items-center gap-2 hover:text-blue-600 transition"
              >
                <Mail size={16} /> morfextech@gmail.com
              </a>

              <li className="flex items-center gap-2">
                <Phone size={16} /> +91 90546 64402
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Nadiad, Gujarat, India
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-sm text-gray-500">
            © 2026 Morfex Technology . All rights reserved.
          </p>
          

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.instagram.com/morfex.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500 transition"
            >
              <Instagram size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/rudraupasani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition"
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              href="https://twitter.com/morfextech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-500 transition"
            >
              <Twitter size={18} />
            </motion.a>

          </div>
        </motion.div>
      </div>
    </footer>
  );
}
