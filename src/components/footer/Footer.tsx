import './Footer.css'
import Instagram from "../../assets/instagram.png"
import Youtube from "../../assets/youtube.png"
import Facebook from "../../assets/facebook.png"

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div>
                <a href="https://www.instagram.com/buzzfeedtasty/#"><img src={Instagram} alt="Instagram" /></a>

                <a href="https://www.youtube.com/buzzfeedtasty"><img src={Youtube} alt="Youtube" /></a>

                <a href="https://www.facebook.com/buzzfeedtasty/"><img src={Facebook} alt="Facebook" /></a>
            </div>
        </footer>
     );
}
 
export default Footer;