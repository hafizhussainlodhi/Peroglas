import Footer from '../Component/Footer';
import ContactOurTeam from '../Component/ContactOurTeam';
import ContactUs from '../Component/ContactUs';
const ContactExpect = () => {

    return (
        <>
            <main className="relative h-[360px] sm:h-[460px] md:h-[520px] w-full flex items-center justify-center overflow-hidden">

                {/* Background Image Layer using bg3.png */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                    style={{ backgroundImage: "url('/bg3.png')" }}
                />

                {/* Figma Dark Cinematic Overlays for Text Contrast */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 z-10" />

                {/* Hero Title Container - Centered Automatically */}
                <div className="relative z-20 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center w-full">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight select-none">
                        Contact Us

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