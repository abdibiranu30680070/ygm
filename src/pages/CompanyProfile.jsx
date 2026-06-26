/* src/pages/CompanyProfile.jsx */
import ProfileHero from '../components/sections/profile/ProfileHero';
import ProfileOverview from '../components/sections/profile/ProfileOverview';
import BusinessActivities from '../components/sections/profile/BusinessActivities';
import IndustryCapability from '../components/sections/profile/IndustryCapability';
import OperationalModel from '../components/sections/profile/OperationalModel';
import ManagementPhilosophy from '../components/sections/profile/ManagementPhilosophy';
import PartnershipApproach from '../components/sections/profile/PartnershipApproach';

export default function CompanyProfile() {
  return (
    <div className="company-profile-page fade-in">
      <div className="ambient-glow glow-indigo" style={{ top: '5%', left: '10%', width: '500px', height: '500px' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '25%', right: '5%', width: '400px', height: '400px' }}></div>

      <ProfileHero />
      <ProfileOverview />
      <BusinessActivities />
      <IndustryCapability />
      <OperationalModel />
      <ManagementPhilosophy />
      <PartnershipApproach />
    </div>
  );
}
