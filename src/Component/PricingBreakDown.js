// import data1 from "./Slider1Data";
// import data2 from "./BreakDownFolder/SliderData2";
import { useState } from "react";
import First from "./BreakDownFolder/Slider1Data";
import SecondBreakDown from "./BreakDownFolder/SliderData2";


const PricingBreakDown = () => {
    const [show, setShow] = useState(true);

    const next = ()=>{
        setShow(false);
        // if(show ===false){
        //     setShow(true)
        // }
    }
    const prev = ()=>{
        setShow(true);
        // if(show ===true){
        //     setShow(false)
        // }
    }
    return ( 
        <section className="break-down-section">
           
            <button onClick={prev} className="prev-btn"><i class="fa-solid fa-arrow-left"></i></button>
            <button onClick={next} className="next-btn"><i class="fa-solid fa-arrow-right"></i></button>
            {
                show ?  <First/> : <SecondBreakDown/>
            }
            
        </section>
     );
}
 
export default PricingBreakDown;