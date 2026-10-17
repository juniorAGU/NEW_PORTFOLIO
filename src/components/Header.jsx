import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className="sticky top-2 z-50 w-full bg-[#252525] rounded-md max-w-360 mx-auto px-6 sm:px-10 lg:px-15 py-6 flex items-center justify-between gap-8">
            <Link to={'/'} className="font-['Bebas_Neue'] font-display text-[28px] sm:text-[32px] leading-none tracking-[-0.01em] text-[#C7C7C7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]">
                CHIBUIKE GODWIN
            </Link>
            <nav aria-label="Primary Navigation" className="flex items-center gap-6 sm:gap-8">
                <Link to={'work'} className="font-nav text-[15px] sm:text-[16px] font-normal text-[#C7C7C7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]">
                    Work
                </Link>
                <Link to={'about'} className="font-nav text-[15px] sm:text-[16px] font-normal text-[#C7C7C7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]">
                    About
                </Link>
                <Link to={'contact'} className="font-nav text-[15px] sm:text-[16px] font-normal text-[#C7C7C7] hover:text-white transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D3E97A]">
                    Contact
                </Link>
            </nav>

        </section>
    )
}

export default Header