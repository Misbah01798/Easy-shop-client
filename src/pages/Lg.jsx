import { useLoaderData } from "react-router-dom";
import Navber from "../component/Navber";
import LgCard from "./LgCard";
import LgSider from "../shared/LgSider";


const Lg = () => {
    const lg = useLoaderData();
    const brandNameToFilter = "LG";


    const filteredNike = lg?.filter((anike) => anike.bname === brandNameToFilter);

    return (
        <div>
            <Navber></Navber>
            <LgSider></LgSider>

            <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
                {filteredNike?.map((anike) => (
                    <LgCard key={anike._id} anike={anike}></LgCard>
                ))}
            </div>

        </div>
    )
}

export default Lg
