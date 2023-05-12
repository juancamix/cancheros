import "./mailList.css"

const MailList = () => {
    return (
        <div className="mail">
            <h1 className="mailTitle">
                Ahorra tiempo, ahorra dinero!
            </h1>
            <span className="mailDesc">Inscribete y te enviaremos más ofertas</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email"/>
                <button>Suscribete</button>
            </div>
        </div>
    )
}

export default MailList