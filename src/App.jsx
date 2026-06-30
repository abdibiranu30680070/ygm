/* src/App.jsx */
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import ScrollToHashElement from './components/layout/ScrollToHashElement';
import LoadingScreen from './components/layout/LoadingScreen';
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
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
