import { useState } from 'react';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';
const Peroglas = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            {/* ================= HERO SECTION (COMPACT WITH HIGH LOWER WHITE SPACE) ================= */}
            {/* min-h-[40vh] sm:min-h-[45vh] rakha hai taake section sleek rahe aur iske niche pure white zyada dikhe */}
            <main className="relative min-h-[42vh] sm:min-h-[48vh] w-full flex items-center justify-center overflow-hidden bg-[#7a7a7a]">

                {/* Figma Cinematic Background Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                {/* Hero Content Block */}
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-20">

                    {/* Main Title Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        Inspiration Gallery
                    </h1>

                    {/* Figma Perfect Custom Search Bar Container */}
                    <div className="w-full max-w-md relative mt-2 group px-4 sm:px-0">
                        <span className="absolute inset-y-0 left-4 sm:left-4 flex items-center pl-3 pointer-events-none text-white/70 group-focus-within:text-white transition-colors">
                            {/* Search Glass Lens Icon SVG */}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>

                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-transparent border border-white/40 hover:border-white/70 rounded-sm pl-11 pr-4 py-2 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white focus:ring-1 focus:ring-white/30 transition-all font-sans"
                        />
                    </div>

                </div>
            </main>

            {/* ================= LOWER CONTENT AREA (WHITE CONTAINER SPACE) ================= */}
            {/* Is section ki padding halke top padding se shuru ho rahi hai taake white space upar tak cleanly expand ho sake */}
            <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 text-black min-h-[50vh]">
                <div className="max-w-7xl mx-auto">
                    <section className="w-full bg-white py-12 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                        <div className="max-w-5xl mx-auto flex flex-col gap-16 sm:gap-20">

                            {/* Loop Array Elements Data List */}
                            {[
                                { title: "Outdoor Kitchens", desc: "Inspiring Spaces Crafted for Outdoor Living" },
                                { title: "Most modern free standing", desc: "Inspiring Spaces Crafted for Outdoor Living" },
                                { title: "Plain modern free standing", desc: "Inspiring Spaces Crafted for Outdoor Living" },
                                { title: "Attached modern pergolas", desc: "Inspiring Spaces Crafted for Outdoor Living" },
                                { title: "Mounted on brackets", desc: "Inspiring Spaces Crafted for Outdoor Living" }
                            ].map((item, index) => (

                                /* Single Row Flex Layer */
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 w-full group border-b border-neutral-100/60 pb-10 last:border-none last:pb-0"
                                >
                                    {/* Left Side: Square Rounded Image Container */}
                                    <div className="w-48 h-48 sm:w-56 sm:h-56 overflow-hidden rounded-xl bg-neutral-100 flex-shrink-0 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.1)] group-hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.15)] transition-all duration-300">
                                        <img
                                            src="/gallery.png"
                                            alt={item.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                // Fallback handles if extension differs (e.g. .jpg)
                                                e.target.src = "/gallery.jpg";
                                            }}
                                        />
                                    </div>

                                    {/* Right Side: Text Information Stack Block */}
                                    <div className="flex flex-col justify-center text-center sm:text-left pt-2 sm:pt-4 max-w-xl">
                                        <h2 className="text-xl sm:text-2xl font-bold text-neutral-900 tracking-tight leading-tight group-hover:text-neutral-700 transition-colors">
                                            {item.title}
                                        </h2>
                                        <p className="mt-2 text-xs sm:text-sm text-neutral-500 tracking-wide font-medium">
                                            {item.desc}
                                        </p>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </section>

                </div>
            </section>

             <TalkTo />
            <Icon />
            <Footer />
        </>
    );
};

export default Peroglas;