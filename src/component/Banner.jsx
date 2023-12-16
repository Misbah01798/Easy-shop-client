import ban1 from "../assets/ban1.png"
import ban2 from "../assets/ban2.png"
import ban3 from "../assets/ban3.png"
import ban4 from "../assets/ban4.png"

const Banner = () => {
    return (
        
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">

                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content  flex-col lg:flex-row-reverse">
                            <img src={ban1} className="max-w-md rounded-lg " />
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold">Welcome Easy Shoping</h1>
                                <p className="py-6">Though I'm not used to do shopping through online but Happy Shopping makes me feel comfortable. ... Happy Shopping is one of an authentic online shop for imported ..</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    
    

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content  flex-col lg:flex-row-reverse">
                            <img src={ban2} className="max-w-md rounded-lg " />
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold">Up to 20% discount
</h1>
                                <p className="py-6">Walton customers will also get up to 20 percent discount on Walton IT products, EMI facility at zero interest, along with safe home delivery and various benefits for E-Plaza purchase under Walton stay home offer..</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content  flex-col lg:flex-row-reverse">
                            <img src={ban3} className="max-w-md rounded-lg " />
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold">New Mobile and Watch Find Altime</h1>
                                <p className="py-6">Smart watch price in Bangladesh starts from 500 BDT that has LCD display, heart rate sensor, oximeter and various health features. Moreover, mobile watch price ...</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content  flex-col lg:flex-row-reverse">
                            <img src={ban4} className="max-w-md rounded-lg " />
                            <div className="w-1/2">
                                <h1 className="text-5xl font-bold">Enjoy Best Shoping and Support!</h1>
                                <p className="py-6">to help someone or something in an emotional or practical way: My family always supported me in whatever I wanted to do. Many companies support public</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    
    )
}

export default Banner
