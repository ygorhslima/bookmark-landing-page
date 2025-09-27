import "../estilos/questions.css"
import ArrowButton from '../images/icon-arrow.svg'
export default function AsideQuestions(){
    const lista = [
        {
            "title":"What is Bookmark?",
            "arrowButton":ArrowButton,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"How can I request a new browser?",
            "arrowButton":ArrowButton,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"Is there a mobile app?",
            "arrowButton":ArrowButton,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
        },
        {
            "title":"What about other Chromium browsers?",
            "arrowButton":ArrowButton,
            "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis. quam ornare mattis"
        }
    ]
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
                    lista.map(({title,arrowButton,description},index)=>(
                        <div className="item" key={index}>
                            <div className="item-topic">
                                <h2>{title}</h2>
                                <button className="btn_arrow">
                                    <img src={arrowButton} onClick={()=>{
                                    }}/>
                                </button>
                            </div>
                            <div className="container-description">
                                <p>{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </aside>
    )
}