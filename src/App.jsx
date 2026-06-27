/* src/App.jsx */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import ScrollToHashElement from './components/layout/ScrollToHashElement';
import Home from './pages/Home';
import About from './pages/About';
import CompanyProfile from './pages/CompanyProfile';
import Products from './pages/Products';
import Commercial from './pages/Commercial';
import Operations from './pages/Operations';
import MiningOperations from './pages/MiningOperations';
import ProcessingPlant from './pages/ProcessingPlant';
import Markets from './pages/Markets';
import Sustainability from './pages/Sustainability';
import FutureVision from './pages/FutureVision';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/profile" element={<CompanyProfile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/commercial" element={<Commercial />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/operations/mining" element={<MiningOperations />} />
          <Route path="/operations/plant" element={<ProcessingPlant />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/future-vision" element={<FutureVision />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
