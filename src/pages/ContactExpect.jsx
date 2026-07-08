import Footer from '../Component/Footer';
import ContactOurTeam from '../Component/ContactOurTeam';
import ContactUs from '../Component/ContactUs';
const ContactExpect = () => {
    
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <main className="relative min-h-[50vh] sm:min-h-[60vh] w-full flex items-center justify-center overflow-hidden">

                {/* Background Image Layer using bg2.png */}
                <div
                    className="absolute inset-0 bg-cover bg-center no-repeat z-0"
                    style={{ backgroundImage: "url('/bg3.png')" }}
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

            <ContactOurTeam />
            <ContactUs />
            <Footer />
        </>
    );
};

export default ContactExpect;