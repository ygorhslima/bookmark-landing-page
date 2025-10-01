import LogoBookmarc from '../images/logo-bookmark.svg'
import '../estilos/Header.css'
import { useState } from 'react'

import iconHamburger from '../images/icon-hamburger.svg'

import iconSair from '../images/icon-close.svg'

function Header(){
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <header>
            <div className="header-img">
                <img src={LogoBookmarc} alt="logo-bookmark" />
            </div>
            <button className='hamburger' onClick={()=>{
                setMenuAberto(!menuAberto);
            }}>
                <img src={menuAberto ? iconSair:iconHamburger} alt="menu" />
            </button>

            <nav className={`header-buttons ${menuAberto ? "ativo":""}`}>
                <a href="#Features">Features</a>
                <a href="#Pricing">Pricing</a>
                <a href="#Contact">Contact</a>
                <a href="#" className='btn-login'>Login</a>
            </nav>
        </header>
    )
}

export default Header