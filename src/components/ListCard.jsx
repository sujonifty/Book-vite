import PropTypes from 'prop-types';
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { MdOutlineContactPage } from "react-icons/md";

const ListCard = ({ item }) => {
    const { image, tags, review, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = item;
    return (
        <div>

            <div className="relative flex flex-col shadow-xl bg-slate-100 rounded-xl p-6 divide-y xl:flex-row xl:divide-y-0  dark:bg-gray-50 dark:text-gray-800 dark:divide-gray-300">

                <div className="flex max-w-xl w-40 items-center gap-3 p-3">
                    <img alt="" src={image} className="object-cover  dark:bg-gray-500 rounded-xl shadow" />

                </div>
                <div className="p-3 space-y-4">
                    <h3 className="text-3xl font-semibold text-left">{bookName}</h3>
                    <p className="text-sm dark:text-gray-600 text-left"><span className='font-bold'>By:</span>{author}</p>
                    <div className="flex w-full space-x-3 p-5 text-left text-[#23BE0A] font-medium">
                        {
                            tags.map((tag, index) => <li key={index} className="badge badge-outline">{tag}</li>)
                        }
                        <div className='flex justify-center text-gray-500 items-center gap-3'>
                            <IoLocationOutline />

                            <p><span className='font-bold'>Year of Publishing:</span>{yearOfPublishing}</p>
                        </div>

                    </div>
                    <div className='flex justify-start items-center gap-10'>
                        <div className='flex justify-center items-center gap-3 '>
                            <GoPeople />
                            <p><span className='font-bold'>Publisher:</span>{publisher}</p>
                        </div>
                        <div className='flex justify-center items-center gap-3 '>
                            <MdOutlineContactPage />
                            <p><span className='font-bold'>Page:</span>{publisher}</p>
                        </div>
                    </div>

                    <div className="flex  w-full space-x-3 pl-0 mt-5 font-medium"> 
                         <li className="badge  p-4 bg-blue-200">Category:{category}</li>
                         <li className="badge  p-4 bg-orange-100">Rating:{rating}</li>
                         <li className="badge  p-4 bg-[#23BE0A] text-white">View Details</li>
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