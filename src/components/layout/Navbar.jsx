/* src/components/layout/Navbar.jsx */
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Search,
  X,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import SearchOverlay from './SearchOverlay';
import '../../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState({});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleDropdown = (itemTo) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [itemTo]: !prev[itemTo]
    }));
  };

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' ? 'active' : '';
    return location.pathname.startsWith(path) ? 'active' : '';
  };
  const isHome = location.pathname === '/';

  const navItems = [
    { to: '/', label: 'Home' },
    {
      to: '/about',
      label: 'About',
      children: [
        { to: '/about', label: 'About YMG' },
        { to: '/about/profile', label: 'Company Profile' },
      ]
    },
    {
      to: '/products',
      label: 'Products',
      children: [
        { to: '/products', label: 'Products Portfolio' },
        { to: '/products/commercial', label: 'Commercial Offerings' },
      ]
    },
    {
      to: '/operations',
      label: 'Operations',
      children: [
        { to: '/operations', label: 'Operations Overview' },
        { to: '/operations/mining', label: 'Mining Operations' },
        { to: '/operations/plant', label: 'Processing Plant' },
      ]
    },
    { to: '/markets', label: 'Markets' },
    { to: '/sustainability', label: 'Sustainability' },
    { to: '/future-vision', label: 'Future Vision' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHome ? 'home-navbar' : ''}`}>
        <div className={isHome ? 'home-nav-shell' : 'navbar-plain-shell'}>
          {isHome && (
            <div className="home-nav-top">
              <div className="home-nav-contact">
                <span><MapPin size={16} /> Addis Ababa, Ethiopia</span>
                <span><Mail size={16} /> info@ymg.com</span>
              </div>
             <div className="home-nav-socials" aria-label="Social links">
  <a
    href="https://facebook.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="https://instagram.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram size={18} />
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="X"
  >
    <FaXTwitter size={18} />
  </a>

  <a href="#" aria-label="Language">
    <Globe2 size={18} />
  </a>
</div>
            </div>
          )}

        <div className={`${isHome ? 'home-nav-main' : 'container navbar-container'}`}>
          <Link to="/" className="logo" onClick={closeMenu}>
            <img className="logo-image" src="/ymg-logo.svg" alt="YMG" />
          </Link>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            {navItems.map((item) => (
              <li key={item.to} className={item.children ? 'nav-item-dropdown' : ''}>
                {item.children ? (
                  <>
                    <button
                      className={`nav-link ${isActive(item.to)}`}
                      onClick={(e) => {
                        e.preventDefault();
                        toggleDropdown(item.to);
                      }}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        width: '100%',
                        textAlign: 'left',
                        padding: '6px 0',
                        color: 'inherit',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        fontFamily: 'var(--font-accent)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {item.label}
                      {openDropdowns[item.to] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    <ul className="dropdown-menu" style={{ display: openDropdowns[item.to] ? 'block' : 'none' }}>
                      {item.children.map((subItem) => (
                        <li key={subItem.to}>
                          <Link to={subItem.to} className="dropdown-item" onClick={closeMenu}>
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to} className={`nav-link ${isActive(item.to)}`} onClick={closeMenu}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions" style={{ gap: '12px' }}>
            {/* Search Trigger Button */}
            <button 
              onClick={() => setIsSearchOpen(true)}
              style={{
                background: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '8px 12px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-secondary)',
                transition: 'all var(--transition-fast)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-primary)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
              aria-label="Open Search"
            >
              <Search size={18} style={{ color: 'var(--accent-primary)' }} />
            </button>

            <a href="/#contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.85rem' }} onClick={closeMenu}>
              Contact Us
            </a>
          </div>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        </div>
      </nav>

      {/* Global Search Overlay Modal */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
