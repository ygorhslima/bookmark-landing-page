import "../estilos/questions.css"
import { useState } from "react"
export default function AsideQuestions(){
    const lista = [
        {
            "title":"What is Bookmark?",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"How can I request a new browser?",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"Is there a mobile app?",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"What about other Chromium browsers?",
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. quam ornare mattis"
        }
    ]

    const [ativo,setAtivo]=useState(null)


    const inverterArrowButton =(isOpen)=>{return isOpen ? <i class='fa-solid fa-chevron-up'></i> : <i class='fa-solid fa-chevron-down'></i>}
    const handleToggle = (index)=>{setAtivo(ativo === index ? null : index)}

    return(
        <aside className="container-question">
            <div className="content">
                <h1>Frequently Asked Questions</h1>
                <p>
                    Here are some of our FAQs. If you have any other questions <br /> you’d like answered please feel free to email us.
                </p>
            </div>
            <div className="list-questions">
                {
                    lista.map(({title,description},index)=>{
                        const isOpen = ativo === index
                        return(
                            <div className="item" key={index}>
                                <div className="item-topic">
                                    <h2>{title}</h2>
                                    <button className="btn_arrow" onClick={()=>{handleToggle(index)}}>
                                        {inverterArrowButton(isOpen)}
                                    </button>
                                </div>
                                
                               {isOpen && (
                                <div className="container-description">
                                    <p>{description}</p>
                                </div>
                                )}
                            </div>
                        )
                    })
                }
            </div>
        </aside>
    )
}