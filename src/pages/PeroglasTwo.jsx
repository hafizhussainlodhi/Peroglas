import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';
import TalkTo from '../Component/TalkTo';

const PergolasTwo = () => {
    // Array of images from i3 to i10 for the gallery grid layout
    const galleryImages = [
        { src: '/i3.png', alt: 'Modern Pergola Setup 1' },
        { src: '/i4.png', alt: 'Modern Pergola Setup 2' },
        { src: '/i5.png', alt: 'Modern Pergola Setup 3' },
        { src: '/i6.png', alt: 'Modern Pergola Setup 4' },
        { src: '/i7.png', alt: 'Modern Pergola Setup 5' },
        { src: '/i8.png', alt: 'Modern Pergola Setup 6' },
        { src: '/i9.png', alt: 'Modern Pergola Setup 7' },
        { src: '/i10.png', alt: 'Modern Pergola Setup 8' },
    ];

    const filterTabs = [
        { name: 'Most Modern Free Standing', active: true },
        { name: 'Outdoor Kitchen', active: false },
        { name: 'Attached Modern Pergolas', active: false },
        { name: 'Mounted On Brackets', active: false },
        { name: 'Norex Cladding', active: false }
    ];

    return (
        <div className="w-full bg-white font-sans antialiased text-black">

            {/* ================= HERO SPLIT BANNER SECTION ================= */}
            <main className="relative h-[380px] sm:h-[480px] md:h-[540px] w-full overflow-hidden">

                {/* Background Split Matrix Grid Layers */}
                <div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-2 z-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/i1.png')" }}
                    />
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
                        style={{ backgroundImage: "url('/i2.png')" }}
                    />
                </div>

                {/* Global Dark Contrasting Filters */}
                <div className="absolute inset-0 bg-black/35 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />

                {/* Centralized Text Content Overlays */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-white text-3xl sm:text-5xl md:text-[54px] font-bold tracking-tight leading-none select-none">
                        Inspiration Gallery
                    </h1>

                    <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-normal mt-4 max-w-2xl leading-relaxed drop-shadow-sm">
                        Explore our Inspiration Gallery to discover stunning pergola designs and high-quality materials. Get inspired to create your perfect outdoor space!
                    </p>

                    <Link
                        to="/contact-us"
                        className="mt-6 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>
                </div>
            </main>

            {/* ================= FILTER NAV CHIPS BAR ================= */}
            <section className="w-full pt-12 pb-6 px-4 sm:px-8 lg:px-16 bg-white overflow-x-auto scrollbar-none">
                <div className="max-w-7xl mx-auto flex flex-row items-center justify-start md:justify-center gap-3 whitespace-nowrap">
                    {filterTabs.map((tab, idx) => (
                        <button
                            key={idx}
                            className={`px-4 py-2 text-xs font-bold rounded-[3px] tracking-wide transition-all duration-200 ${tab.active
                                    ? 'bg-[#005B52] text-white'
                                    : 'bg-black text-white hover:bg-neutral-800'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* ================= MAIN MATRIX GRID GALLERY ================= */}
            <section className="w-full pb-20 px-4 sm:px-8 lg:px-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {galleryImages.map((image, idx) => (
                        <div
                            key={idx}
                            className="w-full aspect-[4/5] sm:aspect-[11/12] rounded-xl overflow-hidden shadow-sm border border-neutral-100 bg-neutral-50 group cursor-pointer"
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover select-none transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </section>

            <TalkTo />

            <Footer />
        </div>
    );
};

export default PergolasTwo;