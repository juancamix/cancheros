import "./featuredCanchas.css"

const FeaturedCanchas = () =>{
    return (
        <div className="fc">
            <div className="fcItem">

            <img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686079179/278226489_668318220924939_7777295383482479632_n_vx6vzl.jpg" alt="" className="fcImg" />
            <span className="fcName"> Cancha Bernabeu</span>
            <span className="fcDireccion"> Calle 12 #21</span>
            <span className="fcPrice"> hora $40.000</span>
            <div className="fcRating">
                <button>8.9</button>
                <span>Excelente</span>
            </div>
            </div>
            <div className="fcItem">
            <img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686079029/148617368_233389985098350_1076009393008847451_n_lrwxcf.jpg" alt="" className="fcImg" />
            <span className="fcName"> Canca Gol Center</span>
            <span className="fcDireccion"> Calle 12 #21</span>
            <span className="fcPrice"> hora $40.000</span>
            <div className="fcRating">
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className="fcItem">
            <img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686079029/35236561_384910932005016_7951147314406490112_n_hcavr0.jpg" alt="" className="fcImg" />
            <span className="fcName"> Cancha Camp Nou</span>
            <span className="fcDireccion"> Calle 12 #21</span>
            <span className="fcPrice"> hora $40.000</span>
            <div className="fcRating">
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
        <div className="fcItem">
            <img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686079029/descarga_3_tvmrra.jpg" alt="" className="fcImg" />
            <span className="fcName"> Cancha San Jose</span>
            <span className="fcDireccion"> Calle 12 #21</span>
            <span className="fcPrice"> hora $40.000</span>
            <div className="fcRating">
                <button>8.9</button>
                <span>Excelente</span>
            </div>
        </div>
        </div>
    )
}

export default FeaturedCanchas