import { Link } from "react-router-dom"
import dove from "../assets/dove.jpeg"
import casio from "../assets/casioband.jpeg"
import lg from "../assets/lgband.jpeg"
import mobile from "../assets/mobileCover.jpeg"
import nike from "../assets/nik3.jpeg"
import acer from "../assets/acer band.jpeg"


const Categories = () => {
    return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4">
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={dove} className=" w-2/3 h-full" />
                    <div>
                        <h1 className="text-2xl font-bold"><Link to="/cosmetics">Dove</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={lg} className=" w-60 h-full" />
                    <div>
                        <h1 className="text-2xl font-bold"><Link to="/lg">LG</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={nike} className=" w-60 h-40" />
                    <div>
                        <h1 className="text-2xl font-bold w-30"><Link to="/nike">NIKE</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={mobile} className=" w-60 h-full" />
                    <div>
                        <h1 className="text-2xl font-bold"><Link to="/mobile">Apple</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={acer} className=" w-60 h-full" />
                    <div>
                        <h1 className="text-2xl font-bold"><Link to="/laptop">ACER</Link>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="hero  md:h-56 md:w-96 bg-pink-200 m-4 rounded-md">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={casio} className=" w-60 h-full" />
                    <div>
                        <h1 className="text-2xl font-bold"><Link to="/casio">CASIO</Link>
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    
    )
}

export default Categories;