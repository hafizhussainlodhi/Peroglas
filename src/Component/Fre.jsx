import { useState } from 'react';

const FAQSection = () => {
  // State to track which FAQ item is currently open (null means all closed)
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    { question: "How long do the pergolas last?" },
    { question: "What sizes of columns and loading beams do you offer?" },
    { question: "Do you offer different colors?" },
    { question: "What areas do you serve?" },
    { question: "Do you offer free estimates?" },
    { question: "How long does the installation take?" },
    { question: "How do your payment terms work?" },
    { question: "Do you handle all the electrical work, including devices?" },
    { question: "Do you obtain permits from the city or county?" },
    { question: "What is the usual waiting time after signing the contract?" }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-8 text-black select-none font-sans antialiased">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Main Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black uppercase tracking-tight text-center mb-10 text-neutral-900">
          Frequently Asked Questions
        </h2>

        {/* FAQ Accordion Stack */}
        <div className="w-full flex flex-col gap-4 max-w-3xl">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className="w-full bg-white rounded-md border border-neutral-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-300"
              >
                {/* Accordion Header / Trigger Row */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left font-bold text-sm sm:text-base md:text-lg text-neutral-900 focus:outline-none hover:bg-neutral-50/50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 text-neutral-800 shrink-0 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion Content Area (Smooth height transition wrapper) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] border-t border-neutral-100' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 flex flex-col items-start gap-5">
                    <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
                      This is just a dummy text that has been inserted as a placeholder for future content. 
                      While it may seem insignificant at first glance, the use of dummy text is a common 
                      practice in the design and publishing industry, as it allows designers and developers 
                      to visualize the layout and overall aesthetic of a project without being distracted by 
                      the actual content.
                    </p>
                    
                    {/* Learn More Button (Closes accordion container when clicked) */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents button event collision
                        setOpenIndex(null);  // Closes the accordion completely
                      }}
                      className="bg-[#FF8000] text-white font-semibold text-xs sm:text-sm py-2.5 px-6 rounded-md hover:bg-[#E07000] transition-colors shadow-sm tracking-wide"
                    >
                      Learn more
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;