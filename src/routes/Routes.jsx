import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Error from "../component/Error";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Login from "../pages/login/Login";
import Mobile from "../pages/Mobile";
import Registration from "../pages/Home/Registration";
import Cosmetics from "../pages/Cosmetics";
import Nike from "../pages/Nike";
import Laptop from "../pages/Laptop";
import Lg from "../pages/Lg";
import Casio from "../pages/Casio";
import ProductDetails from "../pages/ProductDetails";
import PrivetRout from "../pages/PrivetRout";
import UpdateData from "../pages/UpdateData";
import MyCart from "../pages/MyCart";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        
        },
        {
            path:"/addProduct",
            element:<PrivetRout><AddProduct></AddProduct></PrivetRout>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
          path:"/signUp",
          element:<Registration></Registration>
        },
        {
          path:"/mobile",
          element:<Mobile></Mobile>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/cosmetics",
          element:<Cosmetics></Cosmetics>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/nike",
          element:<Nike></Nike>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/laptop",
          element:<Laptop></Laptop>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/lg",
          element:<Lg></Lg>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/casio",
          element:<Casio></Casio>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:"/details/:_id",
          element:<PrivetRout><ProductDetails></ProductDetails></PrivetRout>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile")
        },
        {
          path:'/updateData/:id',
          element:<PrivetRout><UpdateData></UpdateData></PrivetRout>,
          loader: ({params})=>fetch(`https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/mobile/${params.id}`)
        },
        {
          path:'/cart',
          element:<PrivetRout><MyCart></MyCart></PrivetRout>,
          loader:()=>fetch("https://assignment-servsr-9rwuvf47i-misbahs-projects.vercel.app/cart")
        }
      ],
    },
  ]);
  export default router;