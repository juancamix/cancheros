
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navContainer">
            
            <div className="logoContainer">
                <Link className="Home" to="/">
               <img src="https://res.cloudinary.com/dwbhahrsr/image/upload/v1683236180/logo_orquesta_de_salsa_retro_amarillo_y_negro_1_qjpwuz.png" alt="" className="logo" >
               </img>

                </Link>
                </div>
                
               <div className="navItems">
               <button className="navButton">
               <Link className='LinkLog' to='/LogIn'>Iniciar Sesión</Link>
               </button>
               </div>
            </div>
        </div>
    )
}

export default Navbar