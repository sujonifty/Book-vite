import { useEffect, useState } from "react";
import UseLocalStorage, { UseLocalStorageWishlist } from "../components/Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";
import Wish from "../components/Wish";


const ListedBook = () => {
    const [localStorageData] = UseLocalStorage();
    const [localStorageWishlistData]=UseLocalStorageWishlist();
    const[read,setRead]=useState([])
useEffect(()=>{
    setRead(localStorageData)
},[localStorageData])
    // Sort by rating 
    const handleSortByRating=()=>{
        localStorageData.sort((a, b) => {
            return b.rating - a.rating ;
            
        });
        setRead([...localStorageData]);
    }
    
    // sort by pages 
    const handleSortByPages=()=>{
        localStorageData.sort((a, b) => {
            return b.totalPages - a.totalPages ;
            
        });
        setRead([...localStorageData]);
    }
    // sort by year 
    const handleSortByYear=()=>{
        localStorageData.sort((a, b) => {
            return b.yearOfPublishing - a.yearOfPublishing ;
            
        });
        setRead([...localStorageData]);
    }
    
    return (
        <div>

            <div>
                <div className="text-3xl font-bold  p-5 rounded-xl my-4 text-center bg-gray-200">
                    <h1>Books</h1>
                </div>
                <button onClick={handleSortByRating} className="btn">Sort by rating </button>
                <button onClick={handleSortByPages} className="btn">Sort by Pages </button>
                <button onClick={handleSortByYear} className="btn">Sort by year </button>

                <select className="select  text-white bg-[#23BE0A] w-40" >
                    <option disabled selected className="bg-white text-black font-semibold">Sort by</option>
                    <option onSelect={handleSortByRating} className="bg-white text-black font-semibold" >Rating</option>
                    <option onClick={handleSortByPages} className="bg-white text-black font-semibold" >Number of pages</option>
                    <option onClick={handleSortByYear} className="bg-white text-black font-semibold" >Published year</option>
                </select>

                <div role="tablist" className="tabs tabs-lifted mx-auto">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read Books" checked/>
                    <div role="tabpanel" className="mx-auto tab-content bg-base-100 border-base-300 space-y-3 md:space-y-10 rounded-box md:p-6">
                        {
                            read.map((item, index) => <ListCard key={index} item={item}></ListCard>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="mx-auto tab" aria-label="Wishlist Books"  />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 space-y-3 md:space-y-10 rounded-box md:p-6">
                        {
                            localStorageWishlistData.map((wishlist,index)=><Wish key={index} wishlist={wishlist} ></Wish>)
                        }
                    </div>


                </div>

            </div>

        </div>
    );
};

export default ListedBook;