// for the translation
import { useTranslation } from 'react-i18next';


const Travel = () => {
    const {t} = useTranslation();
    return ( 
        <section className="travel-section">
            <marquee behavior="scroll" direction="left">
            <h2>{t('Book your trip now')}</h2>
            </marquee>
            
            <div className="travel-cons-gen">
                <div className="travel-con1">
                    <h2>{t('Travel Itineraries')}</h2>
                    <div className="travel-con1-flex">
                        <div className="travel-left">
                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>1</p>
                                </div>
                                <p> {t('Day 1 p')} </p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br />3</p>
                                </div>
                                <p>{t('Day 3 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>5</p>
                                </div>
                                <p>{t('Day 5 p')}</p>
                            </div>
                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>7</p>
                                </div>
                                <p>{t('Day 7 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>9</p>
                                </div>
                                <p>{t('Day 9 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/> 11</p>
                                </div>
                                <p>{t('Day 11 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/> 13</p>
                                </div>
                                <p>{t('Day 13 p')}</p>
                            </div>
                        </div>


                        <div className="travel-right">
                        <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>2</p>
                                </div>
                                <p>{t('Day 2 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>4</p>
                                </div>
                                <p> {t('Day 4 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>6</p>
                                </div>
                                <p>{t('Day 6 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>8</p>
                                </div>
                                <p>{t('Day 8 p')}</p>
                            </div>
                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>10</p>
                                </div>
                                <p>{t('Day 10 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>12</p>
                                </div>
                                <p>{t('Day 12 p')}</p>
                            </div>

                            <div className="day-1">
                                <div className="day">
                                    <p>Day <br/>14</p>
                                </div>
                                <p>{t('Day 14 p')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="travel-con2">
                    <h2> {t('What to bring with you')} </h2>
                    <ul>
                        <li>{t('What to f li')}</li>
                        <li>{t('What to s li')}</li>
                        <li> {t('What to t li')} </li>
                        <li> {t('What to fo li')} </li>
                        <li>{t('What to fi li')}</li>
                    </ul>
                    <button> <a href="https://meetings-eu1.hubspot.com/retink">{t('Book a Call')}</a></button>
                </div>
            </div>
        </section>
     );
}
 
export default Travel;