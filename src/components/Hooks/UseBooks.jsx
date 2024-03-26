import { useEffect, useState } from "react";


const UseBooks = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(`/Books.json`);
            const data = await res.json();
            setBooks(data);
            setLoading(false);
        }
        fetchData();
    }, [])
    return {books, loading};
};

export default UseBooks;