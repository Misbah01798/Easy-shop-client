import { useLoaderData } from "react-router-dom"
import Banner from "../../component/Banner"
import Navber from "../../component/Navber"
import Bonus from "../Bonus";
import Footer from "../../shared/Footer";
import SectionHome from "../../shared/SectionHome";
import Categories from "../Categories";


const Home = () => {
  
  return (
    <div className="gap-y-4 m-4" >
        <Navber></Navber>
        <Banner></Banner>
        <div>
            <Categories></Categories>
        </div>
        <Bonus></Bonus>
        <div
        className="mb-4">
        <SectionHome></SectionHome>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Home
