
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box ">
                            <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300" : "font-semibold text-black "} to="/" >Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300" : "font-semibold text-black "} to="/listedBooks" >ListedBooks</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300" : "font-semibold text-black "} to="/pagesToRead" >PagesRead</NavLink>
                        </ul>
                    </div>
                    <NavLink to="/" className="btn btn-ghost text-xl">Book Vibe</NavLink>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className=" px-1">
                    <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300 rounded-xl p-2" : "font-semibold text-black p-2 "} to="/" >Home</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300 rounded-xl p-2 mx-5" : "font-semibold text-black p-2 mx-5"} to="/listedBooks" >Listed Books</NavLink>
                            <NavLink className={({ isActive }) => isActive ? "text-green-400 font-semibold border border-green-300 rounded-xl p-2" : "font-semibold text-black p-2 "} to="/pagesToRead" >Pages to Read</NavLink>
                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <a className="btn bg-[#23BE0A]">Sign In</a>
                    <a className="btn ml-3 bg-[#59C6D2]">Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;