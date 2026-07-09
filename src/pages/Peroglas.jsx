import { useState } from 'react';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';
import { Link } from 'react-router-dom';
import FAQSection from '../Component/Fre';
const Peroglas = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <main
                className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/fo.png')" }}
            >
                {/* Dark Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10" />

                {/* Hero Content Block */}
                <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">

                    {/* Main Title Heading */}
                    <h1 className="text-white text-4xl sm:text-5xl md:text-[56px] font-bold tracking-tight leading-none select-none">
                        Pergolas
                    </h1>

                    {/* Subtitle line with Flag */}
                    <p className="text-white text-sm sm:text-lg font-medium mt-3 tracking-wide flex items-center justify-center gap-1.5 select-none">
                        Proudly Made in America 🇺🇸
                    </p>

                    {/* Action Conversation Button */}
                    <Link
                        to="/contact-us"
                        className="mt-6 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>

                </div>
            </main>
            <section className="w-full bg-white pt-20 pb-16 px-4 sm:px-8 lg:px-16 text-black">
                <div className="max-w-7xl mx-auto">

                    {/* ================= HEADER SECTION ================= */}
                    <div className="w-full flex flex-col items-center justify-center text-center gap-2 mb-12 select-none">
                        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none">
                            Project Gallery
                        </h2>
                        <p className="text-sm sm:text-base text-neutral-600 font-normal tracking-wide mt-2">
                            Inspiring Spaces Crafted for Outdoor Living
                        </p>
                    </div>

                    {/* ================= DESIGN RESPONSIVE GRID ================= */}
                    {/* Mobile par 1 column aur desktop par perfectly aligned symmetrical 4 columns layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {/* Card 1: Mounted on brackets */}
                        <Link
                            to="/mounted-on-brackets"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-1.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-1.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Mounted on brackets
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Modern Wall-Mounted */}
                        <Link
                            to="/modern-wall-mounted"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-2.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-2.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Modern Wall-Mounted
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 3: Plain modern free standing */}
                        <Link
                            to="/plain-modern-free-standing"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-3.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-3.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Plain modern free standing
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 4: Outdoor Kitchens */}
                        <Link
                            to="/outdoor-kitchens"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-4.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-4.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Outdoor Kitchens
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </section>
            <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">

                    {/* ================= DESIGN RESPONSIVE GRID ================= */}
                    {/* Mobile par 1 column aur desktop par perfectly aligned symmetrical 4 columns layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

                        {/* Card 1: Mounted on brackets */}
                        <Link
                            to="/mounted-on-brackets"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-1.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-1.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Mounted on brackets
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 2: Modern Wall-Mounted */}
                        <Link
                            to="/modern-wall-mounted"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-2.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-2.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Modern Wall-Mounted
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 3: Plain modern free standing */}
                        <Link
                            to="/plain-modern-free-standing"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-3.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-3.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Plain modern free standing
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                        {/* Card 4: Outdoor Kitchens */}
                        <Link
                            to="/outdoor-kitchens"
                            className="relative rounded-[2px] overflow-hidden group flex items-end p-6 h-[320px] bg-neutral-800 transition-all duration-300"
                        >
                            {/* Background Image (m-4.png) */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                style={{ backgroundImage: "url('/m-4.png')" }}
                            />
                            {/* Figma Style Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Content Stack */}
                            <div className="relative z-20 w-full flex items-center justify-between gap-2">
                                <span className="text-white text-base font-bold tracking-wide drop-shadow-md">
                                    Outdoor Kitchens
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transform group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </Link>

                    </div>

                </div>
            </section>
            <FAQSection/>

            <TalkTo />
            <Footer />
        </>
    );
};

export default Peroglas;