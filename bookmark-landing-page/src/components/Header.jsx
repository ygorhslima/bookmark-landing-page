import LogoBookmarc from '../images/logo-bookmark.svg'
import '../estilos/Header.css'

function Header(){
    return(
        <header>
            <div className="header-img">
                <img src={LogoBookmarc} alt="logo-bookmark" />
            </div>
            <div className="header-buttons">
                <a href="#Features">Features</a>
                <a href="#Pricing">Pricing</a>
                <a href="#Contact">Contact</a>
                <a href="#" className='btn-login'>Login</a>
            </div>
        </header>
    )
}

export default Header