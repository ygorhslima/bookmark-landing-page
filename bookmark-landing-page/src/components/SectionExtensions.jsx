import { useState } from "react"
import LogoChrome from '../images/logo-chrome.svg'
import LogoFirefox from '../images/logo-firefox.svg'
import LogoOpera from '../images/logo-opera.svg'
import '../estilos/Extensions.css'

export default function SectionExtensions(){
    const [lista] = useState([
        {
            "img":LogoChrome,
            "title":"Add to Chrome",
            "description":"Minimum version 62",
            "buttonText":"Add & Install Extension"
        },
        {
            "img":LogoFirefox,
            "title":"Add to Firefox",
            "description":"Minimum version 55",
            "buttonText":"Add & Install Extension"
        },
        {
            "img":LogoOpera,
            "title":"Add to Opera",
            "description":"Minimum version 46",
            "buttonText":"Add & Install Extension"
        }
    ])

    return(
        <section className="container-extensions">
            <div className="content">
                <h1>Download the extension</h1>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.</p>
            </div>
            <div className="list">
                {
                    lista.map(({img,title,description,buttonText}, index)=>(
                        <div className="item" key={index} id={'item'+index}>
                            <img src={img} alt={title} />
                            <h1 className="title-extensions">{title}</h1>
                            <p className="description-extensions">{description}</p>
                            <button className="button-extensions">{buttonText}</button>
                        </div>
                    ))
                }
                {console.log(lista)}
            </div>
        </section>
    )
}