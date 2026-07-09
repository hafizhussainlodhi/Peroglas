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
            <main
                className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/main.png')" }}
            >
                {/* Exact Dark Cinematic Overlay matching the Figma Image look */}
                <div className="absolute inset-0 bg-black/40 z-0" />

                {/* Hero Content Area */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center pt-12">

                    {/* Center Small Logo & Brand Name */}
                    <div className="flex items-center gap-3 mb-6 select-none">
                        <img src="/logo.png" alt="Pergolas Icon" className="h-9 w-auto object-contain invert brightness-0" />
                        <span className="text-white text-2xl font-bold tracking-wide">Pergolas</span>
                    </div>

                    {/* Main Headings */}
                    <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight max-w-4xl">
                        For Those Who Want The Best
                    </h1>

                    <p className="text-white text-xl sm:text-2xl md:text-4xl font-bold mt-3 tracking-tight">
                        America's #1 Pergola Kit
                    </p>

                    {/* CTA Buttons - Matching exactly with Figma labels */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
                        <Link
                            to="/free-standing"
                            className="w-full sm:w-52 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-all text-center text-sm tracking-wide shadow-md"
                        >
                            Free Standing Pergolas
                        </Link>
                        <Link
                            to="/outdoor-kitchens"
                            className="w-full sm:w-52 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-all text-center text-sm tracking-wide shadow-md"
                        >
                            Outdoor Kitchens
                        </Link>
                    </div>

                    {/* Bottom Features Text */}
                    <div className="flex items-center justify-center gap-4 text-white text-xs sm:text-sm font-medium mt-10 tracking-wide bg-black/10 px-4 py-1.5 rounded-full backdrop-blur-[2px]">
                        <span>10+ Years Experience</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span>Only USA Made Pergola Kit</span>
                    </div>

                </div>
            </main>

            {/* Icon Features List */}
            <Icon />
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
            {/* ================= INSPIRATION & GALLERY SECTION ================= */}
            <section className="w-full bg-white py-12 px-4 sm:px-8 lg:px-16 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[340px]">

                    {/* ================= LEFT BLOCK: INSPIRATION GALLERY ================= */}
                    <div className="relative rounded-sm p-8 md:p-12 flex flex-col justify-center items-start overflow-hidden bg-neutral-100 min-h-[300px] md:min-h-full">

                        {/* Background Image Layer (1.png) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
                            style={{ backgroundImage: "url('/1.png')" }}
                        />

                        {/* White Fade Gradient overlay matching the Figma look */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-0 bg-white/20 pointer-events-none z-10" />

                        {/* Content Container */}
                        <div className="relative z-20 max-w-md">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
                                Inspiration Gallery
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-neutral-800 max-w-md leading-relaxed font-normal">
                                Get inspired. See completed projects from our customers to get some ideas on how to improve your backyard today.
                            </p>
                            <Link
                                to="/inspiration-gallery"
                                className="mt-6 inline-block bg-black text-white text-xs sm:text-sm font-semibold py-3 px-8 rounded-sm hover:bg-neutral-800 transition-colors tracking-wide"
                            >
                                View Gallery
                            </Link>
                        </div>
                    </div>

                    {/* ================= RIGHT BLOCK: FROM OUR FAMILY TO YOURS ================= */}
                    <div className="relative rounded-sm p-8 md:p-12 flex flex-col justify-center items-start overflow-hidden bg-neutral-100 min-h-[300px] md:min-h-full">

                        {/* Background Image Layer (bg.png) */}
                        <div
                            className="absolute inset-0 bg-cover bg-center pointer-events-none z-0"
                            style={{ backgroundImage: "url('/bg.png')" }}
                        />

                        {/* White Fade Gradient overlay matching the Figma look exactly */}
                        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10" />
                        <div className="absolute inset-0 bg-white/20 pointer-events-none z-10" />

                        {/* Content Container */}
                        <div className="relative z-20 max-w-md">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-black leading-tight">
                                From Our Family to Yours
                            </h2>
                            <p className="mt-4 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
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