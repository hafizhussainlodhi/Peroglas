import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

const Signup = () => {
    return (
        <>
            <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center pt-[100px] pb-12">

                    {/* Left Side: Visual Showcase Image */}
                    <div className="w-full aspect-[4/3] md:aspect-square bg-neutral-50 rounded-sm overflow-hidden border border-neutral-100 shadow-sm">
                        <img src="/s2.png" alt="Poolside Pergola Showcase" className="w-full h-full object-cover select-none" />
                    </div>

                    {/* Right Side: Form Content Panel */}
                    <div className="flex flex-col items-start text-left max-w-md w-full mx-auto md:ml-auto md:mr-0">
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Create an account</h2>
                        <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 font-medium">Enter your details below</p>

                        <form className="w-full flex flex-col gap-4 mt-6" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="text"
                                placeholder="Name"
                                required
                                className="w-full bg-white border-b border-neutral-300 py-2.5 text-sm focus:outline-none focus:border-[#005B52] transition-colors placeholder-neutral-400"
                            />
                            <input
                                type="text"
                                placeholder="Email or Phone Number"
                                required
                                className="w-full bg-white border-b border-neutral-300 py-2.5 text-sm focus:outline-none focus:border-[#005B52] transition-colors placeholder-neutral-400"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                required
                                className="w-full bg-white border-b border-neutral-300 py-2.5 text-sm focus:outline-none focus:border-[#005B52] transition-colors placeholder-neutral-400"
                            />

                            <button type="submit" className="w-full mt-4 bg-[#005B52] text-white font-bold text-xs sm:text-sm py-3 rounded-sm hover:bg-teal-900 transition-all shadow-sm tracking-wide uppercase">
                                Create Account
                            </button>

                            {/* Google OAuth Option */}
                            <button type="button" className="w-full border border-neutral-300 rounded-sm py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold hover:bg-neutral-50 transition-colors">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google Logo" className="w-4 h-4 shrink-0" />
                                <span>Sign up with Google</span>
                            </button>

                            <span className="text-xs text-neutral-500 font-medium mt-4 self-center">
                                Already have an account?{' '}
                                <Link to="/login" className="text-black font-bold underline ml-1">Log in</Link>
                            </span>
                        </form>
                    </div>

                </div>
            </div>

            <Footer />

        </>
    );
};

export default Signup;