import { useState } from 'react';

const ContactUs = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xojzbjdr", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-4 sm:px-8 lg:px-16 flex items-center justify-center text-white">
      {/* Main Container Split Grid */}
      <div className="w-full max-w-7xl bg-white rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">
        
        {/* ================= LEFT SIDE: BLACK FORM BLOCK ================= */}
        <div className="bg-black p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-12 text-white">
              Contact us
            </h2>

            {/* Formspree Submission Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full bg-transparent border-b border-neutral-600 pb-2 text-sm sm:text-base text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full bg-transparent border-b border-neutral-600 pb-2 text-sm sm:text-base text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Phone Input */}
              <div className="flex flex-col gap-1">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  className="w-full bg-transparent border-b border-neutral-600 pb-2 text-sm sm:text-base text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full bg-transparent border-b border-neutral-600 pb-2 text-sm sm:text-base text-white placeholder-neutral-400 focus:outline-none focus:border-white transition-colors"
                />
              </div>

              {/* Newsletter Checkbox */}
              <div className="flex items-center gap-3 mt-2 select-none">
                <input 
                  type="checkbox" 
                  id="newsletter" 
                  name="newsletter"
                  className="w-4 h-4 rounded border-neutral-600 bg-transparent text-white focus:ring-0 focus:ring-offset-0 accent-white cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-xs text-neutral-300 cursor-pointer">
                  I would like to receive the newsletter.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-44 bg-white text-black font-semibold py-2.5 px-6 rounded-md hover:bg-neutral-200 transition-colors text-sm tracking-wide mt-4"
              >
                Submit
              </button>

              {/* Submission Status Alerts */}
              {status === "SUCCESS" && (
                <p className="text-emerald-400 text-xs sm:text-sm font-medium mt-2">
                  Thanks! Your message has been sent successfully.
                </p>
              )}
              {status === "ERROR" && (
                <p className="text-rose-400 text-xs sm:text-sm font-medium mt-2">
                  Ooops! There was a problem submitting your form.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* ================= RIGHT SIDE: WHITE MAP & DETAILS BLOCK ================= */}
        <div className="bg-white text-black p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-8">
          
          {/* Map Image Section */}
          <div className="w-full rounded-xl overflow-hidden shadow-sm border border-neutral-100">
            <img 
              src="/Location.png" 
              alt="Our Location Map" 
              className="w-full h-auto object-cover select-none"
            />
          </div>

          {/* Contact Details & Info */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-auto">
            <div className="flex flex-col gap-4 text-neutral-800 text-sm sm:text-base">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-black mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <p className="font-medium leading-relaxed">
                  8762 SW 133rd Street<br />
                  Miami, FL. 33176
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-black shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <p className="font-medium">+1 (786) 278-4406</p>
              </div>
            </div>

            {/* Social Media Links Stack right-aligned bottom */}
            <div className="flex items-center gap-3.5 self-center sm:self-end">
              <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                <i className="fab fa-youtube text-lg"></i>
              </a>
              <a href="#" className="text-black hover:text-neutral-600 transition-colors">
                <i className="fab fa-tiktok text-lg"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;