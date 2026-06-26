/* src/components/sections/about/VisionMission.jsx */
import { Eye, Target } from 'lucide-react';
import { aboutData } from '../../../data/siteData';

export default function VisionMission() {
  const { visionMission } = aboutData;
  return (
    <section className="section" style={{ borderBottom: '1px solid var(--border-color)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)' }}>
        {/* Vision */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-primary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <Eye size={24} style={{ color: 'var(--accent-primary)' }} />
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)' }}>{visionMission.vision.title}</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {visionMission.vision.text}
          </p>
        </div>

        {/* Mission */}
        <div className="glass-panel" style={{ padding: 'var(--space-2xl)', borderTop: '3px solid var(--accent-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
            <Target size={24} style={{ color: 'var(--accent-secondary)' }} />
            <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-display)' }}>{visionMission.mission.title}</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.8' }}>
            {visionMission.mission.text}
          </p>
        </div>
      </div>
    </section>
  );
}
