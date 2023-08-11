// for the translation
import { useTranslation } from 'react-i18next';

const MobileHeroSection = () => {
     // to have access to the translation
     const { t } = useTranslation();
    return ( 
        <div className="mobile-hero-section-con">
            <div className="mobile-hero-grids">
                <div className="mobile-grid-element-left">
                    <div className="mobile-absolute-elements">
                        <div className="element-1">
                            <p>{t('Researcher')}</p>
                        </div>
                        <div className="element-2">
                            <p>{t('Developer')}</p>
                        </div>
                    </div>
                    <div className="image-block-gen-con">
                        <div className="techies-con">
                            <p>{t('Techies')}</p>

                            <div className="techies-image-con-mobile">
                        <img src="https://media.istockphoto.com/id/1153469287/photo/frontal-male-passport-photo-isolated-on-white-background-eu-standardization.jpg?s=612x612&w=0&k=20&c=-zsWSzc9Q_WgSZB79-EsSomGHD-RIC4KiOZ6o0CTx24=" alt="" />
                        <img src="https://media.istockphoto.com/id/1146465010/photo/portrait-of-real-caucasian-man-with-happy-expression-looking-at-camera.jpg?s=612x612&w=0&k=20&c=E_5HcNeSrEae9g-Ydryy-oGaNBCdlNlSEGjnhNDnxLg=" alt="" />
                        <img src="https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.jpg?s=612x612&w=0&k=20&c=scU5I4qHLpHgp54IAXFA3jbCJxyQa9Uwo4YGy6H6Ooo=" alt="" />
                        <img src="https://media.istockphoto.com/id/1328879352/photo/photobooth-portrait-of-a-beautiful-asian-woman-reaching-the-standards-of-an-official-passport.jpg?s=612x612&w=0&k=20&c=BOHUDUKkIMycSo9tZsB7HqNUxQgknwplyqjQEVZmKvI=" alt="" />
                        </div>
                        </div>
                        <img src="https://media.istockphoto.com/id/1371301907/photo/friendly-young-man-wearing-denim-shirt.jpg?s=612x612&w=0&k=20&c=2KuVFEhKVdPstrmBo7m3pkaxiXkJMiJVUjelRxIcsoo=" alt="" />
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
                </div>
                <div className="mobile-grid-element-right">
                    <div className="mobile-abolute-elements-right">
                    <div className="element-3">
                            <p>{t('Designer')}</p>
                        </div>
                        <div className="element-4">
                            <p>{t('Tech Enthusiast')}</p>
                        </div>
                    </div>
                    <div className="mobile-center-text-only-grid-con">
                            <p>{t('At')}</p>
                        </div>

                        <div className="right-grid-element">
                <img src="https://media.istockphoto.com/id/1392783238/photo/portrait-of-a-teenage-smiling-female-looking-at-the-camera-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=h6Q9AyAogTJq4MZZCUCteKCFcsc7fNupnPNgdQfWUKs=" alt="" />

                    <div className="techies-con">
                        <p>{t('Mentors')}</p>
                        <div className="techies-image-con">
                        <img src="https://media.istockphoto.com/id/180866644/photo/young-caucasian-male-with-a-serious-expression.jpg?s=612x612&w=0&k=20&c=9Rs1wSvQLZIpxXl33humVclnrJGGelBThwhT6mO6Zbo=" alt="" />
                        <img src="https://media.istockphoto.com/id/477986829/photo/young-man.jpg?s=612x612&w=0&k=20&c=FFfi9iAL7nAlHq8rt-EgfFh2VmXtqw781wIhuE1Kvbs=" alt="" />
                        <img src="https://media.istockphoto.com/id/537595327/photo/young-man.jpg?s=612x612&w=0&k=20&c=BM3yAoeQY3J3nolwJb6JTvLIuLZ-4AiBCrvI2pjOWXE=" alt="" />
                        <img src="https://media.istockphoto.com/id/515050545/photo/portrait-of-a-happy-laughing-spanish-guy-in-a-blue-shirt.jpg?s=612x612&w=0&k=20&c=_SrMBXkDW21fMxtUzQzHUWXVgrCAT789mJq-_KpsW7I=" alt="" />
                        </div>

                    </div>
                </div>
                </div>
            </div>
        </div>
     );
}
 
export default MobileHeroSection;