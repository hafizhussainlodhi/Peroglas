import { useState } from 'react';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';

const Card = () => {
  // Mock cart items data with explicit figma states
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Attached modern pergolas', size: '10 x 10', color: 'White', price: 145, quantity: 1 },
    { id: 2, title: 'Attached modern pergolas', size: '10 x 10', color: 'Red', price: 180, quantity: 1 },
    { id: 3, title: 'Attached modern pergolas', size: '10 x 10', color: 'Blue', price: 240, quantity: 1 }
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
<>
    <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 py-12 select-none">
      <div className="max-w-7xl mx-auto pt-[120px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ================= LEFT SIDE: CART ITEMS LIST ================= */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-4">
          <div className="w-full border border-neutral-100 rounded-2xl p-4 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex flex-col gap-6">
            
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4 pb-6 border-b border-neutral-100 last:border-none last:pb-0 relative">
                
                {/* Product Thumbnail (single.png) */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-neutral-50 rounded-xl overflow-hidden shrink-0 border border-neutral-100">
                  <img src="/single.png" alt={item.title} className="w-full h-full object-cover" />
                </div>

                {/* Product Meta Details */}
                <div className="flex flex-col text-left flex-1 min-w-0 pr-8">
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 truncate">{item.title}</h3>
                  <span className="text-[11px] text-neutral-400 mt-0.5">Size: <span className="text-neutral-600 font-medium">{item.size}</span></span>
                  <span className="text-[11px] text-neutral-400">Color: <span className="text-neutral-600 font-medium">{item.color}</span></span>
                  <span className="font-bold text-base sm:text-lg text-neutral-900 mt-2">${item.price}</span>
                </div>

                {/* Trash Delete Control Action */}
                <button 
                  onClick={() => removeItem(item.id)}
                  className="absolute top-0 right-0 text-red-500 hover:text-red-700 transition-colors p-1"
                  aria-label="Remove item"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>

                {/* Quantity Controls Row Counter */}
                <div className="absolute bottom-6 right-0 sm:bottom-0 bg-[#F5F5F5] rounded-full flex items-center px-3 py-1 font-bold text-xs sm:text-sm">
                  <button onClick={() => updateQuantity(item.id, -1)} className="px-2 text-neutral-500 hover:text-black">-</button>
                  <span className="px-2 min-w-[20px] text-center text-neutral-800">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)} className="px-2 text-neutral-500 hover:text-black">+</button>
                </div>

              </div>
            ))}

          </div>

          {/* Bottom Update Card Trigger Button */}
          <button className="bg-black text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full hover:bg-neutral-800 transition-colors tracking-wide self-start shadow-sm mt-2">
            Updated Cart
          </button>
        </div>

        {/* ================= RIGHT SIDE: ORDER SUMMARY CARD ================= */}
        <div className="col-span-1 lg:col-span-5 w-full bg-white border border-neutral-100 rounded-2xl p-6 shadow-[0_4px_25px_rgba(0,0,0,0.03)] text-left flex flex-col">
          <h2 className="text-xl font-bold mb-6 text-neutral-900 tracking-tight">Order Summary</h2>
          
          {/* Calculations Breakdowns Rows stack */}
          <div className="flex flex-col gap-4 pb-5 border-b border-neutral-100 text-sm font-medium text-neutral-500">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span className="text-black font-bold text-base">$565</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500 font-bold text-base">-$113</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Delivery Fee</span>
              <span className="text-black font-bold text-base">$15</span>
            </div>
          </div>

          {/* Grand Total Row */}
          <div className="flex items-center justify-between py-5 text-neutral-900 font-bold">
            <span className="text-sm">Total</span>
            <span className="text-2xl font-black">$467</span>
          </div>

          {/* Promo Code Input Segment */}
          <div className="flex items-center gap-2 mt-2 w-full">
            <div className="relative flex-1 bg-[#F5F5F5] rounded-full flex items-center px-4 py-2.5">
              <svg className="w-4 h-4 text-neutral-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20a1 1 0 02-1-1v-4.586a1 1 0 01.293-.707l7-7a1 1 0 011.414 0l4.586 4.586a1 1 0 010 1.414l-7 7a1 1 0 01-.707.293H6.5c-.265 0-.52-.105-.707-.293L5.5 19.5" />
              </svg>
              <input 
                type="text" 
                placeholder="Add promo code" 
                className="w-full bg-transparent text-xs text-black placeholder-neutral-400 focus:outline-none"
              />
            </div>
            <button className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors shadow-sm">
              Apply
            </button>
          </div>

          {/* Main Checkout Trigger Action */}
          <button className="w-full bg-black text-white text-xs sm:text-sm font-bold py-3.5 px-6 rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 mt-6 tracking-wide shadow-md">
          <Link to="/checkout">
            <span>Go to Checkout</span>
          </Link>
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

        </div>

      </div>
    </div>

    <Footer/>
</>
  );
};

export default Card;