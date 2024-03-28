import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseBooks from "./Hooks/UseBooks";
import {  saveLocalStorage, saveWishlistLocalStorage } from "./Utility/LocalStore";


const BookDetails = () => {
    const handleBook = () => {
        saveLocalStorage(data);
    }
    const handleWishlistBook = () => {
        saveWishlistLocalStorage(data);
    }
    const [data, setData] = useState({})
    const { id } = useParams();
    const { books, loading } = UseBooks();

    useEffect(() => {
        if (books) {
            const singleData = books.find((item) => item.bookId == id)
            setData(singleData);
        }
    }, [books, id])
    const { image, tags, review, bookName, author, category, rating, totalPages, publisher, yearOfPublishing } = data || {};

    return (
        <div>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid flex-grow lg:w-1/2 card bg-base-200 lg:p-5 rounded-box place-items-center">
                    <img src={image} alt="Book" />
                </div>
                <div className="grid flex-grow  border rounded-lg text-left lg:p-10">
                    <h1 className="card-title playfair-display">{bookName}</h1>
                    <p>By : {author}</p>
                    <div className="">
                        <p>Category:{category}</p>
                    </div>
                    <p ><span className="text-lg font-bold">Review:</span>{review}</p>
                    <div className="card-action lg:space-x-3 lg:p-5 pl-0 text-[#23BE0A] font-medium">
                        <span className="font-bold text-black lg:mr-3">Tag:</span>
                        {
                            tags?.map((item, index) => <li key={index} className="badge font-medium badge-outline">#{item}</li>)
                        }
                    </div>
                    <div className="lg:p-2 space-y-3">
                        <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-10">
                            <p>Number of Pages:</p>
                            <p>{totalPages}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-24">
                            <p>Publisher:</p>
                            <p>{publisher}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-start items-center lg:gap-10">
                            <p>Year of Publishing:</p>
                            <p>{yearOfPublishing}</p>
                        </div>
                        <div className="flex  justify-center lg:justify-start items-center lg:gap-24">
                            <p>Rating:</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className=" space-x-10  lg:space-x-6">
                        <button onClick={handleBook} className="btn  ">Read</button>
                        <button onClick={handleWishlistBook} className="btn btn-ghost bg-[#50B1C9]">Wishlist</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;