import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"
import Navber from "../component/Navber";
import DetailsCard from "./DetailsCard";


const ProductDetails = () => {
    const {_id} = useParams();
    const [details, setDetails] = useState();
    const detail =useLoaderData();
    useEffect(()=>{
        const product =detail?.find(details => details._id == _id)
        setDetails(product);
        
    }, [_id, detail])
  return (
    <div>
        <Navber></Navber>
        <div>
            <DetailsCard details={details}></DetailsCard>
        </div>
      
    </div>
  )
}

export default ProductDetails
