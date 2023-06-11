import React from 'react'
import "./Bernabeu.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import { Map } from "../../components/Map/Map"
import Modal from 'react-modal'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios'


const stripePromise = loadStripe('pk_test_51NG6XgB439p1m1xwSpPezHZwMU1w00Eg2K7aK3qf92B9RoXHZcgIfmJfd8DDpjTOYNV7wfDkVGJkYAEN3zbQITU600cyjv6lC1')

const CheckoutForm = () =>{

    const stripe = useStripe();
    const elements = useElements();

    const handleSumbit = async (e) =>{
        e.preventDefault();
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if (!error){
            const { id } = paymentMethod;
            
            const { data }= await axios.post('http://localhost:5000/api/checkout',{
                id,
                amount: 90.000
            })
            console.log(data);

            elements.getElement(CardElement).clear();
    }
    }


    return <form onSubmit={handleSumbit} className='card'>

        <img  className='paycan' src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686079179/278226489_668318220924939_7777295383482479632_n_vx6vzl.jpg" alt="" />
        <h3 className='text-center'>Precio: 90.000</h3>
        <CardElement/>
        <button className='buycan' disabled={!stripe}>
            Buy
        </button>
    </form>
}


export const Bernabeu = () => {
    const [slideNumber, setSlideNumber, newSlideNumber] = useState (0);
    const [open, setOpen] = useState (false);
    const photos = [
    {
        src: "https://res.cloudinary.com/dptohgiiu/image/upload/v1686076930/C20KiJ-WIAAjDPs_r0c1qt.jpg"
    }, 
    {
        src:"https://res.cloudinary.com/dptohgiiu/image/upload/v1686077040/descarga_vidlbh.jpg"
    }, 
    {
        src:"https://res.cloudinary.com/dptohgiiu/image/upload/v1686077576/340845004_782956426560862_4406836807152007428_n_z0lotb.jpg"
    }, 
    {
        src:"https://res.cloudinary.com/dptohgiiu/image/upload/v1686077576/283675910_710629946907779_236643014340751240_n_y1wf8x.jpg"
    }, 
    {
        src:"https://res.cloudinary.com/dptohgiiu/image/upload/v1686077576/335712390_938731097310237_2173697664036583100_n_h2psmw.jpg"
    }, 
    {
        src:"https://res.cloudinary.com/dptohgiiu/image/upload/v1686077576/284137667_1200227704046195_6002139452955079299_n_twafoc.jpg"
    }, 
   
    ];

    const handleOpen = (i) =>{
        setSlideNumber(i);
        setOpen(true);
    };
    const handleMove = (direction)=>{
        
        let  newSlideNumber;

        if(direction==="l"){
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;
        } else{
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber +1;
        }
        setSlideNumber(newSlideNumber)
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="canchaContainer">
                {open && <div className="slider">
                    <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                    <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
                    <div className="sliderWrapper">
                        <img src={photos[slideNumber].src}  alt="" className="sliderImg" />
                    </div>
                    <FontAwesomeIcon icon={faCircleArrowRight}className="arrow" onClick={()=>handleMove("r")}/>
                </div>}
                <div className="canchaWrapper">
                    <h1 className="canchaTitle">Bernabeu</h1>
                    {/* <button className="reservaAhora">Reservar ahora</button> */}
                    <div className="canchaAddress">
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <span>...</span>
                    </div>
                    <span className="canchaDistance">
                        Excelente localización - 100m del centro
                    </span>
                    <span className="canchaPriceHighlight">
                        si alquila por más de 1 hora en esta cancha se le dara un descuento de un 6% en el proximo alquiler
                    </span>
                    <div className="canchaImages">
                        {photos.map((photo,i)=>(
                            <div className="canchaImgWrapper">
                                <img onClick={()=>handleOpen(i)}src={photo.src} alt="" className="canchaImg" />
                            </div>
                        ))}
                    </div>
                    <div className="canchaDetails">
                        <div className="canchaDetailsTexts">
                            <h1 className="canchaTitle">
                                Campnou
                            </h1>
                            <p className="canchaDesc">
                            Canchas Sintéticas Bernabeu, Armenia, Quindío, Colombia está ubicado en Armenia, Quindío, Colombia, cerca de este lugar son: Gimnasio SuperGym (630 m), Centro Deportivo Mormones La Castellana (730 m), Edificio Castellana 9 A N 58 (976 m), Pulso Box armenia (1 km), GIMNASIO EQUILIBRIUM FITNESS (1 km).

                            </p>
                            </div>
                            <div className="canchaDetailsPrice">
                                <h1>Perfecta para jugar!</h1>
                                <span>
                                Cancha con • luces • tienda • gradas de puestos
                                </span>
                                <h2>
                                    $110.000 (1 hora)
                                </h2>
                                <button className="btnrese" onClick={openModal}>Reservar</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                    <Map/>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                    ><button className='pointer' onClick={closeModal}>
                        <AiOutlineCloseCircle></AiOutlineCloseCircle>
                        </button>
                        
                        <Elements stripe={stripePromise}>
                        <CheckoutForm/>
                        </Elements>
                        
                    
                        </Modal>
            </div>
    )
}


