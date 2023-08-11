

const Footer = () => {
    return ( 
        <footer>
            <div className="footer-con">
            <div className="arrow-bar-footer">
                    <div className="arrow-con">
                    <i class="fa-solid fa-arrow-up"></i>
                    </div>
                    <p> <a href="https://meetings-eu1.hubspot.com/retink"> Contact us to book a trip</a></p>
                </div>
                <p className="would">Would you like to get on a call with any of our amazing team members for <br/> more clarity? </p>
                <p className="number">
                <a href="tel:+4915219254165">+4915219254165</a>
                <a href="tel:+254706835980" style={{display:"block", marginTop:"1rem"}}>+254706835980</a>

                </p>
                <div className="footer-con-last">
             
                     <div className="footer-logo-con">
                      <a href="https://retink.io/" target="_blank"><img src="https://retink.io/LOGO.svg" alt="Retink logo" /></a>  
                     </div>
                     <div className="footer-email-con">
                        <p><a href="mailto:info@retinkmedia.com">info@retinkmedia.com</a></p>
                        <p> <a href="mailto:Kenya@Kujia.or.ke">Kenya@Kujia.or.ke</a> </p>
                        <div className="subscription-con">
                            <p>Subscribe to get regular updates about the Safari</p>
                            <button> <a href="https://share-eu1.hsforms.com/1oK40-EOKTqiV0G25uNKO-Ag4cqm">Subcribe</a></button>
                           
                        </div>
                     </div>

                </div>
            </div>
            <p style={{textAlign:"center", marginTop:"10rem"}}> <a href="https://climate.stripe.com/GGa0cx">Carbon Commitment</a> </p>
        </footer>
     );
}
 
export default Footer;