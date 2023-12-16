import { useLoaderData } from "react-router-dom";
import Navber from "../component/Navber";
import SingleMobile from "./SingleMobile";
import AppleSider from "../shared/AppleSider";

const Mobile = () => {
  const mobiles = useLoaderData();

  
  const brandNameToFilter = "Apple"; 

  
  const filteredMobiles = mobiles?.filter((amobile) => amobile.bname === brandNameToFilter);

  return (
    <div>
      <Navber></Navber>
      <AppleSider></AppleSider>

      <div className="grid grid-cols-1 space-y-4 md:grid-cols-3 justify-center items-center">
        {filteredMobiles.map((amobile) => (
          <SingleMobile key={amobile._id} amobile={amobile}></SingleMobile>
        ))}
      </div>
    </div>
  );
}

export default Mobile;
