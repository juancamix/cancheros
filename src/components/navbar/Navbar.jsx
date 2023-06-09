
import "./navbar.css"
import Modal from "../Modal/Modal"
import { useState } from "react";
import { MainLogin } from "../../pages/LogIn/LogIn";
import { LogoCont } from "../LogoCont/LogoCont";

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
                <LogoCont/>
                
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