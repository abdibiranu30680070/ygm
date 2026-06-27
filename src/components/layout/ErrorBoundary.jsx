/* src/components/layout/ErrorBoundary.jsx */
import { Component } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-primary)',
          padding: 'var(--space-lg)'
        }}>
          <div className="glass-panel" style={{
            maxWidth: '500px',
            padding: 'var(--space-2xl)',
            textAlign: 'center'
          }}>
            <AlertTriangle size={64} style={{ color: 'var(--accent-danger)', marginBottom: 'var(--space-lg)' }} />
            <h2 style={{ fontSize: '1.8rem', marginBottom: 'var(--space-md)', color: 'var(--text-primary)' }}>
              Something went wrong
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-xl)', lineHeight: '1.6' }}>
              An unexpected error occurred. Please try refreshing the page or navigate back to the home page.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button
                onClick={() => window.location.reload()}
                className="btn btn-primary"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <RefreshCw size={16} />
                Refresh Page
              </button>
              <Link to="/" className="btn btn-secondary">
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
