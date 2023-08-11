import MainPricingCon from "./MainPricingCon";
import Travel from "./Travel";

// for the translation
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const {t} = useTranslation();
    return ( 
        <section className="pricing-section">
            <Travel/>
            <div className="pricing-gen-con">
                <div className="arrow-bar-people">
                    <div className="arrow-con">
                    <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <p>{t('Fascinating f p')} </p>
                    <div className="pic-con">
                        <img src="https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=612x612&w=0&k=20&c=-zsWSzc9Q_WgSZB79-EsSomGHD-RIC4KiOZ6o0CTx24=" alt="" />
                        <img src="https://media.istockphoto.com/id/1146465010/photo/portrait-of-real-caucasian-man-with-happy-expression-looking-at-camera.jpg?s=612x612&w=0&k=20&c=E_5HcNeSrEae9g-Ydryy-oGaNBCdlNlSEGjnhNDnxLg=" alt="" />
                        <img src="https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.jpg?s=612x612&w=0&k=20&c=scU5I4qHLpHgp54IAXFA3jbCJxyQa9Uwo4YGy6H6Ooo=" alt="" />
                        <img src="https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=612x612&w=0&k=20&c=BOHUDUKkIMycSo9tZsB7HqNUxQgknwplyqjQEVZmKvI=" alt="" />
                    </div>
                </div>
                <div className="pricing-section-text-con">
                <p>{t('At')}</p>

                </div>
                <MainPricingCon/>
            </div>
        </section>
     );
}
 
export default Pricing;