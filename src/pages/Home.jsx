import { Link } from 'react-router-dom';
import Icon from '../Component/Icon';
import ContactUs from '../Component/ContactUs';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';

const categories = [
    {
        id: 1,
        title: "Most Modern Free Standing",
        path: "/free-standing",
        bgImage: "",
        // Mobile par 280px tall, desktop par grid row spans automatic handle karega
        gridClasses: "col-span-1 h-[280px] md:h-full md:col-span-1 md:row-span-2"
    },
    {
        id: 2,
        title: "Plain Modern Free Standing",
        path: "/plain-modern-free-standing",
        bgImage: "",
        // Mobile par thoda chota box (160px)
        gridClasses: "col-span-1 h-[160px] md:h-[240px] md:col-span-2 md:row-span-1"
    },
    {
        id: 3,
        title: "Mounted on brackets",
        path: "/mounted-on-brackets",
        bgImage: "",
        gridClasses: "col-span-1 h-[160px] md:h-[240px] md:col-span-1 md:row-span-1"
    },
    {
        id: 4,
        title: "Attached modern pergolas",
        path: "/attached-modern-pergolas",
        bgImage: "",
        gridClasses: "col-span-1 h-[280px] md:h-full md:col-span-1 md:row-span-2"
    }
];

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#7a7a7a]">
                {/* Exact Gradient Overlay matching the Figma Image */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/40 to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Hero Content Area */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-20">
                    {/* Center Small Logo & Brand Name */}
                    <div className="flex items-center gap-3 mb-6 opacity-95">
                        <img src="/logo.png" alt="Pergolas Icon" className="h-9 w-auto object-contain" />
                        <span className="text-white text-2xl font-semibold tracking-wide">Pergolas</span>
                    </div>

                    {/* Main Headings */}
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-3xl">
                        For Those Who Want The Best
                    </h1>

                    <p className="text-white/95 text-xl sm:text-2xl md:text-3xl font-semibold mt-4 tracking-wide">
                        America's #1 Pergola Kit
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto">
                        <Link
                            to="/luxury-pergola"
                            className="w-full sm:w-44 bg-white text-black font-bold py-2.5 px-6 rounded-sm hover:bg-neutral-200 transition-all text-center text-sm tracking-wide shadow-md"
                        >
                            Luxury Pergola
                        </Link>
                        <Link
                            to="/outdoor-kitchens"
                            className="w-full sm:w-44 bg-white text-black font-bold py-2.5 px-6 rounded-sm hover:bg-neutral-200 transition-all text-center text-sm tracking-wide shadow-md"
                        >
                            Outdoor Kitchens
                        </Link>
                    </div>

                    {/* Bottom Features Text */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-white/90 text-xs sm:text-sm font-medium mt-12 tracking-wide">
                        <span>10+ Years Experience</span>
                        <span className="hidden sm:inline text-white/60">Only USA Made Pergola Kit</span>
                        <span className="sm:hidden">Only USA Made Pergola Kit</span>
                    </div>
                </div>
            </main>

            {/* Icon Features List */}
            <Icon />
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
            {/* ================= INSPIRATION & GALLERY SECTION ================= */}
            <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[340px]">

                    {/* Left Block: Inspiration Gallery */}
                    <div className="bg-[#F9F9F9] rounded-sm p-8 md:p-12 flex flex-col justify-center items-start border border-neutral-100/50">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                            Inspiration Gallery
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed font-normal">
                            Get inspired. See completed projects from our customers to get some ideas on how to improve your backyard today.
                        </p>
                        <Link
                            to="/inspiration-gallery"
                            className="mt-6 bg-black text-white text-xs sm:text-sm font-semibold py-3 px-8 rounded-sm hover:bg-neutral-800 transition-colors tracking-wide"
                        >
                            View Gallery
                        </Link>
                    </div>

                    {/* Right Block: From Our Family to Yours */}
                    <div className="relative rounded-sm p-8 md:p-12 flex flex-col justify-center items-start overflow-hidden bg-neutral-100 min-h-[280px] md:min-h-full">

                        {/* Background Image Layer from public folder */}
                        <div
                            className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
                            style={{ backgroundImage: "url('/bg.png')" }}
                        />

                        {/* White Fade Gradient overlay matching the Figma look exactly */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10" />

                        {/* Extra soft tint tint for blend */}
                        <div className="absolute inset-0 bg-white/30 pointer-events-none z-10" />

                        {/* Content Container (Keeps text on top of the image and layout layers) */}
                        <div className="relative z-20 max-w-md">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
                                From Our Family to Yours
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                                With the Luxury Pergola, our family took decades of outdoor experience to bring the best product possible to the market.
                            </p>
                            <Link
                                to="/our-story"
                                className="mt-6 inline-block bg-black text-white text-xs sm:text-sm font-semibold py-3 px-8 rounded-sm hover:bg-neutral-800 transition-colors tracking-wide"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                </div>
                
            </section>
            <ContactUs />
            <TalkTo />
            <Footer />

        </>
    );
};

export default Home;