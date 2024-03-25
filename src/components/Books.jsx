import BookCard from "./BookCard";
import UseBooks from "./Hooks/UseBooks";



const Books = () => {
    const [data,loading]= UseBooks();
    // console.log(data)
    return (
        <div>
            {/* <UseBooks></UseBooks> */}
            {
                data.map(book=><BookCard key={book.bookId} book={book}></BookCard>)
            }
        </div>
    );
};

export default Books;