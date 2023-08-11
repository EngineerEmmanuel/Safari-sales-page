import MobileHeroSection from "./MobileHeroSection";
// for the translation
import { useTranslation } from 'react-i18next';


const HeroSection = () => {
      // to have access to the translation
      const { t } = useTranslation();
    return ( 
        <section className="hero-section">
            <div className="hero-text-con">
                <h1>The Ultimate Paradise Made  <br/> Just For <span className="hero-techies">Techies</span> Awaits You!</h1>
                <p>{t('Hero p')}<br/> {t('Hero p br')}</p>
            </div>
            <div className="grid-gen-con">
                <div className="left-grid-element">
                    <div className="techies-con">
                        <p>{t('Techies')}</p>
                        <div className="techies-image-con">
                        <img src="https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=612x612&w=0&k=20&c=-zsWSzc9Q_WgSZB79-EsSomGHD-RIC4KiOZ6o0CTx24=" alt="" />
                        <img src="https://media.istockphoto.com/id/1146465010/photo/portrait-of-real-caucasian-man-with-happy-expression-looking-at-camera.jpg?s=612x612&w=0&k=20&c=E_5HcNeSrEae9g-Ydryy-oGaNBCdlNlSEGjnhNDnxLg=" alt="" />
                        <img src="https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.jpg?s=612x612&w=0&k=20&c=scU5I4qHLpHgp54IAXFA3jbCJxyQa9Uwo4YGy6H6Ooo=" alt="" />
                        <img src="https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=612x612&w=0&k=20&c=BOHUDUKkIMycSo9tZsB7HqNUxQgknwplyqjQEVZmKvI=" alt="" />
                        </div>
                    </div>
                    <img src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=2KuVFEhKVdPstrmBo7m3pkaxiXkJMiJVUjelRxIcsoo=" alt="" />
                </div>
                <div className="center-grid-elements">
                    <div className="center-sub-parent-con">
                    <div className="researcher-con">
                        <p>{t('Researcher')}</p>
                        
                    </div>
                    <div className="developer-con">
                        <p>{t('Developer')}</p>
                    </div>
                    <div className="designer-con">
                        <p>{t('Designer')}</p>
                    </div>
                    <div className="tech-enthusiast">
                        <p>{t('Tech Enthusiast')} </p>
                    </div>
                    </div>
                    
                    <div className="grid-center-grids">
                        <div className="text-network-center-grid-con">
                        <div className="text-center-grid">
                            <p>{t('Help')}</p>
                        </div>
                        <div className="network-center-grid-con">
                            <p>{t('Networking')}</p>
                            <div className="network-image-con">
                        <img src="https://media.istockphoto.com/id/564567808/photo/passport-photo-of-a-young-arabic-woman.jpg?s=612x612&w=0&k=20&c=Ekf8JarzUTfmbByIKXRwSijIjV6sVWDvv7xX9LGmyos=" alt="" />
                        <img src="https://media.istockphoto.com/id/863718734/photo/passport-photo-of-a-serious-african-american-businesswoman.jpg?s=612x612&w=0&k=20&c=9O10FYv-dfFBkCKqVOg1EK1schoeFCM03_CjMQ9mxAY=" alt="" />
                        <img src="https://media.istockphoto.com/id/1454972785/photo/passport-photo-of-serious-turkish-man-with-beard-and-black-hair.jpg?s=612x612&w=0&k=20&c=KtKy68VlJy6vMkpPgOz5K_WaNx9uyieZgc8KxeqibqI=" alt="" />
                        <img src="https://media.istockphoto.com/id/916534092/photo/portrait-of-young-man-against-white-background.jpg?s=612x612&w=0&k=20&c=iowMr1ST2dLUDQ3SrsZftopHh9_FKN1Gr2ntcDhajgw=" alt="" />
                        </div>
                        </div>
                        </div>
                        
                        <div className="center-text-only-grid-con">
                            <p>{t('At')}</p>
                        </div>
                    </div>
                </div>
                <div className="right-grid-element">
                <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=h6Q9AyAogTJq4MZZCUCteKCFcsc7fNupnPNgdQfWUKs=" alt="" />

                    <div className="techies-con">
                        <p>{t('Mentors')}</p>
                        <div className="techies-image-con">
                        <img src="https://media.istockphoto.com/id/564567808/photo/passport-photo-of-a-young-arabic-woman.jpg?s=612x612&w=0&k=20&c=Ekf8JarzUTfmbByIKXRwSijIjV6sVWDvv7xX9LGmyos=" alt="" />
                        <img src="https://media.istockphoto.com/id/863718734/photo/passport-photo-of-a-serious-african-american-businesswoman.jpg?s=612x612&w=0&k=20&c=9O10FYv-dfFBkCKqVOg1EK1schoeFCM03_CjMQ9mxAY=" alt="" />
                        <img src="https://media.istockphoto.com/id/1454972785/photo/passport-photo-of-serious-turkish-man-with-beard-and-black-hair.jpg?s=612x612&w=0&k=20&c=KtKy68VlJy6vMkpPgOz5K_WaNx9uyieZgc8KxeqibqI=" alt="" />
                        <img src="https://media.istockphoto.com/id/916534092/photo/portrait-of-young-man-against-white-background.jpg?s=612x612&w=0&k=20&c=iowMr1ST2dLUDQ3SrsZftopHh9_FKN1Gr2ntcDhajgw=" alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <MobileHeroSection/>
            
        </section>
     );
}
 
export default HeroSection;