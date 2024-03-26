

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="banner.png" className="max-w-sm rounded-lg shadow-2xl" />
                    <div className=" flex flex-col justify-start">
                        <h1 className="text-5xl font-bold text-left">Books to freshen up <br /> your bookshelf</h1>
                        
                        <button className="btn bg-[#23BE0A] w-5/12 text-white font-semibold mt-6 ">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;