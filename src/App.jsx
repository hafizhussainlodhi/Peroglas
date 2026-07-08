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

function App() {
  return (
    <Router>
      <div className="min-w-full min-h-screen bg-neutral-950 font-sans antialiased selection:bg-white/20">
        {/* Fixed Navbar top par rahega */}
        <Navbar />
        
        {/* App Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="/MostModern" element={<MostModern />} />  
        </Routes>
      </div>
    </Router>
  );
}

export default App;