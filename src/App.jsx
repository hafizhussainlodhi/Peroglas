import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './pages/Home';
import './index.css';
import OutdoorKitchens from './pages/OutdoorKitchens';
import TermsSer from './pages/TermsSer';
import RefPolicy from './pages/RefPolicy';
import OurStory from './pages/OurStory';
import ContactExpect from './pages/ContactExpect';
import PriPolicy from './pages/PriPolicy';
import Warranty from './pages/Warranty';
import Peroglas from './pages/Peroglas';
import PeroglasTwo from './pages/PeroglasTwo';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import MostModern from './pages/Most';
import PlainModern from './pages/PlanModern';
import Mounted from './pages/Mounted';
import Modern from './pages/Modern';
import Shop from './pages/Shop';
import SinglePro from './pages/SinglePro';
import Card from './pages/Card';
import Checkout from './pages/Checkout';
import Myaccount from './pages/Myaccount';
import Login from './pages/Login';
import Forget from './pages/Forget';
import Signup from './pages/Signup';
import NewPass from './pages/NewPass';

function App() {
  return (
    <Router>
      <div className="min-w-full min-h-screen bg-neutral-950 font-sans antialiased selection:bg-white/20">
        {/* Fixed Navbar top par rahega */}
        <Navbar />
        
        {/* App Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forget-password" element={<Forget />} />
          <Route path="/new-pass" element={<NewPass />} />
          <Route path="/outdoor-kitchens" element={<OutdoorKitchens />} />
          <Route path="/terms" element={<TermsSer />} />
          <Route path="/refund-policy" element={<RefPolicy />} />
          <Route path="/our-story" element={<OurStory />} /> 
          <Route path="/contact-us" element={<ContactExpect />} /> 
          <Route path="/privacy-policy" element={<PriPolicy />} /> 
          <Route path="/warranty" element={<Warranty />} />  
          <Route path="/inspiration-gallery" element={<Peroglas />} />  
          <Route path="/luxury-pergola" element={<PeroglasTwo />} />  
          <Route path="/blog" element={<Blog />} />  
          <Route path="/BlogDetails" element={<BlogDetails />} />  
          <Route path="/mostModern" element={<MostModern />} />  
          <Route path="/plain-modern-free-standing" element={<PlainModern />} />  
          <Route path="/mounted-on-brackets" element={<Mounted />} />  
          <Route path="/modern-wall-mounted" element={<Modern />} />  
          <Route path="/shop" element={<Shop />} />  
          <Route path="/single-product" element={<SinglePro />} />  
          <Route path="/cart" element={<Card />} />  
          <Route path="/checkout" element={<Checkout />} />  
          <Route path="/my-account" element={<Myaccount />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;