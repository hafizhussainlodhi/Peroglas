import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';

const NewPass = () => {
  return (
<>
    <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center pt-[100px] pb-12">
        
        {/* Left Side: Visual Showcase Image */}
        <div className="w-full aspect-[4/3] md:aspect-square bg-neutral-50 rounded-sm overflow-hidden border border-neutral-100 shadow-sm">
          <img src="/s4.png" alt="Backyard Poolside Louver View" className="w-full h-full object-cover select-none" />
        </div>

        {/* Right Side: Password Assignment inputs */}
        <div className="flex flex-col items-start text-left max-w-md w-full mx-auto md:ml-auto md:mr-0">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">New Password</h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1.5 font-medium">Reset password securely for your safety layer</p>

          <form className="w-full flex flex-col gap-4 mt-6" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="password" 
              placeholder="Enter New Password" 
              required
              className="w-full bg-white border-b border-neutral-300 py-2.5 text-sm focus:outline-none focus:border-[#005B52] transition-colors placeholder-neutral-400" 
            />
            <input 
              type="password" 
              placeholder="Confirm New Password" 
              required
              className="w-full bg-white border-b border-neutral-300 py-2.5 text-sm focus:outline-none focus:border-[#005B52] transition-colors placeholder-neutral-400" 
            />

            <button type="submit" className="w-full mt-4 bg-[#005B52] text-white font-bold text-xs sm:text-sm py-3 rounded-sm hover:bg-teal-900 transition-all shadow-sm tracking-wide uppercase">
              Confirm
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 font-medium mt-4 self-center">
              <span>Back to</span>
              <Link to="/login" className="text-black font-bold underline">Log In</Link>
            </div>
          </form>
        </div>

      </div>
    </div>

        <Footer/>

</>
  );
};

export default NewPass;