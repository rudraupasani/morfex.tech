"use client";

import { motion } from "framer-motion";
import { Rocket, Brain, Globe, Database, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const products = [
    {
        name: "Cluezy",
        desc: "Cluezy is an AI-powered productivity platform that helps users discover insights, automate workflows, and make smarter decisions faster." ,
        icon: Brain,
        tag: "AI SaaS",
        link: "https://www.cluezy.site"
    },
    //   {
    //     name: "Morfex Cloud",
    //     desc: "Secure cloud storage and management platform for modern businesses.",
    //     icon: Database,
    //     tag: "Cloud Platform",
    //   },
    //   {
    //     name: "WebLaunch",
    //     desc: "Fast website builder & deployment system for startups and creators.",
    //     icon: Globe,
    //     tag: "Web Platform",
    //   },
    //   {
    //     name: "AutoFlow AI",
    //     desc: "Automation tools powered by AI to streamline business operations.",
    //     icon: Rocket,
    //     tag: "Automation",
    //   },
];

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <div className="bg-gradient-to-b mt-14 from-white via-slate-50 to-white min-h-screen">

                {/* HERO */}
                <section className="py-24 text-center px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold text-gray-900"
                    >
                        Morfex Products
                    </motion.h1>

                    <p className="text-gray-500 mt-5 max-w-2xl mx-auto">
                        We build modern SaaS products and intelligent platforms
                        that help startups grow faster and operate smarter.
                    </p>
                </section>

                {/* PRODUCTS GRID */}
                <section className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {products.map((product, i) => {
                            const Icon = product.icon;

                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="
                  group
                  bg-white
                  border border-gray-200
                  rounded-2xl
                  p-7
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  cursor-pointer
                "
                                >
                                    {/* Icon */}
                                    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50 mb-6">
                                        <Icon className="text-blue-600" size={26} />
                                    </div>

                                    {/* Tag */}
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                                        {product.tag}
                                    </span>

                                    {/* Title */}
                                    <h3 className="text-xl font-semibold text-gray-900 mt-4">
                                        {product.name}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                                        {product.desc}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center gap-2 mt-6 text-blue-600 font-medium">
                                        <a href={product.link} target="_blank" rel="noopener noreferrer">
                                            View Product
                                        </a>
                                        <ArrowRight
                                            size={18}
                                            className="group-hover:translate-x-1 transition"
                                        />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="text-center pb-24 px-6">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-3xl py-16 px-8 max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold">
                            Building the Future with Morfex
                        </h2>

                        <p className="opacity-90 mt-4">
                            We design scalable SaaS platforms, AI products, and modern digital
                            solutions for ambitious startups.
                        </p>

                        <button className="mt-8 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl hover:scale-105 transition">
                            Work With Us
                        </button>
                    </div>
                </section>

            </div>

            <Footer />
        </>
    );
}