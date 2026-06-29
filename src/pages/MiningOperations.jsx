/* src/pages/MiningOperations.jsx */
import MiningHero from '../components/sections/mining/MiningHero';
import MiningOverview from '../components/sections/mining/MiningOverview';
import QuarryStrategy from '../components/sections/mining/QuarryStrategy';
import ExtractionProcess from '../components/sections/mining/ExtractionProcess';
import EquipmentFleet from '../components/sections/mining/EquipmentFleet';
import SafetyEnvironment from '../components/sections/mining/SafetyEnvironment';
import SustainabilityCommitment from '../components/sections/mining/SustainabilityCommitment';
import ProductionCapacity from '../components/sections/mining/ProductionCapacity';

export default function MiningOperations() {
  return (
    <div className="mining-operations-page fade-in">
      <div className="ambient-glow glow-indigo" style={{ top: '5%', left: '15%', width: '250px', height: '250px' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '20%', right: '10%', width: '200px', height: '200px' }}></div>

      <MiningHero />
      <MiningOverview />
      <QuarryStrategy />
      <ExtractionProcess />
      <EquipmentFleet />
      <SafetyEnvironment />
      <SustainabilityCommitment />
      <ProductionCapacity />
    </div>
  );
}
