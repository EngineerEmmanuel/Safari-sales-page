import { useState } from "react";
// import LanguageSelector from "./LanguageSelector";
// for the translation
import { useTranslation } from 'react-i18next';

const Navigation = () => {
    // to have access to the translation
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    window.addEventListener("resize", ()=>{
        if(window.innerWidth >873 & isMobile === true ){
            setIsMobile(false)
        }
    })
    return ( 
        <nav>
            <div className="nav-con">
                <div className="logo-con">
                    <img src="https://retink.io/LOGO.svg" alt="" />
                </div>
                <ul>
                    <li> <a href="#">{t('Home')}</a></li>
                    <li> <a href="https://retink.io/about/">{t('About us')}</a></li>
                </ul>

                
                <button> <a href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>
                {/* <LanguageSelector/> */}
                <div className="mobile-icon" onClick={()=> setIsMobile(!isMobile)}>
                    {isMobile? <i class="fa-solid fa-xmark"></i>: <i class="fa-solid fa-bars"></i>}
                </div>
            </div>
            { isMobile &&
                <div className="mobile-menu">
                    <ul onClick={()=> setIsMobile(!isMobile)}>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="https://retink.io/about/">About Us</a></li>
                    </ul>
                    <button onClick={()=> setIsMobile(!isMobile)} > <a style={{color:"white"}} href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP" >Book  Trip Now</a></button>
                </div>
            }
        </nav>
     );
}
 
export default Navigation;