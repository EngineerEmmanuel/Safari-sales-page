import { useState } from "react";
// for the translation
import { useTranslation } from 'react-i18next';
const Community = () => {

    // to have access to the translation
    const { t } = useTranslation();

    const [first, setFirst]= useState()
    const [gridElement1, setGridElement1]=useState()
   const backgroundZoomLevel = "200%"

    const designerCon = ()=>{
        setFirst(
            {
                display:"block"
            }
        )
        setGridElement1(
            {
                width:"20rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
    }
    const designerConOut = ()=>{
        setFirst(
            {
                display:"none"
            }
        )
        setGridElement1(
            {
                width:"15rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
    }

    const [gridElement2, setGridElement2]=useState()
    const [second, setSecond] =useState()

    const developerCon = ()=>{
        setGridElement2(
            {
                width:"20rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
        setSecond(
            {
                display:"block"
            }
        )
    }

    const developerConOut = ()=>{
        setGridElement2(
            {
                width:"15rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
        setSecond(
            {
                display:"none"
            }
        )
    }
    const [gridElement3, setGridElement3]=useState();
    const [third, setThird]= useState()
    const researcher=()=>{
        setGridElement3(
            {
                width:"20rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
        setThird({
            display:"block"
        })
    }
    const researcherOut =()=>{
        setGridElement3(
            {
                width:"15rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
            }
        )
        setThird({
            display:"none"
        })
    }

    const [gridElement4, setGridElement4]= useState();
    const [fourth, setFourth] = useState();

    const tech =()=>{
        setGridElement4(
            {
                width:"20rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
        }
        )

        setFourth(
            {
                display:"block"
            }
        )
    }

    const techOut = ()=>{
        setGridElement4(
            {
                width:"15rem",
                transition:"0.3s",
                // backgroundSize:backgroundZoomLevel,
        }
        )
        setFourth(
            {
                display:"none"
            }
        )
    }
    return ( 
        <section className="community-section">
            <marquee behavior="scroll" direction="left">
            <h2 className="join-text">{t('Community h2')}</h2>
            </marquee>

            <div className="text-grid-con">
                <p> {t('Community f p')} <span>{t('Community f span')}</span> {t('Community s p')} <br/> {t('Community f br')} <span>{t('Community s span')}</span></p>
                <div className="grid-con">
                    <div className="who-are-you-grid-element">
                        <h2>{t('Who')}</h2>
                        <p>{t('Who p')}</p>
                    </div>
                    <div className="grid-element-imgs-1" style={gridElement1} onMouseOver={designerCon} onMouseOut={designerConOut}>
                        <div className="label label-1">{t('Designer')}</div>
                        <button style={first} className="grid-element1-btn"> <a style={{color:"white"}} href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>

                    </div>
                    <div className="grid-element-imgs-2" style={gridElement2} onMouseOver={developerCon} onMouseOut={developerConOut}>
                    <div className="label label-2">{t('Developer')}</div>
                    <button style={second} className="grid-element2-btn"> <a style={{color:"white"}} href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>
                        
                    </div>
                    <div className="grid-element-imgs-3" style={gridElement3} onMouseOver={researcher} onMouseOut={researcherOut}>
                    <div className="label label-3">{t('Researcher')}</div>
                    <button style={third} className="grid-element3-btn"> <a style={{color:"white"}} href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>
                        
                    </div>
                    <div className="grid-element-imgs-4" style={gridElement4} onMouseOver={tech} onMouseOut={techOut}>
                    <div className="label label-4">{t('Tech Enthusiast')}</div>
                    <button style={fourth} className="grid-element4-btn" > <a style={{color:"white"}}  href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>
                        
                    </div>
                </div>
            </div>
            <div className="community-section-btn-con">
                <button>  <a style={{color:"white"}}  href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP">{t('Book Trip Now')}</a></button>
            </div>
            
            

           
        </section>
     );
}
 
export default Community;