const features = [
  {
    id: 1,
    icon: "/6.png", // Free Easy Shipping icon
    title: "Free Easy Shipping",
    description: "Shipping for all pergola units is FREE. Can't beat that price. Choose your delivery timeframe."
  },
  {
    id: 2,
    icon: "/3.png", // Customer service icon
    title: "Customer service",
    description: "We run a small team that works closely with you. We promise to try our best to answer: ",
    phone: "+1 (786) 278-4406"
  },
  {
    id: 3,
    icon: "/5.png", // Incredible Warranty icon
    title: "Incredible Warranty",
    description: "All Luxury Pergola Pro, Ultra and Magnum units are guaranteed for as long as you live in your home. For warranty information ",
    linkText: "Click Here."
  },
  {
    id: 4,
    icon: "/4.png", // Secure Payments icon
    title: "Secure Payments",
    description: "All our pergolas are processed securely so you don't have to worry."
  }
];

const Icon = () => {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 px-6 sm:px-12 lg:px-16 text-[#000000]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 lg:gap-10 text-center items-start">
        
        {features.map((item) => (
          <div key={item.id} className="flex flex-col items-center max-w-sm mx-auto">
            {/* Icon Image */}
            <div className="mb-4 h-14 flex items-center justify-center">
              <img 
                src={item.icon} 
                alt={item.title} 
                className="h-12 w-auto object-contain select-none"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold tracking-tight mb-2">
              {item.title}
            </h3>

            {/* Description Paragraph */}
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed font-normal">
              {item.description}
              
              {/* Conditional Phone rendering */}
              {item.phone && (
                <span className="block font-bold mt-1 text-black whitespace-nowrap">
                  {item.phone}
                </span>
              )}

              {/* Conditional Link rendering */}
              {item.linkText && (
                <span className="font-bold underline cursor-pointer hover:text-neutral-600 transition-colors inline-block">
                  {item.linkText}
                </span>
              )}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Icon;