/* src/components/layout/AppLayout.jsx */
import Navbar from './Navbar';
import Footer from './Footer';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

export default function AppLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className={`app-layout ${isHome ? 'home-layout' : ''}`} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flexGrow: 1, paddingTop: isHome ? 0 : '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
