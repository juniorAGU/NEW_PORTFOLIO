import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

function Mainlayout() {
    return (
        <section className="min-h-screen bg-[#0A0A0A] text-red flex flex-col justify-between  ">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default Mainlayout