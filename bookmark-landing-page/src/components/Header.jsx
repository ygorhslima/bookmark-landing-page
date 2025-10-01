import LogoBookmarc from '../images/logo-bookmark.svg'
import '../estilos/Header.css'
import { useState } from 'react'

import iconHamburger from '../images/icon-hamburger.svg'

import iconSair from '../images/icon-close.svg'

function MenuHeaderButton({menuAberto,setMenuAberto}){
    return(
        <>
        {
            menuAberto==false ?
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
           
            ) : (
                <nav className={`header-buttons ${menuAberto ? "ativo":""}`}>
                    {/**MENU DO MODO CELULAR*/}
                    <div className="container">
                        <img src={LogoBookmarc} alt="logo" className='img-menu-mobile-logo' />

                        <button onClick={()=>{
                            setMenuAberto(!menuAberto)
                        }} style={{
                            border:"none",
                            background:"none",
                            cursor:"pointer"
                        }}>
                            <img src={iconSair} alt="sair" className='img-menu-mobile-sair' />
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
                <img src={LogoBookmarc} alt="logo-bookmark" />
            </div>
            <button className='hamburger' onClick={()=>{
                setMenuAberto(!menuAberto);
            }}>
                <img src={iconHamburger} className='img-menu-desktop' alt="menu" />
            </button>
            
            
            <MenuHeaderButton menuAberto={menuAberto} setMenuAberto={setMenuAberto}/>  

        </header>
    )
}

export default Header