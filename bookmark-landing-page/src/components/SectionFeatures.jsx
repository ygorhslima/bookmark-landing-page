import { useState } from 'react'
import '../estilos/Features.css'

import tab1IMG from '../images/illustration-features-tab-1.svg'
import tab2IMG from '../images/illustration-features-tab-2.svg'
import tab3IMG from '../images/illustration-features-tab-3.svg'

export default function SectionFeatures() {
  const [ativo, setAtivo] = useState(0)

  const lista = [
    {
      image: tab1IMG,
      title: "Bookmark in one click",
      description: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
      buttonList: "More info",
    },
    {
      image: tab2IMG,
      title: "Intelligent search",
      description: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      buttonList: "More info",
    },
    {
      image: tab3IMG,
      title: "Share your bookmarks",
      description: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      buttonList: "More info",
    }
  ]

  return (
    <div className="container-features">
      <div className="content">
        <h1>Features</h1>
        <p>
          Our aim is to make it quick and easy for you to access your <br /> favourite websites.
          Your bookmarks sync between your devices <br /> so you can access them on the go.
        </p>
      </div>

      <div className="buttons-features">
        <button onClick={() => setAtivo(0)} className={ativo === 0 ? "ativo" : ""}>Simple Bookmarking</button>
        <button onClick={() => setAtivo(1)} className={ativo === 1 ? "ativo" : ""}>Speedy Searching</button>
        <button onClick={() => setAtivo(2)} className={ativo === 2 ? "ativo" : ""}>Easy Sharing</button>
      </div>

      <div className="slide">
        <div className="item">
          <div className="img">
            <img src={lista[ativo].image} alt={lista[ativo].title} />
          </div>
          <div className="content">
            <h2>{lista[ativo].title}</h2>
            <p>{lista[ativo].description}</p>
            <a href="#" className="buttonList">{lista[ativo].buttonList}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
