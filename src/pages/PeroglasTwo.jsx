import { Link } from 'react-router-dom';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';

const PeroglasTwo = () => {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <main className="relative min-h-[42vh] sm:min-h-[48vh] w-full flex items-center justify-center overflow-hidden bg-[#7a7a7a]">

                {/* Figma Cinematic Background Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                
                {/* Hero Content Block */}
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-20">

                    {/* Main Title Heading */}
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
                        Pergolas
                    </h1>

                    {/* Subtitle with Flag */}
                    <p className="text-white/95 text-base sm:text-lg font-medium mt-3 tracking-wide flex items-center gap-1.5">
                        Proudly Made in America 🇺🇸
                    </p>

                    {/* Action Button */}
                    <Link 
                        to="/contact-us" 
                        className="mt-6 bg-white text-black font-bold py-2.5 px-6 rounded-sm hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>

                </div>
            </main>

            {/* ================= PROJECT GALLERY WITH CENTERED IMAGE ================= */}
            {/* White area space is maximized and content is perfectly mobile responsive */}
            <section className="w-full bg-white pt-20 pb-24 px-4 sm:px-8 text-center text-black flex flex-col items-center">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">
                    
                    {/* Main Header */}
                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none">
                        Project Gallery
                    </h2>
                    
                    {/* Subtitle line */}
                    <p className="text-sm sm:text-base text-neutral-600 font-normal tracking-wide mt-2">
                        Inspiring Spaces Crafted for Outdoor Living
                    </p>

                    {/* Centered Gallery Image with explicit layout ratio handles */}
                    <div className="w-full max-w-2xl mt-10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.05)] bg-neutral-100 aspect-[4/3] sm:aspect-[16/11]">
                        <img 
                            src="/bg2.png" 
                            alt="Luxury Pergola Poolside Project" 
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </section>
      <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto">

                    {/* ================= MOBILE VIEW (Figma Perfect Masonry Style) ================= */}
                    <div className="flex md:hidden flex-row gap-3 w-full">
                        {/* Left Column Stack */}
                        <div className="flex flex-col gap-3 w-1/2">
                            <Link to="/free-standing" className="relative rounded-[2px] overflow-hidden group flex items-end p-4 bg-[#7a7a7a] h-[260px] transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                                <div className="relative z-10 w-full flex items-center justify-between gap-1">
                                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide capitalize drop-shadow-sm leading-tight">
                                        Most Modern Free Standing
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/mounted-on-brackets" className="relative rounded-[2px] overflow-hidden group flex items-end p-4 bg-[#7a7a7a] h-[160px] transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                                <div className="relative z-10 w-full flex items-center justify-between gap-1">
                                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide capitalize drop-shadow-sm leading-tight">
                                        Mounted on brackets
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        {/* Right Column Stack */}
                        <div className="flex flex-col gap-3 w-1/2">
                            <Link to="/plain-modern-free-standing" className="relative rounded-[2px] overflow-hidden group flex items-end p-4 bg-[#7a7a7a] h-[160px] transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                                <div className="relative z-10 w-full flex items-center justify-between gap-1">
                                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide capitalize drop-shadow-sm leading-tight">
                                        Plain Modern Free Standing
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </Link>

                            <Link to="/attached-modern-pergolas" className="relative rounded-[2px] overflow-hidden group flex items-end p-4 bg-[#7a7a7a] h-[260px] transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                                <div className="relative z-10 w-full flex items-center justify-between gap-1">
                                    <span className="text-white text-xs sm:text-sm font-bold tracking-wide capitalize drop-shadow-sm leading-tight">
                                        Attached modern pergolas
                                    </span>
                                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-md shrink-0">
                                        <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* ================= DESKTOP VIEW (FIXED GAP AND SPANNING) ================= */}
                    {/* REMOVED: auto-rows-[240px] ko hta kar grid-rows-[240px_240px] kiya taake row content exact pixel locked size par lock rahe aur bottom grid boundary equal close ho sake */}
                    <div className="hidden md:grid grid-cols-3 grid-rows-[240px_240px] gap-5">
                        {/* Card 1 */}
                        <Link to="/free-standing" className="relative rounded-[2px] overflow-hidden group flex items-end p-6 bg-[#7a7a7a] col-span-1 row-span-2 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="relative z-10 w-full flex items-center justify-between">
                                <span className="text-white text-lg font-bold tracking-wide capitalize drop-shadow-md">Most Modern Free Standing</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
                            </div>
                        </Link>

                        {/* Card 2 */}
                        <Link to="/plain-modern-free-standing" className="relative rounded-[2px] overflow-hidden group flex items-end p-6 bg-[#7a7a7a] col-span-2 row-span-1 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="relative z-10 w-full flex items-center justify-between">
                                <span className="text-white text-lg font-bold tracking-wide capitalize drop-shadow-md">Plain Modern Free Standing</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
                            </div>
                        </Link>

                        {/* Card 3 */}
                        <Link to="/mounted-on-brackets" className="relative rounded-[2px] overflow-hidden group flex items-end p-6 bg-[#7a7a7a] col-span-1 row-span-1 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="relative z-10 w-full flex items-center justify-between">
                                <span className="text-white text-lg font-bold tracking-wide capitalize drop-shadow-md">Mounted on brackets</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
                            </div>
                        </Link>

                        {/* Card 4 */}
                        <Link to="/attached-modern-pergolas" className="relative rounded-[2px] overflow-hidden group flex items-end p-6 bg-[#7a7a7a] col-span-1 row-span-1 transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                            <div className="relative z-10 w-full flex items-center justify-between">
                                <span className="text-white text-lg font-bold tracking-wide capitalize drop-shadow-md">Attached modern pergolas</span>
                                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md transform group-hover:scale-110 transition-transform"><svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></div>
                            </div>
                        </Link>
                    </div>

                </div>
            </section>
            {/* Bottom Registered Component Layer Elements */}
            <TalkTo />
            <Icon />
            <Footer />
        </>
    );
};

export default PeroglasTwo;