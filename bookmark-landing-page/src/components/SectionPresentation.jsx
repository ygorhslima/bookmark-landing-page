import '../estilos/Presentation.css'
import illustrationHero from '../images/illustration-hero.svg'

export default function SectionPresentation(){
    return(
        <section className='container-presentation'>
            <div className="content-presentation">
                <h1>A Simple Bookmark Manager</h1>
                <p>
                    A clean and simple interface to organize your favourite <br /> websites. Open a new browser tab and see your sites load <br /> instantly. Try it for free.
                </p>
                <div className='links-get-extension'>
                    <a className='link-get-chrome'>Get it on Chrome</a>
                    <a className='link-get-firefox'>Get it on Firefox</a>
                </div>
            </div>
            <div className="img">
                <img src={illustrationHero} alt="illustraton-hero" />
                <div></div>
            </div>
        </section>
    )
}