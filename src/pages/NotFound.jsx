/* src/pages/NotFound.jsx */
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-primary)',
      padding: 'var(--space-lg)',
      marginTop: '80px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '600px',
        padding: 'var(--space-3xl)',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '6rem',
          fontWeight: '800',
          color: 'var(--accent-primary)',
          lineHeight: '1',
          marginBottom: 'var(--space-md)',
          fontFamily: 'var(--font-display)'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.8rem',
          marginBottom: 'var(--space-sm)',
          color: 'var(--text-primary)'
        }}>
          Page Not Found
        </h2>
        <p style={{
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-xl)',
          lineHeight: '1.6',
          fontSize: '1rem'
        }}>
          The page you're looking for doesn't exist or has been moved. Please check the URL or navigate back to the home page.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Home size={16} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn btn-secondary"
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
