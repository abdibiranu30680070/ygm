/* src/App.jsx */
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import ScrollToHashElement from './components/layout/ScrollToHashElement';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Operations from './pages/Operations';
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
          <Route path="/products" element={<Products />} />
          <Route path="/operations" element={<Operations />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/future-vision" element={<FutureVision />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;
