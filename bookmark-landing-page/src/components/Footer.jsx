import '../estilos/footer.css';
import bookmarkLogoLight from '../images/logo-bookmark-light.svg';
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';

export default function Footer(){
    return(
        <footer>
            <div className="container-footer-contact-us">
                <p>35,000 + already joined</p>
                <h1>Stay up-to-date with what we're doing</h1>
                <div className="container-form">
                    <input type="text" placeholder='Enter your email address' required/>
                    <button>Contact Us</button>
                </div>
            </div>

            <div className="container-footer-links">
                <div className="links">
                    <img src={bookmarkLogoLight}/>
                    <div style={{
                        display:"flex",
                        gap:"10px",
                    }}>
                        <a href="#">Features</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
                <div className="social">
                    <a href="#">
                        <img src={facebookIcon} alt='facebook'/>
                    </a>
                    <a href="#">
                        <img src={twitterIcon} alt="twitter" />
                    </a>
                </div>
            </div>
        </footer>
    )
}