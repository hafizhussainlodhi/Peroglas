import { Link } from 'react-router-dom';
import FAQSection from '../Component/Fre';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';

const Modern = () => {
    return (
        <div className="w-full bg-white font-sans antialiased text-black">

            <main
                className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/mo-1.png')" }}
            >
                {/* Dark Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />

                {/* Content Block */}
                <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
                    <h1 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-tight select-none">
                        Modern Wall-Mounted Pergolas
                    </h1>

                    <p className="text-white text-sm sm:text-lg font-medium mt-3 tracking-wide flex items-center justify-center gap-1.5 select-none">
                        Proudly Made in America 🇺🇸
                    </p>

                    <Link
                        to="/contact-us"
                        className="mt-6 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>
                </div>
            </main>

            <section className="w-full mt-12 md:mt-16 pb-16 md:pb-20 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">

                    {/* Left Column Text Content */}
                    <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center items-start text-left">
                        <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-neutral-900 tracking-tight leading-tight font-sans">
                            Stylish Solutions to Enhance Your Outdoor Space
                        </h2>
                        <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            <p>
                                Wall-mounted pergolas extend your living space by connecting directly to your home’s structure. They create a smooth transition between indoor and outdoor areas with sleek lines and minimalist designs that complement modern architecture. These structures provide shade and elegance without taking up extra space.

                                Made from durable materials like aluminum, steel, or composite wood, they are built to last and need little maintenance.
                            </p>
                            <p>
                                One of the most significant advantages of mounted pergolas is their ability to save space. By eliminating the need for support posts, they provide all the benefits of a pergola without crowding your outdoor area. Simple to install and maintain, mounted pergolas are perfect for homeowners who want to upgrade their outdoor living space without hassle.
                            </p>
                        </div>
                    </div>

                    {/* Right Column Image */}
                    <div className="md:col-span-6 order-1 md:order-2 w-full">
                        <img
                            src="/pl-2.png"
                            alt="Mounted Pergolas Extension Showcase"
                            className="w-full h-auto object-cover rounded-sm shadow-sm select-none"
                        />
                    </div>

                </div>
            </section>


            <FAQSection />
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
            <TalkTo />

            <Footer />
        </div>

    );
};

export default Modern;