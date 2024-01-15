import NavbarLayout from '../component/Template/NavbarLayout';
import FlowerLayout from '../component/Template/FlowerLayout';
import LightingLeftLayout from '../component/Template/LightingLeftLayout';
import HeroSectionCTA from '../component/Template/HeroSectionCTA';
import InformationBar from '../component/Template/InformationBar';
const HeroSection = () => {
    return (
        <div className={`w-full h-screen overflow-x-hidden relative`}>
            <NavbarLayout></NavbarLayout>
            <FlowerLayout></FlowerLayout>
            <LightingLeftLayout></LightingLeftLayout>
            <HeroSectionCTA></HeroSectionCTA>
            <InformationBar></InformationBar>
        </div>
    )
}

export default HeroSection