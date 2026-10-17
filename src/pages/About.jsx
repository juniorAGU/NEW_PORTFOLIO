import React from 'react'
import { motion } from 'framer-motion'
import { experiences } from '../api/experience'

const slideFromLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
    }

    const slideFromRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
    }

    const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
    }

    const capabilities = [
    "HTML", "CSS", "JAVASCRIPT", "JQUERY","REACT", "NEXT.JS", "NODE.JS", "EXPRESS.JS", "MONGODB",  "FIGMA", "TAILWIND CSS"
    ]

    export default function About() {
    return (
        <main className="min-h-screen bg-[#0A0A0A] text-[#C7C7C7] selection:bg-[#D3E97A] selection:text-black pt-28 pb-32">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-24 px-6 sm:px-10 lg:px-15">
                
                {/* SECTION 1: ABOUT ME */}
                <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
                {/* Left: Huge Title */}
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-5"
                >
                    <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-[100px] leading-[0.9] tracking-tight text-white uppercase select-none">
                    ABOUT ME
                    </h1>
                </motion.div>

                {/* Right: Bio & Socials */}
                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-start gap-6 lg:col-span-7"
                >
                    <h2 className="font-['Bebas_Neue'] text-2xl sm:text-3xl font-medium text-white leading-snug">
                    A React frontend developer focused on scalable system design and building intuitive, high quality digital products.
                    </h2>
                    <p className="font-sans text-base leading-relaxed text-[#C7C7C7]">
                    I am a frontEnd Developer based in Nigeria, looking for exciting opportunities. Has little knowledge in BACKEND background. I like to focus on system structure when developing. Passionate and curious about solving Real World problems through Technology. Currently, I'm working with React.js, Webflow and a bit of Designing. While I am not programming, I enjoy playing football, photography and playing games. Learning more to improve skill.
                    </p>

                    {/* Buttons & Icons */}
                    <div className="flex flex-wrap items-center gap-4 mt-2">
                    <a
                        href="/resume.pdf"
                        download="Godwin_Agu_Frontend_Developer_CV(1)"
                        className="inline-flex items-center gap-2 rounded-full  px-6 py-3  bg-linear-to-l from-[#D8F25F] to-[#22C55E] hover:opacity-90 active:scale-[0.99] text-[#0A0A0A] font-sans font-bold text-[15px] sm:text-[16px] leading-none uppercase flex items-center gap-6 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]"
                    >
                        DOWNLOAD RESUME
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[#D3E97A] text-xs">
                        ↓
                        </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                            href='https://www.linkedin.com/in/godwin-agu-0b258b353?utm_source=share_via&utm_content=profile&utm_medium=member_android'
                            aria-label="LinkedIn Profile"
                            className="w-13.5 h-13.5 rounded-full bg-[#222222] hover:bg-[#2e2e2e] active:scale-[0.97] text-[#D3E97A] flex items-center justify-center transition-all duration-150 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]"
                        >
                            <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1S4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM12.982 8H8.014V24H12.983V15.601C12.983 10.931 19.012 10.549 19.012 15.601V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8Z" />
                            </svg>
                        </a>

                    {/* GitHub */}
                    <a
                        href='https://github.com/juniorAGU'
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-800 bg-[#1A1A1A] text-white transition-colors duration-200 hover:border-[#D3E97A] hover:text-[#D3E97A]"
                    >
                        <svg className="h-5 w-6 fill-green-500" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                    </a>
                    </div>
                </motion.div>
                </section>

                {/* HERO IMAGE SHOWCASE */}
                <motion.section
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="w-full overflow-hidden rounded-2xl bg-[#1A1A1A] p-4 sm:p-8 md:p-12 flex items-center justify-center"
                >
                <div className="relative aspect-16/10 w-full max-w-5xl overflow-hidden rounded-xl bg-neutral-300">
                    <img
                    src="https://unsplash.com"
                    alt="Portrait of Robert Garcia"
                    loading="lazy"
                    className="h-full w-full object-cover object-center"
                    />
                </div>
                </motion.section>

                {/* SECTION 2: MY CAPABILITIES */}
                <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 border-t border-neutral-800 pt-16">
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-5"
                >
                    <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-[80px] leading-[0.9] tracking-tight text-white uppercase select-none">
                    MY CAPABILITIES
                    </h2>
                </motion.div>

                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col items-start gap-6 lg:col-span-7"
                >
                    <p className="font-sans text-base leading-relaxed text-[#C7C7C7]">
                    I am always looking to add more skills. But for now, I am focusing on improving my existing ones.
                    </p>

                    {/* Pill Tags */}
                    <div className="flex flex-wrap gap-3 mt-2">
                    {capabilities.map((tech) => (
                        <span
                        key={tech}
                        className="rounded-full border border-neutral-700 bg-[#141414] px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-[#D3E97A]"
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                </motion.div>
                </section>

                {/* SECTION 3: MY EXPERIENCE */}
                <section className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 border-t border-neutral-800 pt-16">
                <motion.div
                    variants={slideFromLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="lg:col-span-5"
                >
                    <h2 className="font-['Bebas_Neue'] text-5xl sm:text-6xl lg:text-[80px] leading-[0.9] tracking-tight text-white uppercase select-none">
                    MY EXPERIENCE
                    </h2>
                </motion.div>

                <motion.div
                    variants={slideFromRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-10 lg:col-span-7"
                >
                    {experiences.map((exp, idx) => (
                    <div key={idx} className="flex flex-col gap-3">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-2">
                            <h3 className="text-xl sm:text-2xl font-medium text-white">
                            {exp.role}
                            </h3>
                            {exp.company && (
                            <span className="text-xl sm:text-2xl font-medium text-[#D3E97A]">
                                {exp.company}
                            </span>
                            )}
                        </div>
                        <span className="text-sm font-normal text-neutral-400">
                            {exp.period}
                        </span> 
                    </div>
                        <p className="font-sans text-base leading-relaxed text-[#C7C7C7]">
                        {exp.desc}
                        </p>
                    </div>
                    ))}
                </motion.div>   
                </section>
            </div>
        </main>
    )
    }