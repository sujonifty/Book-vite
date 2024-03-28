import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveLocalStorage = (data) => {
    // console.log(data)
    const saveData = JSON.parse(localStorage.getItem('book')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    if (!existData) {
        saveData.push(data);
        localStorage.setItem('book', JSON.stringify(saveData));
        toast('Reading successfully');
    }
    else {
        toast("it's already been added. ");
    }
};
export const saveWishlistLocalStorage = (data) => {
    console.log(data)
    const saveData = JSON.parse(localStorage.getItem('wishlist')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    const saveData2 = JSON.parse(localStorage.getItem('book')) || []
    const existData2 = saveData2.find((item) => item.bookId == data.bookId);
    if (existData) {
        return toast('Already wishlist data exist.');
    }
    if (existData2) {
        return toast('Already readlist data exist.');
    }

    saveData.push(data);
    localStorage.setItem('wishlist', JSON.stringify(saveData));
    toast('Added wishlist successfully');
};
export const getDataFromLocal = () => {
    const data = JSON.parse(localStorage.getItem('book')) || [];
    return data;

}
export const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    return data;

}

