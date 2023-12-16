import ban3 from '../assets/ban3.png'

const Bonus = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-pink-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={ban3} className="max-w-md " />
                    <div>
                        <h1 className="text-5xl font-bold">Save Up to 40% Off
                        </h1>
                        <p className="py-6">On All Apple Products</p>
                        <button className="btn bg-pink-600 text-white rounded-full ">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonus;
