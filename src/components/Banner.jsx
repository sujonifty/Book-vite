import { NavLink } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero rounded-xl w-96 lg:w-full lg:min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="banner.png" className=" w-96 lg:max-w-sm rounded-lg shadow-2xl" />
                    <div className=" flex flex-col justify-start">
                        <h1 className="playfair-display text-3xl lg:text-5xl font-bold text-left ">Books to freshen up <br /> your bookshelf</h1>
                        <NavLink to="/listedBooks">
                            <button className="btn bg-[#23BE0A] w-5/12 text-white font-semibold mt-6 ">View The List</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;