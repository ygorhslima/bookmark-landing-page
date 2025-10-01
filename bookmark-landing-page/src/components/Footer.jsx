import '../estilos/footer.css'


export default function Footer(){
    return(
        <footer>
            <div className="container-footer-contact-us">
                <p>35,000 + already joined</p>
                <h1>Stay up-to-date with what we're doing</h1>
                <div className="container-form">
                    <input type="text" placeholder='Enter your email address' />
                    <button>Contact Us</button>
                </div>
            </div>
            <div className="container-footer-links">

            </div>
        </footer>
    )
}