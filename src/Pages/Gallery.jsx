

const Gallery = () => {

    return (
        <div>
            <div className="text-3xl font-bold  p-5 rounded-xl my-4 text-center bg-gray-200">
                <h1>Books Gallery</h1>
            </div>
            <section className="py-6 my-16 bg-gray-200 dark:bg-gray-100 dark:text-gray-900">
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

