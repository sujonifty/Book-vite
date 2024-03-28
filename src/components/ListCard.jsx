import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

const ListCard = ({ item }) => {
    const { image, tags, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = item;
    return (
        <div>

            <div className="relative w-full flex flex-col shadow-xl my-10 bg-slate-100 rounded-xl p-6 divide-y xl:flex-row xl:divide-y-0  dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">

                <div className="flex w-40 md:max-w-xl md:w-40 items-center gap-3 p-3">
                    <img alt="" src={image} className="object-cover  dark:bg-gray-500 rounded-xl shadow" />

                </div>
                <div className="p-3 space-y-4">
                    <h3 className="text-3xl font-semibold text-left">{bookName}</h3>
                    <p className="text-sm dark:text-gray-600 text-left"><span className='font-bold'>By:</span>{author}</p>
                    <div className=" flex flex-col md:flex-row md:w-full gap-3 md:space-x-3  md:p-5 text-left text-[#23BE0A] font-medium">
                        {
                            tags.map((tag, index) => <li key={index} className="badge badge-outline">{tag}</li>)
                        }
                        <div className=' flex justify-center text-gray-500 items-center gap-3'>
                            <IoLocationOutline />
                            <p><span className='font-bold '>Publishing:</span>{yearOfPublishing}</p>
                        </div>

                    </div>
                    <div className=' flex flex-col md:flex-row justify-start items-center space-y-4 md:gap-10'>
                        <div className='flex justify-center items-center gap-3 '>
                            <GoPeople />
                            <p><span className='font-bold'>Publisher:</span>{publisher}</p>
                        </div>
                        <div className=' -ml-16 lg:ml-16 flex justify-start md:justify-center items-center gap-3 '>
                            <MdOutlineContactPage />
                            <p><span className='font-bold'>Pages: </span>{totalPages}</p>
                        </div>
                    </div>

                    <div className=" flex flex-col md:flex-row  w-full gap-3 md:space-x-3 pl-0 lg:mt-5 font-medium">
                        <li className="badge w-40 p-4 bg-blue-200">Category:{category}</li>
                        <li className="badge w-40 p-4 bg-orange-100">Rating:{rating}</li>
                        <li className="badge hidden lg:flex  w-40 p-4 bg-[#23BE0A] text-white">View Details</li>
                        <li className="btn  lg:hidden w-40 p-4 bg-[#23BE0A] text-white">View Details</li>
                    </div>
                </div>
            </div>
        </div>
    );
};
ListCard.propTypes = {
    item: PropTypes.object
};
export default ListCard;