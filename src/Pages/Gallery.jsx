

const Gallery = () => {

    return (
        <div>
            <section className="py-6 bg-gray-200 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 ">
                    <img src="https://i.ibb.co/5WNw12x/b8.png" alt="" className="hover:scale-75 w-full h-full bg-cover col-span-2 row-span-2 bg-blue-200 border-blue-300 border-4 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/SVry0CD/b0.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/JCm1Yjt/b6.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/Lh7zWj0/b2.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/PcpJDDV/b3.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/sCRytXK/b4.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/BK647HY/b5.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/JCm1Yjt/b6.png" />
                    <img alt="" className="hover:scale-150 w-full h-full rounded shadow-xl min-h-48 bg-blue-200 dark:bg-white-100 border-blue-300 border-4  aspect-square" src="https://i.ibb.co/5WNw12x/b8.png" />
                    <img src="https://i.ibb.co/MgkK5wk/b1.png" alt="" className="hover:scale-75 w-full h-full col-span-2 bg-blue-200 border-blue-300 border-4 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="container flex flex-col justify-center items-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex items-center justify-center lg:p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                        <img src="https://i.ibb.co/4RC8sgC/apibook.webp" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    </div>
                    <div className="flex  rounded-xl  flex-col justify-center lg:p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className=" lg:text-5xl font-bold leading-none sm:text-xl">Import Books

                            <span className="dark:text-violet-600">via API</span>From Open Library & Google Books.
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">This is a handy tool that saves a lot of typing. All you need is the ISBN 10 number of the book you want to import.
                            <br className="hidden md:inline lg:hidden" />The importer brings in all the book details from the Google Books Archive. You can add multiple ISBNs at once, separated by a comma.
                        </p>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="btn px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 btn-info text-white">Get Started</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;

/* import { useEffect, useState } from "react";
    import { Link, Outlet } from "react-router-dom";
    import { getBookForReadlist } from "../../Localstorage/localstorageReadlist";
    import ReadBooks from "../ReadBooks/ReadBooks";

    function ListedBooks() {
        const [readedBooks, setReadedBooks] = useState([]);

        const [tabs, setTabs] = useState(0);

        // const readBooks = useLoaderData();
        const [readBooks, setRaadBooks] = useState([]);
        useEffect(() => {
            fetch("/books.json")
                .then((res) => res.json())
                .then((data) => setRaadBooks(data));
        }, []);

        useEffect(() => {
            const storedReadlistId = getBookForReadlist();
            if (readBooks.length) {
                const readedBook = [];
                for (const id of storedReadlistId) {
                    const book = readBooks.find((book) => book.bookId === id);
                    if (book) {
                        readedBook.push(book);
                    }
                }
                console.log("readBooks", readedBook);
                setReadedBooks(readedBook);
                // setBooklistItem(readBooks);
            }
        }, [readBooks]);

        console.log(readedBooks);
        const sortedByRating = () => {
            console.log("TEST");
            console.log(readedBooks);
            const sortedCardByRating = readedBooks.sort((a, b) => a.rating - b.rating);
            setReadedBooks([...sortedCardByRating]);
            // localStorage.setItem(
            //   "book-card-readlist",
            //   JSON.stringify(sortedCardByRating.map((book) => book.bookId))
            // );
        };
        const sortedByPage = () => {
            console.log(readedBooks);
            const sortedCardByPage = readedBooks.sort(
                (a, b) => a.totalPages - b.totalPages
            );
            console.log(sortedCardByPage);
            // localStorage.setItem(
            //   "book-card-readlist",
            //   JSON.stringify(sortedCardByPage.map((book) => book.bookId))
            // );
        };
        const sortedByYear = () => {
            console.log(readedBooks);
            const sortedCardByYear = readedBooks.sort(
                (a, b) => a.yearOfPublishing - b.yearOfPublishing
            );
            console.log(sortedCardByYear);
            // localStorage.setItem(
            //   "book-card-readlist",
            //   JSON.stringify(sortedCardByYear.map((book) => book.bookId))
            // );
        };
        return (
            <div className="max-w-7xl mx-auto">
                <h1 className="font-bold text-3xl text-center py-8 rounded-2xl bg-gray-100">
                    Books
                </h1>
                <div className="flex items-center justify-center my-6">
                    <details className="dropdown">
                        <summary className="m-1 btn bg-green-500 text-white hover:bg-green-400">
                            Sort By <i className="ri-arrow-down-s-line"></i>
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li>
                                <button onClick={() => sortedByRating()} type="button">
                                    Rating
                                </button>
                            </li>
                            <li>
                                <button onClick={() => sortedByPage()}>Number of pages</button>
                            </li>
                            <li>
                                <button onClick={() => sortedByYear()}>Publisher year</button>
                            </li>
                        </ul>
                    </details>
                </div>
                <div className="flex items-center mx-4 overflow-x-auto overflow-y-hidden  flex-nowrap  dark:text-gray-800">
                    <Link
                        onClick={() => setTabs(0)}
                        rel="noopener noreferrer"
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 0 ? "border border-b-0" : "border-b"
                            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link
                        onClick={() => setTabs(1)}
                        rel="noopener noreferrer"
                        to="WishlistBooks"
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabs === 1 ? "border border-b-0" : "border-b"
                            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                        >
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>
                </div>
                {tabs == 0 && <ReadBooks readedBook={readedBooks} />}
                {tabs == 1 && <ReadBooks readedBook={readedBooks} />}
            </div>
        );
    }

    export default ListedBooks;
    */


