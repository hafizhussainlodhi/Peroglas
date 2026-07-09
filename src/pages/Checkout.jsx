import { useState } from 'react';
import Footer from '../Component/Footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
<>
    <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 py-12 select-none">
      <div className="max-w-7xl mx-auto pt-[120px]">
        
        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ================= LEFT COLUMN: BILLING DETAILS FORM ================= */}
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start text-left gap-5 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 mb-2">
              Billing Details
            </h2>

            {/* First Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">First Name*</label>
              <input 
                type="text" 
                required 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Company Name */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Company Name</label>
              <input 
                type="text" 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Street Address */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Street Address*</label>
              <input 
                type="text" 
                required 
                placeholder="House number and street name"
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all placeholder-neutral-400" 
              />
            </div>

            {/* Apartment, suite etc */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Apartment, suite, unit etc. (optional)</label>
              <input 
                type="text" 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Town / City */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Town / City*</label>
              <input 
                type="text" 
                required 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Phone Number*</label>
              <input 
                type="tel" 
                required 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-xs font-semibold text-neutral-400">Email Address*</label>
              <input 
                type="email" 
                required 
                className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none transition-all" 
              />
            </div>

            {/* Save Info Checkbox */}
            <label className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-neutral-800 cursor-pointer mt-2 select-none">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-emerald-700 bg-neutral-100 border-neutral-300 rounded accent-emerald-800 focus:ring-0" 
              />
              <span>Save this information for faster check-out next time</span>
            </label>
          </div>

          {/* ================= RIGHT COLUMN: ORDER REVIEW & GATEWAYS ================= */}
          <div className="col-span-1 lg:col-span-5 w-full bg-white border border-neutral-100 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] text-left flex flex-col gap-5">
            
            {/* Table Header simulation labels */}
            <div className="flex items-center justify-between font-bold text-xs uppercase tracking-wider text-neutral-400 border-b border-neutral-100 pb-3">
              <span>Pergolas</span>
              <span>Price</span>
            </div>

            {/* Product Meta Card Item Line */}
            <div className="flex items-center justify-between gap-4 py-1">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md overflow-hidden bg-neutral-50 border border-neutral-100 shrink-0">
                  <img src="/single.png" alt="Product Thumbnail" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-semibold text-neutral-800 truncate max-w-[180px] sm:max-w-xs">
                  Attached modern
                </span>
              </div>
              <span className="text-sm font-bold text-neutral-900">$850</span>
            </div>

            {/* Totals Summary Stack Matrix */}
            <div className="flex flex-col gap-3.5 border-t border-b border-neutral-100 py-4 text-sm font-medium text-neutral-500">
              <div className="flex items-center justify-between">
                <span>Subtotal:</span>
                <span className="text-neutral-900 font-semibold">$1750</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping:</span>
                <span className="text-neutral-900 font-semibold">Free</span>
              </div>
            </div>

            <div className="flex items-center justify-between font-bold text-neutral-900 py-1">
              <span className="text-sm">Total:</span>
              <span className="text-lg font-black">$1750</span>
            </div>

<div className="flex flex-col gap-4 mt-2">
  
  {/* Option 1: Direct Bank Transfer */}
  <label className="flex items-start justify-between gap-3 cursor-pointer select-none">
    <div className="flex items-start gap-3">
      <input 
        type="radio" 
        name="payment" 
        value="bank"
        checked={paymentMethod === 'bank'}
        onChange={() => setPaymentMethod('bank')}
        className="mt-1 w-4 h-4 text-emerald-800 bg-white border-neutral-300 focus:ring-0 accent-black"
      />
      <div className="flex flex-col">
        <span className="text-sm font-bold text-neutral-900">Bank</span>
      </div>
    </div>
    
    {/* All Card Icons (l1, l2, l3, l4) Rendered Inline */}
    <div className="flex items-center gap-1.5 shrink-0">
      <img 
        src="/l1.png" 
        alt="Card Icon 1" 
        className="h-4 sm:h-5 w-auto object-contain"
      />
      <img 
        src="/l2.png" 
        alt="Card Icon 2" 
        className="h-4 sm:h-5 w-auto object-contain"
      />
      <img 
        src="/l3.png" 
        alt="Card Icon 3" 
        className="h-4 sm:h-5 w-auto object-contain"
      />
      <img 
        src="/l4.png" 
        alt="Card Icon 4" 
        className="h-4 sm:h-5 w-auto object-contain"
      />
    </div>
  </label>

  {/* Option 2: Cash on Delivery */}
  <label className="flex items-start gap-3 cursor-pointer select-none">
    <input 
      type="radio" 
      name="payment" 
      value="cod"
      checked={paymentMethod === 'cod'}
      onChange={() => setPaymentMethod('cod')}
      className="mt-1 w-4 h-4 text-emerald-800 bg-white border-neutral-300 focus:ring-0 accent-black"
    />
    <div className="flex flex-col">
      <span className="text-sm font-bold text-neutral-900">Cash on delivery</span>
    </div>
  </label>

</div>

            {/* Coupon Code Element Block */}
            <div className="flex items-center gap-2 mt-4 w-full">
              <input 
                type="text" 
                placeholder="Coupon Code" 
                className="flex-1 bg-white border border-neutral-300 rounded-md px-4 py-2.5 text-xs text-black placeholder-neutral-400 focus:outline-none focus:border-neutral-500"
              />
              <button 
                type="button"
                className="bg-[#005B52] text-white text-xs font-bold px-4 py-3 rounded-md hover:bg-teal-900 transition-colors shadow-sm whitespace-nowrap"
              >
                Apply Coupon
              </button>
            </div>

            {/* Place Order Trigger Button */}
            <button 
              type="submit"
              className="w-full bg-[#005B52] text-white text-sm font-bold py-3.5 px-6 rounded-md hover:bg-teal-900 transition-all text-center tracking-wide shadow-md mt-2 uppercase"
            >
              Place Order
            </button>

          </div>

        </form>

      </div>
    </div>


    <Footer/>
</>
  );
};

export default Checkout;