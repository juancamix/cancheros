import { FaShoppingCart, FaStar, FaRegBookmark, FaFireAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Cards.css'


const Cards = (props) => {
    return (
    //     <div className='productList'>
    //     <div key={props.id} className='productCard'>
    //         <img src={props.image} alt='product-img' className='productImage'></img>

    //         <FaShoppingCart className={"productCard__cart"} />
    //         <FaRegBookmark className={"productCard__wishlist"} />
    //         <FaFireAlt className={"productCard__fastSelling"} />

    //         <div className='productCard__content'>
    //             <h3 className='productName'>{props.name}</h3>
    //             <div className='displayStack__1'>
    //                 <div className='productPrice'>${props.price}</div>
    //                 <div className='productSales'>{props.totalSales} units sold</div>
    //             </div>
    //             <div className='displayStack__2'>
                    // <div className='productRating'>
                    //     {[...Array(props.rating)].map((index) => (
                    //         <FaStar id={index + 1 } key={index} />
                    //     ))}
                    // </div>
    //                 <div className='productTime'>{props.timeLeft} days left</div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="searchItem" key={props.id}>
    <img src={props.image} alt="" className="siImg" />
    <div className="siDesc">
        <h1 className="siTitle">{props.name}</h1>
        <span className="siPromoOp" >{props.desc}</span>
        <span className="siSubtitle">
            {props.title}
            </span>

        <span className="siFeatures">
            {props.parag1}
            </span>

        <span className="siCancelOp">{props.cancel}</span>

        <span className="siCancelOpSubtitle">
            {props.parag2}
            </span>
            
    </div>
    <div className="siDetails">
        <div className="siRating">
            <span>{props.state}</span>
            <div className='productRating'>
                        {[...Array(props.rating)].map((index) => (
                            <FaStar id={index + 1 } key={index} />
                        ))}
                    </div>
        </div>
        <div className="siDetailTexts">
            <span className="siPrice">${props.Price}</span>
            <span className="siTextOp">{props.parag3}</span>
            <button className="siCheckButton">
            <Link className="LinkCancha" to='/canchaMUestra'>{props.btndispo}</Link>
            
            </button>
        </div>
    </div>
    </div>
    );
};

export default Cards