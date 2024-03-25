import { useEffect, useState } from "react";


const UseBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('./Books.json')
            .then(res => res.json())
            .then(data => setBooks(data))
        setLoading(false)
    }, [])
    return ([books, loading]);
};

export default UseBooks;