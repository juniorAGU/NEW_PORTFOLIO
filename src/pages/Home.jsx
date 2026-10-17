import React from 'react'
import { motion} from 'motion/react'

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home() {
    return (
        <section className=" flex items-center w-full min-h-screen max-w-360 mx-auto px-6 sm:px-10 lg:px-8 pt-4 pb-12 lg:py-8">
            <motion.article 
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center"
            >

                <article className="lg:col-span-6 flex flex-col items-start">
                    <h1 className="font-['Bebas_Neue'] font-display text-7xl sm:text-[76px] xl:text-[101px] leading-[0.9] tracking-normal text-neutral-100 uppercase select-none">
                        HELLO, I AM
                        <br />
                        AGU GODWIN CHIBUIKE.
                    </h1>
                    <p className="mt-3 sm:mt-4 font-sans text-[16px] sm:text-[18px] leading-normal text-[#C7C7C7] font-normal max-w-120">
                        A React frontend developer focused on scalable system design and building intuitive, high quality digital products.
                    </p>

                    <div className="mt-8 sm:mt-10 flex items-center gap-4">
                    {/* Primary Pill CTA */}
                        <button
                            type="button"
                            onClick={() => setActiveModal('contact')}
                            className="group h-13.5 pl-6 pr-5 rounded-full bg-linear-to-l from-[#D8F25F] to-[#22C55E] hover:opacity-90 active:scale-[0.99] text-[#0A0A0A] font-sans font-bold text-[15px] sm:text-[16px] leading-none uppercase flex items-center gap-6 transition-all duration-150 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]"
                        >
                            <span>CONTACT ME</span>
                            <span className="w-2.5 h-2.5 rounded-full bg-[#0A0A0A] transition-transform duration-150 group-hover:scale-125" />
                        </button>

                        {/* LinkedIn Circular Icon Button */}
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

                        {/* GitHub Circular Icon Button */}
                        <a
                            href='https://github.com/juniorAGU'
                            aria-label="GitHub Profile"
                            className="w-13.5 h-13.5 rounded-full bg-[#222222] hover:bg-[#2e2e2e] active:scale-[0.97] text-[#D3E97A] flex items-center justify-center transition-all duration-150 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]"
                        >
                            <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                            >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                            </svg>
                        </a>
                    </div>
                </article>
                <div className="lg:col-span-6 flex justify-center lg:justify-end">
                    <div className="w-full max-w-135 xl:max-w-150 h-120 sm:h-140 xl:h-160 rounded-[16px] bg-[#C7C7C7] overflow-hidden relative flex items-end justify-center">
                        <img
                        src="/src/assets/IMG_2556.JPG"
                        alt="Portrait of Robert Garcia smiling in a brown crewneck sweater"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-[100%_18%] scale-[1.06] translate-y-[4%]"
                        />
                    
                    </div>
                </div>
    
            </motion.article>
            <hr className='bg-white' />
            
        </section>
    )
}

export default Home