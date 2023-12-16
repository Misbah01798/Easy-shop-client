import { Link, NavLink } from "react-router-dom"
import userDefaultPic from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import easy from "../assets/easy.png"
import bg from "../assets/bg.jpeg"



const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()

    }

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addProduct'>Add Product</NavLink></li>
        <li><NavLink to='/cart'>My Cart</NavLink></li>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signUp'>SignUp</NavLink></li>
        
    </>
    return (
        <div style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
            height: '100%',
        }}>
            <div className="navbar bg-transparent	">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-red-600">
                            {navLinks}
                        </ul>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost avatar">
                        <div className="w-10 rounded-full">
                            <img src={easy} />
                        </div>
                    </label>
                    <a className="btn btn-ghost normal-case text-xl text-white">EASY SHOP</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? (

                            <div className="flex">
                                <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                                <p className="p-4 text-xl text-white font-bold">{user.displayName}</p>
                            </div>)

                            :
                            (<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userDefaultPic} />
                                </div>
                            </label>)
                    }
                    {
                        user ?
                            (<button onClick={handleSignOut} className="btn">Sign Out</button>)
                            :
                            (<Link to='/login'>
                                <button className="btn">Login</button>
                            </Link>)

                    }

                </div>
            </div>

        </div>
    )
}

export default Navber
