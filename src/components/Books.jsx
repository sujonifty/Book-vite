import BookCard from "./BookCard";
import UseBooks from "./Hooks/UseBooks";



const Books = () => {
    const [data, loading] = UseBooks();
    // console.log(data)
    return (
        <div>
            {/* <UseBooks></UseBooks> */}
            <h1 className="text-4xl font-bold mt-16 mb-7">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                
                {
                    data.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;