import LogoBookmark from '../images/logo-bookmark.svg'
import LogoBookmarkLight from '../images/logo-bookmark-light.svg'
import '../estilos/Header.css'
import { useState } from 'react'
import iconHamburger from '../images/icon-hamburger.svg'
import iconSairLight from '../images/icon-close-light.svg'
import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';

/*
componente interno que vai gerenciar a partir de um if ternário o menu para desktop e menu para mobile a partir do estado menuAberto passando por um props
*/
function MenuHeaderButton({menuAberto,setMenuAberto}){
    return(
        <>
        {
            menuAberto==false?
            (   
                <nav className={`header-buttons ${menuAberto ? "ativo":""}`}>
                {/*MENU DO MODO DESKTOP*/}
                    <a href="#Features">
                        <span>Features</span>
                    </a>
                    <a href="#Pricing">
                        <span>Pricing</span>
                    </a>
                    <hr />
                    <a href="#Contact">
                        <span>Contact</span>
                    </a>
                    <hr />
                    <a href="#" className='btn-login'>
                        <span>Login</span>
                    </a>
                </nav>
            ):(
                <nav className={`header-buttons ${menuAberto ? "ativo":""}`}>
                    {/**MENU DO MODO CELULAR*/}
                    <div className="container">
                        <img src={LogoBookmarkLight} alt="logo" className='img-menu-mobile-logo' />

                        <button 
                            onClick={()=>{setMenuAberto(!menuAberto)}}
                            style={{
                                border:"none",
                                background:"none",
                                cursor:"pointer"
                            }}>
                            <img src={iconSairLight} alt="sair" className='img-menu-mobile-sair' />
                        </button>
                    </div>

                    <hr />
                    <a href="#Features">
                        <span>Features</span>
                    </a>
                    <hr />
                    <a href="#Pricing">
                        <span>Pricing</span>
                    </a>
                    <hr />
                    <a href="#Contact">
                        <span>Contact</span>
                    </a>
                    <hr />
                    <a href="#" className='btn-login'>
                        <span>Login</span>
                    </a>
                    <hr />
                    <div style={{
                        display:"flex",
                        margin:"10px",
                        gap:"15px",
                        position:"fixed",
                        top:"90%",
                    }}>
                        <a href="https://facebook.com" target='_blank'>
                            <img src={facebookIcon} alt="facebook" />
                        </a>
                        <a href="https://twitter.com" target='_blank'>
                            <img src={twitterIcon} alt="twitter"/>
                        </a>
                    </div>
                </nav>
            )
        }
        </>
    )
}

function Header(){
    const [menuAberto, setMenuAberto] = useState(false);
    return(
        <header>
            <div className="header-img">
                <img src={LogoBookmark} alt="logo-bookmark" />
            </div>
            <button className='hamburger' onClick={()=>{
                setMenuAberto(!menuAberto);
            }}>
                <img src={iconHamburger} className='img-menu-desktop' alt="menu" />
            </button>

            <MenuHeaderButton 
                menuAberto={menuAberto}
                setMenuAberto={setMenuAberto}
            />

        </header>
    )
}

export default Header