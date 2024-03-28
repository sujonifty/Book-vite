import { useEffect, useState } from "react";
import UseLocalStorage, { UseLocalStorageWishlist } from "../components/Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";
import Wish from "../components/Wish";
import { IoIosArrowDropdown } from "react-icons/io";
import { getDataFromLocalStorage } from "../components/Utility/LocalStore";


const ListedBook = () => {
    const [localStorageData] = UseLocalStorage();
    const [localStorageWishlistData] = UseLocalStorageWishlist();
    const [read, setRead] = useState([])
    const [wishlist, setWishlist] = useState([])
    useEffect(() => {
        setRead(localStorageData);
        setWishlist(getDataFromLocalStorage())
    }, [localStorageData])
    console.log(wishlist)
    // Sort by rating 
    const handleSortByRating = () => {
        localStorageData.sort((a, b) => {
            return b.rating - a.rating;

        });
        setRead([...localStorageData]);

        const wish =[...wishlist].sort((a, b) => {
            return b.rating - a.rating;

        });
        setWishlist(wish);
    }

    // sort by pages 
    const handleSortByPages = () => {
        localStorageData.sort((a, b) => {
            return b.totalPages - a.totalPages;

        });
        setRead([...localStorageData]);

        
        const wish2 =[...wishlist].sort((a, b) => {
            return b.totalPages - a.totalPages

        });
        setWishlist(wish2);
    }
    // sort by year 
    const handleSortByYear = () => {
        localStorageData.sort((a, b) => {
            return b.yearOfPublishing - a.yearOfPublishing;

        });
        setRead([...localStorageData]);
        const wish3 =[...wishlist].sort((a, b) => {
            return b.yearOfPublishing - a.yearOfPublishing

        });
        setWishlist(wish3);
    }

    return (
        <div>

            <div>
                <div className="text-3xl font-bold  p-5 rounded-xl my-4 text-center bg-gray-200">
                    <h1>Books</h1>
                </div>

                <div className="dropdown dropdown-bottom ">
                    <div tabIndex={0} role="button" className="btn m-1 text-white bg-[#23BE0A] font-bold w-40">Sort By <span className="p-3"><IoIosArrowDropdown /></span></div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a onClick={handleSortByRating} >Rating</a></li>
                        <li><a onClick={handleSortByPages} >Number of pages</a></li>
                        <li><a onClick={handleSortByYear} >Published year</a></li>
                    </ul>
                </div>

                <div role="tablist" className="tabs tabs-lifted mx-auto">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read Books" checked />
                    <div role="tabpanel" className="mx-auto tab-content bg-base-100 border-base-300 space-y-3 md:space-y-10 rounded-box md:p-6">
                        {
                            read.map((item, index) => <ListCard key={index} item={item}></ListCard>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="mx-auto tab" aria-label="Wishlist Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 space-y-3 md:space-y-10 rounded-box md:p-6">
                        {
                            localStorageWishlistData.map((wishlist, index) => <Wish key={index} wishlist={wishlist} ></Wish>)
                        }
                    </div>


                </div>

            </div>

        </div>
    );
};

export default ListedBook;