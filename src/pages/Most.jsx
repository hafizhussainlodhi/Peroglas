import { Link } from 'react-router-dom';
import TalkTo from '../Component/TalkTo';
import Footer from '../Component/Footer';
import Icon from '../Component/Icon';
import ContactUs from '../Component/ContactUs';
import ContactOurTeam from '../Component/ContactOurTeam';

const MostModern = () => {
    return (
        <>
            
            <main className="relative min-h-[42vh] sm:min-h-[48vh] w-full flex items-center justify-center overflow-hidden bg-[#7a7a7a]">

                
                <div className="absolute inset-0 bg-gradient-to-b from-white via-[#cbcbcb]/30 to-black/95" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                
                <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center flex flex-col items-center pt-20">

                    
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-none">
                        Most modern free standing
                    </h1>

                    
                    <p className="text-white/95 text-base sm:text-lg font-medium mt-3 tracking-wide flex items-center gap-1.5">
                        Proudly Made in America 🇺🇸
                    </p>

                    
                    <Link
                        to="/schedule"
                        className="mt-6 bg-white text-black font-bold py-2.5 px-6 rounded-sm hover:bg-neutral-200 transition-all text-center text-xs sm:text-sm tracking-wide shadow-md"
                    >
                        Schedule A Conversation
                    </Link>

                </div>
            </main>

            
            
            <section className="w-full bg-white pt-20 pb-24 px-4 sm:px-8 text-center text-black flex flex-col items-center">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-2">

                    
                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-neutral-900 tracking-tight leading-none">
                        Project Gallery
                    </h2>

                    
                    <p className="text-sm sm:text-base text-neutral-600 font-normal tracking-wide mt-2">
                        Inspiring Spaces Crafted for Outdoor Living
                    </p>

                    
                    <div className="w-full max-w-2xl mt-10 rounded-xl overflow-hidden   aspect-[4/3] ">

                    </div>

                </div>
            </section>
            
            
            <section className="w-full bg-white py-16 sm:py-24 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    
                    <div className="md:col-span-7 flex flex-col justify-center items-start text-left max-w-2xl">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight">
                            The Start of Something Great
                        </h2>

                        <div className="mt-5 flex flex-col gap-4 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                            <p>
                                After years of designing and crafting custom outdoor kitchens on-site, we developed a seamless approach for homeowners to create their dream outdoor spaces. Our commitment to quality and innovation led us to specialize in insulated aluminum pergola kits, available in styles ranging from clean, modern designs to more feature-rich options. We also incorporate HDGE PVC composite cladding for enhanced durability and aesthetics.
                            </p>
                            <p>
                                Today, we take pride in transforming backyards into stunning outdoor living spaces, delivering solutions that exceed expectations and delight thousands of satisfied customers.
                            </p>
                        </div>
                    </div>

                    
                    <div className="hidden md:block md:col-span-5 w-full h-full" />

                </div>
            </section>

            
            
            <section className="w-full bg-[#F9F9F9] py-16 sm:py-24 px-6 sm:px-12 lg:px-24 text-black font-sans antialiased">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    
                    <div className="hidden md:block md:col-span-5 w-full h-full" />

                    
                    <div className="md:col-span-7 flex flex-col justify-center items-start text-left max-w-2xl md:ml-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-neutral-900 tracking-tight leading-tight">
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

            <ContactOurTeam />
            <ContactUs />
            <TalkTo />
            <Icon />
            <Footer />
        </>
    );
};

export default MostModern;