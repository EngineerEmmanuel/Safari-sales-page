import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
const SecondBreakDown = () => {
    const {t} = useTranslation();
    const data2 = [
        {
            id:1,
            title:t('Slider2 sub1 title'),
            para:t('Slider2 sub1 para'),
            price:t('Slider2 sub1 price')
        },
        {
            id:2,
            title:t('Slider2 sub2 title'),
            para:t('Slider2 sub2 para'),
            price:t('Slider2 sub2 price')
        },
        {
            id:3,
            title:t('Slider2 sub3 title'),
            para:t('Slider2 sub3 para'),
            price: t('Slider2 sub3 price')
        },
        {
            id:4,
            title:t('Slider2 sub4 title'),
            para:t('Slider2 sub4 para'),
            price:t('Slider2 sub4 price')
        },
        {
            id:5,
            title:t('Slider2 sub5 title'),
            para:t('Slider2 sub5 para'),
            price:t('Slider2 sub5 price')
        },
        {
            id:6,
            title:t('Slider2 sub6 title'),
            para:t('Slider2 sub6 para'),
            price:t('Slider2 sub6 price')
        }
    
    ]
    return ( 
        <Fade>
        <section>
            <div className="slider-2-con">
                <h2>{t('When to pay')}</h2>
                <h4>{t('pppd')}</h4>
                <div className="slider-2-grid-con">
                    {
                        data2.map((info2)=>{
                            return(
                                <div className="slider-2-elements" key={info2.id}>
                                    <h2>{info2.title}</h2>
                                    <p>{info2.para}</p>
                                    <p className="price"><i class="fa-solid fa-euro-sign"></i> {info2.price}</p>
                                    
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
 
export default SecondBreakDown;
// export default data2;