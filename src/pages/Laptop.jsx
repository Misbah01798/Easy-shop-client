import { useLoaderData } from "react-router-dom";
import Navber from "../component/Navber";
import LaptopCard from "./LaptopCard";
import LaptopSider from "../shared/LaptopSider";


const Laptop = () => {
    const laptop = useLoaderData();
    const brandNameToFilter = "Acer";


    const filteredNike = laptop?.filter((anike) => anike.bname === brandNameToFilter);

    return (
        <div>
            <Navber></Navber>
            <LaptopSider></LaptopSider>

            <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
                {filteredNike?.map((anike) => (
                    <LaptopCard key={anike._id} anike={anike}></LaptopCard>
                ))}
            </div>
        </div>
    )
}

export default Laptop
