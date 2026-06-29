/* src/pages/ProcessingPlant.jsx */
import PlantHero from '../components/sections/plant/PlantHero';
import PlantOverview from '../components/sections/plant/PlantOverview';
import ProductionWorkflow from '../components/sections/plant/ProductionWorkflow';
import EquipmentTechnology from '../components/sections/plant/EquipmentTechnology';
import QualityControl from '../components/sections/plant/QualityControl';
import OutputCategories from '../components/sections/plant/OutputCategories';
import EnvironmentalEfficiency from '../components/sections/plant/EnvironmentalEfficiency';

export default function ProcessingPlant() {
  return (
    <div className="processing-plant-page fade-in">
      <div className="ambient-glow glow-indigo" style={{ top: '5%', right: '10%', width: '250px', height: '250px' }}></div>
      <div className="ambient-glow glow-cyan" style={{ bottom: '25%', left: '5%', width: '200px', height: '200px' }}></div>

      <PlantHero />
      <PlantOverview />
      <ProductionWorkflow />
      <EquipmentTechnology />
      <QualityControl />
      <OutputCategories />
      <EnvironmentalEfficiency />
    </div>
  );
}
