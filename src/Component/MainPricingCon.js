import { useState } from "react";

// for the translation
import { useTranslation } from 'react-i18next';

const MainPricingCon = () => {
    const {t}= useTranslation();
    const [pay, setPay] =useState(t('Pay Now'));
    const payFunction = ()=>{
        setPay(t('Pay 150 Euros'))
    }
    const payFunctionOut = ()=>{
        setPay(t('Pay Now'))
    }
    return ( 
        <section className="pricing-section">
                <h2 className="copy4"> {t('Proceeds f p')} <br/> {t('Proceeds s p')}</h2>

            <div className="pricing-cons">
                <div className="pricing-1">
                    <div className="normal-con">
                        <div className="colored-circled">
                        
                                <img src="https://media.istockphoto.com/id/492611032/photo/the-african-king.jpg?s=612x612&w=0&k=20&c=SPP0WTaFwSTmB_QX7WrWbVBPXiKTg4e8ArZrUAo2G6k=" alt="" />
                        

                        </div>
                        <p>SIMBA</p>
                    </div>
                    <hr />
                    <h3><i class="fa-solid fa-euro-sign"></i> 1700</h3>
                    <p>{t('Payment card f p')}</p>
                    
                        <p className="margins"> {t('Payment card s p')} </p>
                    <div className="accommodation-text-con">
                        <h3> {t('Accommodation')}</h3>
                        <p>{t('Budget')}</p>
                        <p className="margins">{t('Meals')}</p>
                    </div>
                    <div className="transport">
                        <h3>{t('Transport')}</h3>
                        <p>{t('Shared')}</p>
                    </div>
                    <div className="contribution">
                        <p> {t('Contribution')}  <span><i class="fa-solid fa-euro-sign"></i></span>  {t('one-off')} </p>
                        
                    </div>

                    <button> <a href="https://buy.stripe.com/6oE5mJgDF0NG2OscMP" onMouseOver={payFunction} onMouseOut={payFunctionOut}>{pay}</a></button>
                    <p className="margins"> {t('enables')}</p>
                    <p className="margins">{t('climate')}</p>
                </div>
                
            </div>
        </section>
     );
}
 
export default MainPricingCon;