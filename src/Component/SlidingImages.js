import firstImg from "../Images/Rectangle 13.svg";
import SecondImg from "../Images/Rectangle 15.svg";
import thirdImg from "../Images/Rectangle 17.svg";
import fouthImg from "../Images/Rectangle 18.svg";
import fivethImg from "../Images/Rectangle 19.svg";
import sixthImg from "../Images/Rectangle 20.svg";
import seventhImg from "../Images/Rectangle 21.svg";
import eightImg from "../Images/Rectangle 22.svg";



const SlidingImages = () => {
    return ( 
        <section>
            <div className="sliding-con">
                <img src={firstImg} alt="" />
                <img src={SecondImg} alt={SecondImg} />
                <img src={thirdImg} alt={thirdImg} />
                <img src={fouthImg} alt={fouthImg} />
                <img src={fivethImg} alt={fivethImg} />
                <img src={sixthImg} alt={sixthImg} />
                <img src={seventhImg} alt={seventhImg} />
                <img src={eightImg} alt={eightImg} />
            </div>
        </section>
     );
}
 
export default SlidingImages;