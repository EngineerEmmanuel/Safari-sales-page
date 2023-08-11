import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';



const First = () => {
    const {t} =useTranslation();
    const data1 = [
        {
            title:t('Slider1 sub1 title'),
            para:t('Slider1 sub1 para'),
            price: t('Slider1 sub1 price')
        },
        {
            title:t('Slider1 sub2 title'),
            para:t('Slider1 sub2 para'),
            price:t('Slider1 sub2 price')
        },
        {
            title:t('Slider1 sub3 title'),
            para:t('Slider1 sub3 para'),
            price:t('Slider1 sub3 price')
        },
        {
            title:t('Slider1 sub4 title'),
            para:t('Slider1 sub4 para'),
            price:t('Slider1 sub4 price')
        },
        {
            title:t('Slider1 sub5 title'),
            para:t('Slider1 sub5 para'),
            price:t('Slider1 sub5 price')
        },
        {
            title:t('Slider1 sub6 title'),
            para:t('Slider1 sub6 para'),
            price:t('Slider1 sub6 price')
        }
    ]
    return ( 
        
        <Fade>
        <section>
            <div className="slider-1-con">
            <h2>{t('Price break down')}</h2>
            <h4>{t('pppd')}</h4>
                <div className="slider1-grid-con">
                {
                    data1.map((info)=>{
                        return(
                            <div className="slider1-elements">
                                <h2>{info.title}</h2>
                                <p className="slider1-para">{info.para}</p>
                                <p className="price"> <i class="fa-solid fa-euro-sign"></i> {info.price}</p>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </section>
        
        </Fade>
     );
}
 
export default First;
// export default data1;