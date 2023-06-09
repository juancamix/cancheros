import './featured.css'
import { Link } from 'react-router-dom'

const Featured = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <Link to = '/CanchaCampNou'><img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686078175/279863961_286630176889531_1468417031135548471_n_lsgzin.jpg" alt="" className="featuredImg" /></Link>
                <div className="featuredTitles">
                    <h1>Campnou</h1>
                    <h2>3 canchas</h2>
                </div>
            </div>
            <div className="featuredItem">
                <Link to= '/CanchaBernabeu'><img src="https://res.cloudinary.com/dptohgiiu/image/upload/v1686076930/C20KiJ-WIAAjDPs_r0c1qt.jpg" alt="" className="featuredImg" /></Link>
                <div className="featuredTitles">
                    <h1>Bernabeu</h1>
                    <h2>2 canchas</h2>
                </div>
            </div>
            <div className="featuredItem">
                <Link to= '/CanchaSanSiro'><img src="https://www.metegol.app/static/cd530e997927a7da4f153545f4c0b3c7/6ff2f/SoccerFields%252F8DTnKjrtQQBSm3NrowAc%252F3eb0c5bb-2abb-4d95-bee9-b48ef8b4886a.jpg" alt="" className="featuredImg" /></Link>
                <div className="featuredTitles">
                    <h1>Gol Center</h1>
                    <h2>2 canchas</h2>
                </div>
            </div>
        </div>
    )
}

export default Featured