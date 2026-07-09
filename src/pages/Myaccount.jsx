import { useState } from 'react';
import Footer from '../Component/Footer';

const Myaccount = () => {
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    phone: '03212111623',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert('Changes saved successfully!');
  };

  return (
<>
    <div className="w-full bg-white text-black font-sans antialiased min-h-screen px-4 sm:px-8 lg:px-16 py-12 select-none">
      <div className="max-w-7xl mx-auto pt-[120px]">
        
        {/* Main Section Header Banner */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-left mb-10 text-neutral-900">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* ================= LEFT SIDE: ACCOUNT NAVIGATION DRAWER ================= */}
          <aside className="col-span-1 md:col-span-3 flex flex-col gap-6 text-left border-r border-neutral-100 pr-0 md:pr-4">
            
            {/* Group 1: Manage My Account */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold text-neutral-900 tracking-wide">Manage My Account</h2>
              <div className="flex flex-col gap-2 pl-4 text-xs sm:text-sm font-medium">
                <button className="text-[#005B52] font-semibold text-left">My Profile</button>
                <button className="text-neutral-400 hover:text-black text-left transition-colors">Address Book</button>
                <button className="text-neutral-400 hover:text-black text-left transition-colors">My Payment Options</button>
              </div>
            </div>

            {/* Group 2: My Orders */}
            <div className="flex flex-col gap-2">
              <h2 className="text-sm font-bold text-neutral-900 tracking-wide">My Orders</h2>
              <div className="flex flex-col gap-2 pl-4 text-xs sm:text-sm font-medium text-neutral-400">
                <button className="hover:text-black text-left transition-colors">My Returns</button>
                <button className="hover:text-black text-left transition-colors">My Cancellations</button>
              </div>
            </div>

          </aside>

          {/* ================= RIGHT SIDE: EDIT PROFILE COMPLEX FORM ================= */}
          <main className="col-span-1 md:col-span-9 w-full bg-white border border-neutral-100/70 rounded-sm p-6 sm:p-8 lg:p-10 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
            <h2 className="text-base sm:text-lg font-bold text-[#005B52] text-left mb-6">
              Edit Your Profile
            </h2>

            <form onSubmit={handleSave} className="flex flex-col gap-5 w-full">
              
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-neutral-800">First Name</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all text-neutral-700" 
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-neutral-800">Last Name</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all text-neutral-700" 
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-neutral-800">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all text-neutral-700" 
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-neutral-800">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all text-neutral-700" 
                  />
                </div>
              </div>

              {/* Password Changes Block Stack */}
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-1.5 text-left">
                  <label className="text-xs font-semibold text-neutral-800">Password Changes</label>
                  <input 
                    type="password" 
                    name="currentPassword"
                    placeholder="Current Password"
                    value={formData.currentPassword}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all placeholder-neutral-400 text-neutral-700" 
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <input 
                    type="password" 
                    name="newPassword"
                    placeholder="New Password"
                    value={formData.newPassword}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all placeholder-neutral-400 text-neutral-700" 
                  />
                </div>
                <div className="flex flex-col gap-1.5 text-left">
                  <input 
                    type="password" 
                    name="confirmPassword"
                    placeholder="Confirm New Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full bg-[#F5F5F5] border-none rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-neutral-200 transition-all placeholder-neutral-400 text-neutral-700" 
                  />
                </div>
              </div>

              {/* Actions Button Wrapper Row */}
              <div className="flex items-center justify-end gap-6 mt-4 w-full text-sm">
                <button 
                  type="button" 
                  className="text-neutral-900 font-medium hover:text-neutral-600 transition-colors"
                  onClick={() => setFormData(prev => ({ ...prev, currentPassword: '', newPassword: '', confirmPassword: '' }))}
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="bg-[#005B52] text-white font-bold py-2.5 px-8 rounded-sm hover:bg-teal-900 transition-all shadow-sm tracking-wide"
                >
                  Save Changes
                </button>
              </div>

            </form>
          </main>

        </div>

      </div>
    </div>

    <Footer/>
</>
  );
};

export default Myaccount;