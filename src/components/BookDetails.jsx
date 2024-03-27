import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseBooks from "./Hooks/UseBooks";
import  {saveLocalStorage } from "./Utility/LocalStore";

const BookDetails = () => {
    const handleBook=()=>{
        saveLocalStorage(data);
    }
    const [data, setData] = useState({})
    const { id } = useParams();
    const { books, loading} = UseBooks();

    useEffect(() => {
        if (books) {
            const singleData = books.find((item) => item.bookId == id)
            setData(singleData);
        }
    }, [books, id])
    const { image, tags, review, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = data || {};
    


    /*
    const handleWish=()=>{
        saveLocalStorage(data);
    }
    const [wishData, setWishData] = useState({});
    useEffect(() => {
        if (books) {
            const singleWishData = books.find((item) => item.bookId == id)
            setWishData(singleWishData);
        }
    }, [])
   console.log(wishData)
   */

    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow w-1/2 card bg-base-200 p-5 rounded-box place-items-center">
                    <img src={image} alt="Book" />
                </div>
                <div className="grid flex-grow  border rounded-lg text-left p-10">
                    <h1 className="card-title">{bookName}</h1>
                    <p>By : {author}</p>
                    <div className="">
                        <p>{category}</p>
                    </div>
                    <p className="text-lg font-bold">Review:{review}</p>
                    <div className="card-action space-x-3 p-5 pl-0 text-[#23BE0A] font-medium">
                        <span className="font-bold text-black mr-3">Tag:</span>
                        {
                            tags?.map((item, index) => <li key={index} className="badge font-medium badge-outline">#{item}</li>)
                        }
                    </div>
                    <div className="p-2">
                        <div className="flex justify-start items-center gap-10">
                            <p>Number of Pages:</p>
                            <p>{totalPages}</p>
                        </div>
                        <div className="flex justify-start items-center gap-24">
                            <p>Publisher:</p>
                            <p>{publisher}</p>
                        </div>
                        <div className="flex justify-start items-center gap-10">
                            <p>Year of Publishing:</p>
                            <p>{yearOfPublishing}</p>
                        </div>
                        <div className="flex justify-start items-center gap-24">
                            <p>Rating:</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="  space-x-6">
                        <button onClick={handleBook} className="btn  ">Read</button>
                        <button  className="btn btn-ghost bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;