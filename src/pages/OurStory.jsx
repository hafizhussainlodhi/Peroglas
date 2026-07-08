import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';
const OurStory = () => {
    
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <main className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">

                {/* Background Image Layer using bg2.png */}
                <div
                    className="absolute inset-0 bg-cover bg-center no-repeat z-0"
                    style={{ backgroundImage: "url('/bg2.png')" }}
                />

                {/* Figma Dark Cinematic Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 z-10" />

                {/* Hero Title Container */}
                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center pt-20">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                        Our Story
                    </h1>
                </div>
            </main>

            {/* ================= CONTENT BLOCK SECTION ================= */}
            {/* Desktop par perfect horizontal spread aur mobile par vertical center alignment */}
            <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">

                    {/* Left Column: Title (Takes 4 grid columns on desktop) */}
                    <div className="md:col-span-4 text-center md:text-left w-full">
                        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-neutral-900 tracking-tight leading-tight md:max-w-xs">
                            The Luxury Pergola
                        </h2>
                    </div>

                    {/* Right Column: Description Text (Takes 8 grid columns on desktop) */}
                    <div className="md:col-span-8 text-center md:text-left text-sm sm:text-base text-neutral-700 leading-relaxed font-normal max-w-3xl mx-auto md:mx-0">
                        <p>
                            We believe in creating products that last the test of time. That's why we create products that empower you to transform your home, improve its value, and bring quality American craftsmanship to the world. The pursuit of excellence never changes, but in that pursuit, we achieve unrivaled results.
                        </p>
                    </div>

                </div>
            </section>
            {/* ================= SECTION: FROM THE BEGINNING ================= */}
            {/* Off-white light gray background matching the Figma layout transition */}
            <section className="w-full bg-[#F9F9F9] py-16 sm:py-24 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Left Empty Column Spacer (Hidden on mobile, placeholder on desktop) */}
                    <div className="hidden md:block md:col-span-5 w-full h-full" />

                    {/* Right Text Content Block (Takes 7 columns on desktop) */}
                    <div className="md:col-span-7 flex flex-col justify-center items-start text-left max-w-2xl md:ml-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight">
                            From The Beginning
                        </h2>

                        <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            <p>
                                Starting as a family owned contracting company in 2012, the outdoor living space quickly became our focus. With years of construction background coupled with team members ready to help, the first sales and installations were not of louvered systems, but of any other type of shade product, whether it be a covered porch, sunroom, fixed awning, retractable awning, acrylic roof, drop shade, or any other product offered at the time, the company found a large gap in the outdoor space that was beginning to be filled.
                            </p>
                            <p>
                                When a pergola didn't keep the rain or sun out and a covered porch darkened the room adjacent, there were drawbacks to either concept. This is when the company picked up Louvered Systems, first becoming a dealer for a different manufacturer before finding fault in some aspects of its design and spending the next three years developing their own.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= SECTION: THE FIRST SHIPMENT ================= */}
            {/* Pure white background to break the visual layout sequence cleanly */}
            <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Left Text Content Block (Takes 7 columns on desktop) */}
                    <div className="md:col-span-7 flex flex-col justify-center items-start text-left max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight">
                            The First Shipment
                        </h2>

                        <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            <p>
                                After spending years in the field, making custom louvered pergolas, on-site, we finally had a design that the average homeowner could build themselves. That's when we launched our e-commerce store and it took off. Our first shipment was shortly after the launch and we've never looked back, offering louvered pergola kits to thousands of potential customers.
                            </p>
                        </div>
                    </div>

                    {/* Right Empty Column Spacer (Hidden on mobile, placeholder on desktop) */}
                    <div className="hidden md:block md:col-span-5 w-full h-full" />

                </div>
            </section>
            {/* ================= SECTION: OUR MISSION ================= */}
            {/* Outer wrapper with light off-white background */}
            <section className="w-full bg-[#F9F9F9] py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-black font-sans antialiased flex justify-center items-center">

                {/* Floating White Card with Elevation Shadow */}
                <div className="w-full max-w-5xl bg-white rounded-sm border border-neutral-100/60 p-8 sm:p-12 md:p-16 text-center shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)]">

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6">
                        Our Mission
                    </h2>

                    {/* Centered Mission Text Block */}
                    <div className="max-w-2xl mx-auto flex flex-col gap-4 text-xs sm:text-sm md:text-base text-neutral-600 leading-relaxed font-normal">
                        <p>
                            At The Luxury Pergola we have a very simple mission. We want to provide the highest quality product possible to our customers, with the best warranty, at a price better than any other product that meets international building code standards.
                        </p>
                        <p>
                            We endeavor to provide outstanding customer service guided by years of on the ground experience from our own time installing custom products.
                        </p>
                        <p>
                            From customer service to product build quality, our goal is to exceed expectations in a market that is increasingly deaf to customer needs.
                        </p>
                    </div>

                </div>
            </section>

            {/* ================= SECTION: TIKTOK CALLOUT ================= */}
            {/* pt-20 se content top par perfectly tight rahega aur pb-48 niche bada space chode ga */}
            <section className="w-full bg-white pt-20 pb-44 sm:pb-56 px-4 sm:px-8 text-center text-black flex flex-col items-center justify-start">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-neutral-900 tracking-tight leading-none">
                        The Luxury Pergola on Tiktok
                    </h2>

                    {/* Subtitle Message */}
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium tracking-wide mt-2">
                        Check out our official TikTok channel to learn all about The Luxury Pergola.
                    </p>

                    {/* Underlined Action Link */}
                    <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-neutral-900 underline mt-3 hover:text-neutral-600 transition-colors inline-flex items-center gap-1"
                    >
                        Visit Luxury Pergola on Tiktok →
                    </a>

                </div>
            </section>

            {/* ================= SECTION: INSTAGRAM CALLOUT ================= */}
            {/* Same properties to perfectly match the design grid alignment and height scale */}
            <section className="w-full bg-white pt-20 pb-44 sm:pb-56 px-4 sm:px-8 text-center text-black flex flex-col items-center justify-start">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-neutral-900 tracking-tight leading-none">
                        The Luxury Pergola on Instagram
                    </h2>

                    {/* Subtitle Message */}
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium tracking-wide mt-2">
                        Check out our official Instagram Account to learn all about The Luxury Pergola.
                    </p>

                    {/* Underlined Action Link */}
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-neutral-900 underline mt-3 hover:text-neutral-600 transition-colors inline-flex items-center gap-1"
                    >
                        Visit Luxury Pergola on Instagram →
                    </a>

                </div>
            </section>
            <TalkTo />
            <Icon />
            <Footer />
        </>
    );
};

export default OurStory;