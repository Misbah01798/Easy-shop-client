import { useLoaderData } from "react-router-dom";
import Navber from "../component/Navber";
import CasioCard from "./CasioCard";
import CasioSider from "../shared/CasioSider";


const Casio = () => {
    const casio = useLoaderData();
    const brandNameToFilter = "Casio";


    const filteredCasio = casio?.filter((acasio) => acasio.bname === brandNameToFilter);

    return (
        <div>
            <Navber></Navber>
            <CasioSider></CasioSider>

            <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
                {filteredCasio?.map((acasio) => (
                    <CasioCard key={acasio._id} acasio={acasio}></CasioCard>
                ))}
            </div>
        </div>
    )
}

export default Casio
