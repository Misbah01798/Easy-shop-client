import { useLoaderData } from "react-router-dom"
import Navber from "../component/Navber";
import CosmeticCard from "./CosmeticCard";
import DoveSider from "../shared/DoveSider";


const Cosmetics = () => {
    const cosmetics =useLoaderData();
    console.log(cosmetics);
    
    const brandNameToFilter = "Dove";
    console.log(cosmetics)

  
  const filteredCosmetic = cosmetics.filter((cosmetic) => cosmetic.bname == brandNameToFilter);
  return (
    <div>
    <Navber></Navber>
    <DoveSider></DoveSider>

    <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
      {filteredCosmetic?.map((cosmetic) => (
        <CosmeticCard key={cosmetic._id} cosmetic={cosmetic}></CosmeticCard>
      ))}
    </div>
  </div>
  )
}

export default Cosmetics
