/* src/components/layout/SearchOverlay.jsx */
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ChevronRight, FileText } from 'lucide-react';
import { 
  homeData, 
  aboutData, 
  profileData, 
  productsData, 
  miningData, 
  processingData,
  commercialData,
  marketsData,
  sustainabilityData,
  futureExpansionData,
  corporateIdentityData
} from '../../data/siteData';

// Map pages to routes
const searchablePages = [
  { name: 'Home', path: '/', data: homeData },
  { name: 'About YMG', path: '/about', data: aboutData },
  { name: 'Company Profile & Corporate Identity', path: '/about#profile', data: { ...profileData, ...corporateIdentityData } },
  { name: 'Products Portfolio & Commercial Offerings', path: '/products', data: { ...productsData, ...commercialData } },
  { name: 'Mining & Processing Operations', path: '/operations', data: { ...miningData, ...processingData } },
  { name: 'Markets & Exports', path: '/markets', data: marketsData },
  { name: 'Sustainability & ESG', path: '/sustainability', data: sustainabilityData },
  { name: 'Future Vision & Strategic Roadmap', path: '/future-vision', data: futureExpansionData }
];

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) {
      setResults([]);
      return;
    }

    const cleanQuery = val.toLowerCase().trim();
    const matches = [];

    // Helper to recursively scan object values
    const searchInObject = (obj) => {
      const found = [];
      const traverse = (item) => {
        if (!item) return;
        if (typeof item === 'string') {
          if (item.toLowerCase().includes(cleanQuery)) {
            // grab a small snippet
            const idx = item.toLowerCase().indexOf(cleanQuery);
            const start = Math.max(0, idx - 40);
            const end = Math.min(item.length, idx + cleanQuery.length + 40);
            let snippet = item.substring(start, end);
            if (start > 0) snippet = '...' + snippet;
            if (end < item.length) snippet = snippet + '...';
            found.push(snippet);
          }
        } else if (Array.isArray(item)) {
          item.forEach(traverse);
        } else if (typeof item === 'object') {
          Object.values(item).forEach(traverse);
        }
      };
      traverse(obj);
      return found;
    };

    searchablePages.forEach(page => {
      const pageMatches = searchInObject(page.data);
      if (pageMatches.length > 0) {
        matches.push({
          pageName: page.name,
          path: page.path,
          snippets: pageMatches.slice(0, 3) // max 3 snippets per page
        });
      }
    });

    setResults(matches);
  };

  const handleSelectResult = (path) => {
    navigate(path);
    handleClose();
  };

  const handleClose = () => {
    setQuery('');
    setResults([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(250, 248, 245, 0.96)',
      backdropFilter: 'blur(15px)',
      zIndex: 2000,
      display: 'flex',
      flexDirection: 'column',
      padding: '40px 20px',
      animation: 'fadeIn 0.2s ease-out'
    }}>
      {/* Close button */}
      <button 
        onClick={handleClose}
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--text-primary)',
          padding: '8px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--bg-secondary)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <X size={28} />
      </button>

      {/* Main search container */}
      <div style={{ maxWidth: '750px', width: '100%', margin: '40px auto 0 auto', display: 'flex', flexDirection: 'column', gap: '30px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={26} style={{ position: 'absolute', left: '20px', color: 'var(--accent-primary)' }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search YMG company database, pages, products..."
            style={{
              width: '100%',
              padding: '20px 20px 20px 60px',
              fontSize: '1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '2px solid var(--accent-primary)',
              background: 'white',
              color: 'var(--text-primary)',
              boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
              outline: 'none',
              fontFamily: 'var(--font-sans)'
            }}
          />
        </div>

        {/* Results section */}
        <div style={{ flexGrow: 1, overflowY: 'auto', maxHeight: '60vh', paddingRight: '10px' }}>
          {results.length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                Search Results ({results.length} pages match)
              </p>
              
              {results.map((res, idx) => (
                <div 
                  key={idx}
                  onClick={() => handleSelectResult(res.path)}
                  style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-primary)' }}>
                      <FileText size={18} />
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{res.pageName}</h4>
                    </div>
                    <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {res.snippets.map((snip, sIdx) => (
                      <p key={sIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontStyle: 'italic', background: 'var(--bg-secondary)', padding: '6px 12px', borderRadius: '4px' }}>
                        {snip}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : query.trim() ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--text-secondary)' }}>
              <p style={{ fontSize: '1.1rem' }}>No matches found for "{query}"</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '5px' }}>Try searching for generic terms like "granite", "export", "ESG" or "mining".</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-muted)', fontWeight: 700, letterSpacing: '0.05em' }}>
                Suggested Searches
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['Granite Slabs', 'Limestone Blocks', 'Quarry Mining', 'Diamond Wire Saw', 'Sustainability Policy', 'Ethiopia', 'Export Grades', 'Strategic Partners'].map((term, i) => (
                  <button
                    key={i}
                    onClick={() => handleSearch(term)}
                    style={{
                      background: 'white',
                      border: '1px solid var(--border-color)',
                      padding: '8px 16px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      color: 'var(--text-primary)',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = 'var(--accent-primary)';
                      e.target.style.backgroundColor = 'var(--bg-secondary)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'var(--border-color)';
                      e.target.style.backgroundColor = 'white';
                    }}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
