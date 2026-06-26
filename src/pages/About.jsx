import PageHero from '../components/sections/PageHero';
import { aboutData } from '../data/siteData';
import CompanyBackground from '../components/sections/about/CompanyBackground';
import IdentityPillars from '../components/sections/about/IdentityPillars';
import VisionMission from '../components/sections/about/VisionMission';
import CoreValues from '../components/sections/about/CoreValues';
import StrategicDirection from '../components/sections/about/StrategicDirection';
import LeadershipCommitment from '../components/sections/about/LeadershipCommitment';
import ProfileOverview from '../components/sections/profile/ProfileOverview';
import BusinessActivities from '../components/sections/profile/BusinessActivities';
import IndustryCapability from '../components/sections/profile/IndustryCapability';
import OperationalModel from '../components/sections/profile/OperationalModel';
import ManagementPhilosophy from '../components/sections/profile/ManagementPhilosophy';
import PartnershipApproach from '../components/sections/profile/PartnershipApproach';
import CorporateIdentitySection from '../components/sections/about/CorporateIdentitySection';

export default function About() {
  return (
    <div className="about-page fade-in" style={{ position: 'relative' }}>
      <div className="ambient-glow glow-indigo" style={{ position: 'absolute', top: '5%', right: '10%', width: '400px', height: '400px', pointerEvents: 'none' }}></div>

      <PageHero title="About YMG" subtitle={aboutData.hero.subtitle} badge={aboutData.hero.badge} />

      {/* About Section */}
      <CompanyBackground />
      <IdentityPillars />
      <VisionMission />
      <CoreValues />

      {/* Company Profile Section */}
      <div id="profile">
        <ProfileOverview />
        <BusinessActivities />
        <IndustryCapability />
        <OperationalModel />
      </div>

      {/* Corporate Identity & Branding Section */}
      <CorporateIdentitySection />

      {/* Strategic & Leadership */}
      <StrategicDirection />
      <ManagementPhilosophy />
      <PartnershipApproach />
      <LeadershipCommitment />
    </div>
  );
}
