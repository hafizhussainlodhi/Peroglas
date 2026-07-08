import { Link } from 'react-router-dom';
import ContactOurTeam from '../Component/ContactOurTeam';
import ContactUs from '../Component/ContactUs';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';

const OutdoorKitchens = () => {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <main className="relative min-h-[60vh] sm:min-h-[65vh] w-full flex items-center justify-center overflow-hidden bg-[#7a7a7a]">

                {/* Figma Cinematic Background Gradient Layers */}
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/40 to-black/90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Hero Content Block */}
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-24">

                    {/* Main Title Heading */}
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                        Outdoor Kitchens
                    </h1>

                    {/* Subtitle Description with Flag icon mapping style */}
                    <p className="text-white/95 text-lg sm:text-xl font-medium mt-3 tracking-wide flex items-center gap-1.5">
                        Proudly Made in America 🇺🇸
                    </p>

                    {/* Action CTA Button */}
                    <Link
                        to="/schedule"
                        className="mt-6 bg-white text-black font-bold py-2.5 px-6 rounded-sm hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>
                </div>
            </main>

            <section className="w-full bg-white pt-28 sm:pt-36 pb-48 sm:pb-64 px-4 sm:px-8 text-center text-black flex flex-col items-center justify-start">
                <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-2">

                    {/* Main Large Header */}
                    <h2 className="text-4xl sm:text-5xl md:text-[54px] font-bold text-neutral-900 tracking-tight leading-none">
                        Project Gallery
                    </h2>

                    {/* Faded subtitle message line */}
                    <p className="text-sm sm:text-base md:text-lg text-neutral-800 font-normal tracking-wide mt-3 leading-relaxed">
                        Inspiring Spaces Crafted for Outdoor Living
                    </p>

                </div>

            </section>
            {/* ================= SECTION 1: THE START OF SOMETHING GREAT ================= */}
            {/* Off-white light gray background matching the Figma shift */}
            <section className="w-full bg-[#F9F9F9] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Text Block */}
                    <div className="flex flex-col justify-center items-start text-left max-w-xl">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                            The Start of Something Great
                        </h2>

                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            After years of designing and crafting custom outdoor kitchens on-site, we developed a seamless approach for homeowners to create their dream outdoor spaces. Our commitment to quality and innovation led us to specialize in insulated aluminum pergola kits, available in styles ranging from clean, modern designs to more traditional options. We also incorporate AERIS PVC composite cladding for enhanced durability and aesthetics.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            Today, we take pride in transforming backyards into stunning outdoor living spaces, delivering solutions that exceed expectations and delight thousands of satisfied customers.
                        </p>
                    </div>

                    {/* Right Empty Box (Figma layout ratio spacing holder) */}
                    <div className="hidden md:block w-full h-full" />

                </div>
            </section>

            {/* ================= SECTION 2: TRANSFORM YOUR BACKYARD ================= */}
            {/* Pure white background to create contrast from the section above */}
            <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* Left Empty Box (Hidden on mobile, layout spacer on desktop) */}
                    <div className="hidden md:block w-full h-full" />

                    {/* Right Text Block */}
                    <div className="flex flex-col justify-center items-start text-left max-w-xl md:ml-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight leading-tight">
                            Transform Your Backyard with a Stunning Outdoor Kitchen
                        </h2>

                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            Elevate your outdoor living with a custom-designed outdoor kitchen that combines style, functionality, and durability. Whether you're hosting family gatherings, grilling for friends, or enjoying a quiet evening, our outdoor kitchens are built to enhance your space and create unforgettable experiences. From sleek countertops and built-in grills to fully-equipped setups with refrigerators and storage, we tailor every detail to match your vision and lifestyle.
                        </p>

                        <p className="mt-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            To help you visualize your dream space, we offer 3D designs in four different shapes, allowing you to see how your outdoor kitchen will look before it's built. Make your backyard the ultimate entertainment destination with an outdoor kitchen that's as beautiful as it is practical.
                        </p>
                    </div>

                </div>
            </section>
            <ContactOurTeam/>
            <ContactUs/>
            <TalkTo/>
            <Icon/>
            <Footer/>
        </>
    );
};

export default OutdoorKitchens;