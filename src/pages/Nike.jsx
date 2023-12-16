import { useLoaderData } from "react-router-dom";
import Navber from "../component/Navber";
import NikeCard from "./NikeCard";
import NikeSider from "../shared/NikeSider";


const Nike = () => {
    const nike = useLoaderData();
    const brandNameToFilter = "Nike";


    const filteredNike = nike?.filter((anike) => anike.bname === brandNameToFilter);

    return (
        <div>
            <Navber></Navber>
            <NikeSider></NikeSider>

            <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
                {filteredNike?.map((anike) => (
                    <NikeCard key={anike._id} anike={anike}></NikeCard>
                ))}
            </div>

        </div>
    )
}

export default Nike
