import { Link } from "react-router-dom"
import "./navbar.css"
import Modal from "../Modal/Modal"
import { useState } from "react";
import { MainLogin } from "../../pages/LogIn/LogIn";

const Navbar = () => {

    const [modalOpen, setModalOpen] = useState(false);
    
    const openModal = () =>{
        setModalOpen(true)
    }
    const closeModal = () =>{
        setModalOpen(false)
    }
    
    return (
        <div className="navbar">
            <div className="navContainer">
            
            <div className="logoContainer">
                <Link className="Home" to="/">
               <img src="https://res.cloudinary.com/dbenwgwfn/image/upload/v1684087408/Cancheros-Map/cancheros%20logos/logo.png" alt="" className="logo" ></img>
                </Link>
                </div>
                
               <div className="navItems">
               <button className="navButton" onClick={openModal}>Inicio sesión</button>
               <Modal isOpen={modalOpen} onClose={closeModal}>
                    <MainLogin/>
                    
                </Modal> 
               </div>
            </div>
        </div>
    )
}

export default Navbar