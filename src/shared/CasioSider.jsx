import lap1 from "../assets/casioband.jpeg"
import lap2 from "../assets/casioband2.jpeg"
import lap3 from "../assets/casioband3.jpeg"

const CasioSider = () => {
  return (
    <>
            <div className="carousel h-96 w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={lap1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={lap3} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={lap2} className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

        </>  )
}

export default CasioSider
