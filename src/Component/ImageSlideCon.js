import SlidingImages from "./SlidingImages";
// for the translation
import { useTranslation } from 'react-i18next';

const ImageSlideCon = () => {
    const {t} = useTranslation();
    return ( 
        <section className="fascinating-gen-con">
             <div className="fascinating-bar-people">
                    <div className="fascinating-arrow-con">
                    <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <p>{t('Fascinating f p')}</p>
                    <div className="fascinating-pic-con">
                        <img src="https://media.istockphoto.com/id/470958260/photo/photobooth-picture-of-a-young-woman.jpg?s=612x612&w=0&k=20&c=dkBS8IjDmYUGgu_dsE1IbIVKTtDZJkqPPkDXZTkxQM0=" alt="" />
                        <img src="https://media.istockphoto.com/id/530007875/photo/portrait-of-a-laughing-businesswoman-with-long-dark-hair.jpg?s=612x612&w=0&k=20&c=bjEH_LvY3Plbl2mJkXvS3qFB6Zt8vZS3NvR1QJ0ovX4=" alt="" />
                        <img src="https://media.istockphoto.com/id/1315808211/photo/passport-photo-of-serious-brazilian-young-adult-man-with-braces.jpg?s=612x612&w=0&k=20&c=scU5I4qHLpHgp54IAXFA3jbCJxyQa9Uwo4YGy6H6Ooo=" alt="" />
                        <img src="https://media.istockphoto.com/id/1196210855/photo/passport-photo-of-african-american-mature-adult-woman.jpg?s=612x612&w=0&k=20&c=FdMBHXWzsnQaLSLva5AwKnBkUsiGsoTw22ZhWcnS16I=" alt="" />
                    </div>
                </div>
                <div className="fascinating-section-text-con">
                <p> {t('Fascinating s p')}  </p>

                </div>
                <SlidingImages/>

        </section>
     );
}
 
export default ImageSlideCon;