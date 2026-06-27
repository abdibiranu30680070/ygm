/* src/components/layout/LoadingScreen.jsx */
import { Mountain } from 'lucide-react';
import '../../styles/loading.css';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <Mountain size={48} />
        </div>
        <div className="loading-text">YMG</div>
        <div className="loading-spinner"></div>
        <div className="loading-subtitle">Loading...</div>
      </div>
    </div>
  );
}
