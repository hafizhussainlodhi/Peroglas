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
    <section className="w-full bg-white py-12 px-4 sm:px-8 flex items-center justify-center text-black">
      {/* Outer Card with subtle shadow and border layout from Figma */}
      <div className="w-full max-w-2xl bg-white rounded-sm border border-neutral-100 p-6 sm:p-10 md:p-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)]">
        
        {/* Form Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-neutral-900 tracking-tight mb-8">
          Contact Form
        </h2>

        {/* Formspree Submission Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="firstName" className="text-xs sm:text-sm font-semibold text-neutral-800">
                First name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full bg-[#F7F7F7] border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="lastName" className="text-xs sm:text-sm font-semibold text-neutral-800">
                Last name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full bg-[#F7F7F7] border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
              />
            </div>
          </div>

          {/* Row 2: Email & Phone Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-neutral-800">
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-[#F7F7F7] border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-neutral-800">
                Phone number*
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full bg-[#F7F7F7] border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all"
              />
            </div>
          </div>

          {/* Row 3: Message Textarea */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-neutral-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-[#F7F7F7] border-none rounded-sm px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-400 transition-all resize-y min-h-[120px]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-3 px-6 rounded-sm hover:bg-neutral-900 transition-colors text-sm tracking-wide mt-2"
          >
            Submit
          </button>

          {/* Submission Status Alerts */}
          {status === "SUCCESS" && (
            <p className="text-emerald-600 text-xs sm:text-sm font-medium text-center mt-2 animate-fadeIn">
              Thanks! Your message has been sent successfully.
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-rose-600 text-xs sm:text-sm font-medium text-center mt-2 animate-fadeIn">
              Ooops! There was a problem submitting your form.
            </p>
          )}

        </form>
      </div>
    </section>
  );
};

export default ContactUs;