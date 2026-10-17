import React from 'react'
import { motion } from 'motion/react'
import { projects } from '../api/api'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

function Work() {
    return (
        <section className='  w-full min-h-screen max-w-360 mx-auto px-6  sm:px-10 lg:px-8 pt-4 pb-12 lg:py-8'>
            <motion.article 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className=' w-full '>
                <h1 className="font-['Bebas_Neue'] text-4xl font-display  m:text-[76px] lg:text-[101px] leading-[0.9] tracking-normal text-neutral-100 uppercase select-none">
                    FEATURED PROJECTS
                </h1>
                < span className="mt-3 sm:mt-4 font-sans text-[16px] sm:text-[18px] leading-normal text-[#C7C7C7] font-normal max-w-120">
                    Here are some of my featured projects that showcase my passion for web development and my ability to create innovative solutions. 
                    <br />
                    Each project demonstrates my skills in frontend development, responsive design, and user experience.
                    <br />
                    I take pride in delivering high quality work that meets the needs of clients and users alike.
                </span>

                <section className="mx-auto flex w-full max-w-360 flex-col gap-12">
                    {projects.map((project) => (
                        <article
                        key={project.id}
                        className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-10"
                        >
                        
                        <motion.div
                            variants={slideFromLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex w-full items-center justify-center overflow-hidden rounded-xl bg-[#1e1c1c] p-6 sm:p-12"
                        >
                            <div className="relative aspect-video w-full overflow-hidden rounded-md bg-amber-50">
                            <img
                                src={project.image}
                                alt={project.imageAlt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                            </div>
                        </motion.div>

                        
                        <motion.div
                            variants={slideFromRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            className="flex flex-col justify-between gap-6 w-full min-w-0 text-left"
                        >
                            <div className="w-full min-w-0">
                            <h2 className="font-['Bebas_Neue'] text-3xl sm:text-[50px] md:text-[60px] lg:text-[40px] leading-[0.9] text-neutral-100 uppercase mt-4">
                                {project.title}
                            </h2>

                            {project.description && (
                                <p className="font-sans mt-4 text-[16px] sm:text-[15px] leading-normal text-[#C7C7C7]">
                                {project.description}
                                </p>
                            )}

                            <h3 className="font-['Bebas_Neue'] mt-6 text-[22px] sm:text-[20px] leading-normal text-white">
                                project info
                            </h3>
                            <hr className="border-gray-600 mt-1" />

                            <div className="mt-3 w-full">
                                <div className="flex w-full mb-2 justify-between gap-1">
                                <span className="font-['Bebas_Neue'] text-[15px] text-white">
                                    {project.info?.label}
                                </span>
                                <span className="font-['Bebas_Neue'] text-[15px] text-white">
                                    {project.info?.value}
                                </span>
                                </div>
                                <hr className="border-gray-600" />

                                <div className="flex w-full mb-2 mt-2 justify-between gap-1">
                                <span className="font-['Bebas_Neue'] text-[15px] text-white">
                                    {project.role?.label}
                                </span>
                                <span className="font-['Bebas_Neue'] text-[15px] text-white">
                                    {project.role?.value}
                                </span>
                                </div>
                                <hr className="border-gray-600" />
                            </div>
                            </div>

                            {/* Links Footer */}
                            <div className="flex w-full flex-wrap gap-4 mt-2">
                            {project.links?.href && (
                                <a
                                href={project.links.href}
                                className="relative inline-flex items-center pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-linear-to-l after:from-[#D8F25F] after:to-[#22C55E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                                >
                                <span className="bg-linear-to-l from-[#D8F25F] to-[#22C55E] bg-clip-text text-transparent">
                                    {project.links.text}
                                </span>
                                </a>
                            )}

                            {project.repo?.href && (
                                <a
                                href={project.repo.href}
                                className="relative inline-flex items-center gap-1.5 pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-linear-to-l after:from-[#D8F25F] after:to-[#22C55E] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left group"
                                >
                                <span className="bg-linear-to-l from-[#D8F25F] to-[#22C55E] bg-clip-text text-transparent">
                                    {project.repo.text}
                                </span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="text-neutral-800 transition-colors group-hover:text-green-600 shrink-0"
                                    aria-hidden="true"
                                >
                                    <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    />
                                </svg>
                                </a>
                            )}
                            </div>
                        </motion.div>
                        </article>
                    ))}
                </section>

            </motion.article>

        </section>
    )
}

export default Work