import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'

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

    export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const formRef = useRef(null)

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        error: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const sendEmail = (e) => {
        e.preventDefault()
        setStatus({ submitting: true, submitted: false, error: '' })

        // Replace these with your actual EmailJS credentials
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

        emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
            publicKey: PUBLIC_KEY,
        })
        .then(
            () => {
            setStatus({ submitting: false, submitted: true, error: '' })
            formRef.current.reset() // Clears the inputs
            },
            (error) => {
            console.error('FAILED...', error.text)
            setStatus({ 
                submitting: false, 
                submitted: false, 
                error: 'Failed to send message. Please try again.' 
            })
            }
        )
    }

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-[#C7C7C7] selection:bg-[#D3E97A] selection:text-black pt-28 pb-16 flex flex-col justify-between">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col justify-between px-6 sm:px-10 lg:px-15 flex-grow">
            
            {/* MAIN GRID SECTION */}
            <section className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 w-full">
            
            {/* Left Column: Title & Info */}
            <motion.div
                variants={slideFromLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col items-start gap-6 lg:col-span-5"
            >
                <h1 className="font-['Bebas_Neue'] text-6xl sm:text-7xl lg:text-[100px] leading-[0.9] tracking-tight text-white uppercase select-none">
                LET&apos;S CONNECT
                </h1>
                
                <div className="flex flex-col gap-1 text-base sm:text-lg">
                <p className="text-[#C7C7C7]">
                    Say hello at{' '}
                    <a
                    href="perryfresh25@gmail.com"
                    className="relative inline-block pb-0.5 text-[#D3E97A] hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#D3E97A] after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right"
                    >
                    perryfresh25@gmail.com
                    </a>
                </p>
                <p className="text-[#C7C7C7]">
                    For more info, here&apos;s my{' '}
                    <a
                    href="/resume.pdf"
                    download="Chibuike_Godwin_Resume.pdf"
                    className="relative inline-block pb-0.5 text-[#D3E97A] hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#D3E97A] after:scale-x-100 hover:after:scale-x-0 after:transition-transform after:duration-300 after:origin-right"
                    >
                    resume
                    </a>
                </p>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-2">
                {/* LinkedIn */}
                <a
                    href='https://www.linkedin.com/in/godwin-agu-0b258b353?utm_source=share_via&utm_content=profile&utm_medium=member_android'
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="text-[#D3E97A] hover:text-white transition-colors duration-200"
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                    </svg>
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/juniorAGU"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="text-[#D3E97A] hover:text-white transition-colors duration-200"
                >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                </a>

                {/* X / Twitter */}
                <a
                    href="https://x.com/ChibuikeChi1"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="X (Twitter)"
                    className="text-[#D3E97A] hover:text-white transition-colors duration-200"
                >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                </a>

                {/* Instagram */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-[#D3E97A] hover:text-white transition-colors duration-200"
                >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                </a>
                </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div
                variants={slideFromRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:col-span-7 w-full"
            >
                <form ref={formRef}  onSubmit={sendEmail} className="flex flex-col gap-6 w-full">
                
                {/* Name Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Name
                    </label>
                    <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    required
                    className="w-full bg-[#1A1A1A] border-0 rounded-md px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#D3E97A] transition-all"
                    />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Email
                    </label>
                    <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    required
                    className="w-full bg-[#1A1A1A] border-0 rounded-md px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#D3E97A] transition-all"
                    />
                </div>
                {/* Subject Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="subject" className="text-xs uppercase tracking-wider text-neutral-400 font-medium"> 
                    Subject
                    </label>
                    <input
                    type="text" 
                    id="subject"
                    name="subject"
                    required
                    
                    className="w-full bg-[#1A1A1A] border-0 rounded-md px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#D3E97A] transition-all"
                    />
                </div>
                {/* Message Field */}
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full bg-[#1A1A1A] border-0 rounded-md px-4 py-3.5 text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-[#D3E97A] transition-all"
                    ></textarea>
                </div>
                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={status.submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-l from-[#D8F25F] to-[#22C55E] px-6 py-3 text-sm font-semibold text-black transition-transform duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status.submitting ? <Loader2 className="animate-spin" /> : 'Send Message'}
                </button>
                {/* Status Messages */}
                {status.submitted && (
                    <p className="text-green-500 text-sm mt-2">Message sent successfully!</p>
                )}
                {status.error && (
                    <p className="text-red-500 text-sm mt-2">{status.error}</p> 
                )}
                </form>
            </motion.div>
            </section>
        </div>
        </main>
    )
    }    