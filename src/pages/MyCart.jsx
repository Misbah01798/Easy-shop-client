import { useLoaderData } from "react-router-dom"
import Cart from "./Cart";
import Navber from "../component/Navber";


const MyCart = () => {
    const myCart =useLoaderData();
  return (
    <div>
        <Navber></Navber>
       <div className="grid grid-cols-1 lg:grid-cols-3">
       {
            myCart?.map((acart) => (
                <Cart key={acart._id} acart={acart}></Cart>)
        )}
       </div>
      
    </div>
  )
}

export default MyCart
