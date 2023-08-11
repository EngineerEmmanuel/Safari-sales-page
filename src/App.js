import Community from "./Component/Community";
import Footer from "./Component/Footer";
import HeroSection from "./Component/HeroSection";
import ImageSlideCon from "./Component/ImageSlideCon";
import Navigation from "./Component/Navigation";
import Pricing from "./Component/Pricing";
import Travel from "./Component/Travel";

import  "./Component/mediaQuery.css"

// for animations
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import PricingBreakDown from "./Component/PricingBreakDown";
import FaqSection from "./Component/FaqSection";


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Spin>
      <HeroSection/>
      </Spin>
      <Fade left>
      <Community/>
      </Fade>
      <ImageSlideCon/>
      <Fade bottom>
      <Pricing/>
      </Fade>
      <PricingBreakDown/>
      <FaqSection/>
      <Footer/>
      
    </div>
  );
}

export default App;
