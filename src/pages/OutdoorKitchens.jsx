import { Link } from 'react-router-dom';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import FAQSection from '../Component/Fre';

const OutdoorKitchens = () => {
  return (
    <>
      {/* ================= HERO BANNER SECTION ================= */}
      <main
        className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/oudoor.png')" }}
      >
        {/* Dark Overlays for Text Contrast */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />

        {/* Content Block */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center">
          <h1 className="text-white text-3xl sm:text-5xl md:text-[52px] font-bold tracking-tight leading-tight select-none">
            Outdoor Kitchens
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
      {/* ================= MAIN CONTENT AREA (All Black Areas Removed) ================= */}
     

        {/* ================= ROW 1: THE START OF SOMETHING GREAT ================= */}
        <section className="w-full py-12 md:py-16 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column Text Content */}
            <div className="md:col-span-6 order-2 md:order-1 flex flex-col justify-center items-start text-left">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-neutral-900 tracking-tight leading-tight">
                The Start of Something Great
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                <p>
                  After years of designing and crafting custom outdoor kitchens on-site, we developed a seamless approach for homeowners to create their dream outdoor spaces. Our commitment to quality and innovation led us to specialize in insulated aluminum pergola kits, available in styles ranging from clean, modern designs to more feature-rich options. We also incorporate NOREX PVC composite cladding for enhanced durability and aesthetics.
                </p>
                <p>
                  Today, we take pride in transforming backyards into stunning outdoor living spaces, delivering solutions that exceed expectations and delight thousands of satisfied customers.
                </p>
              </div>
            </div>

            {/* Right Column Image */}
            <div className="md:col-span-6 order-1 md:order-2 w-full">
              <img
                src="/pl-2.png"
                alt="Outdoor Kitchen Showcase Setup"
                className="w-full h-auto object-cover rounded-sm shadow-sm select-none"
              />
            </div>

          </div>
        </section>

        {/* ================= ROW 2: TRANSFORM YOUR BACKYARD ================= */}
        <section className="w-full pb-20 px-4 sm:px-8 lg:px-16 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            
            {/* Left Column Image */}
            <div className="md:col-span-6 w-full">
              <img
                src="/pl-3.png"
                alt="Stunning Custom Outdoor Kitchen Island"
                className="w-full h-auto object-cover rounded-sm shadow-sm select-none"
              />
            </div>

            {/* Right Column Text Content */}
            <div className="md:col-span-6 flex flex-col justify-center items-start text-left">
              <h2 className="text-2xl sm:text-3xl md:text-[34px] font-bold text-neutral-900 tracking-tight leading-tight">
                Transform Your Backyard with a Stunning Outdoor Kitchen
              </h2>
              <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                <p>
                  Elevate your outdoor living with a custom-designed outdoor kitchen that combines style, functionality, and durability. Whether you're hosting family gatherings, grilling for friends, or enjoying a quiet evening, our outdoor kitchens are built to enhance your space and create unforgettable experiences. From sleek countertops and built-in grills to fully equipped setups with refrigerators and storage, we tailor every detail to match your vision and lifestyle.
                </p>
                <p>
                  To help you visualize your dream space, we offer 3D designs in four different shapes, allowing you to see how your outdoor kitchen will look before it's built. Make your backyard the ultimate entertainment destination with an outdoor kitchen that's as beautiful as it is practical.
                </p>
              </div>
            </div>

          </div>
        </section>




      {/* ================= UTILITY SECTIONS ================= */}
            <FAQSection />
      <TalkTo />
      <Footer />
    </>
  );
};

export default OutdoorKitchens;