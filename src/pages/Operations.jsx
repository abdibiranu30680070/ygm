import PageHero from '../components/sections/PageHero';
import { miningData } from '../data/siteData';
import MiningOverview from '../components/sections/mining/MiningOverview';
import QuarryStrategy from '../components/sections/mining/QuarryStrategy';
import ExtractionProcess from '../components/sections/mining/ExtractionProcess';
import EquipmentFleet from '../components/sections/mining/EquipmentFleet';
import SafetyEnvironment from '../components/sections/mining/SafetyEnvironment';
import SustainabilityCommitment from '../components/sections/mining/SustainabilityCommitment';
import ProductionCapacity from '../components/sections/mining/ProductionCapacity';
import PlantOverview from '../components/sections/plant/PlantOverview';
import ProductionWorkflow from '../components/sections/plant/ProductionWorkflow';
import EquipmentTechnology from '../components/sections/plant/EquipmentTechnology';
import QualityControl from '../components/sections/plant/QualityControl';
import OutputCategories from '../components/sections/plant/OutputCategories';
import EnvironmentalEfficiency from '../components/sections/plant/EnvironmentalEfficiency';

export default function Operations() {
  return (
    <div className="operations-page fade-in" style={{ position: 'relative' }}>
      <div className="ambient-glow glow-indigo" style={{ position: 'absolute', top: '5%', left: '15%', width: '400px', height: '400px', pointerEvents: 'none' }}></div>

      {/* Mining Operations Section */}
      <PageHero title="Mining & Processing Operations" subtitle={miningData.hero.subtitle} badge="Operations" />
      <MiningOverview />
      <QuarryStrategy />
      <ExtractionProcess />
      <EquipmentFleet />
      <SafetyEnvironment />
      <SustainabilityCommitment />
      <ProductionCapacity />

      {/* Processing Plant Section (merged — seamless transition) */}
      <div id="processing-plant">
        <PlantOverview />
        <ProductionWorkflow />
        <EquipmentTechnology />
        <QualityControl />
        <OutputCategories />
        <EnvironmentalEfficiency />
      </div>
    </div>
  );
}
