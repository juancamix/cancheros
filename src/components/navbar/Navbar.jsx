
import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navContainer">
            
            <div className="logoContainer">
                <Link className="Home" to="/">
               <img src="https://res.cloudinary.com/dbenwgwfn/image/upload/v1684087408/Cancheros-Map/cancheros%20logos/WhatsApp_Image_2023-05-14_at_12.52.44_PM-removebg-preview_gv5eqv.png" alt="" className="logo" >
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