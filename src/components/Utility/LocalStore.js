import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const saveLocalStorage = (data) => {
    console.log(data)
    const saveData = JSON.parse(localStorage.getItem('book')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    if (!existData) {
        saveData.push(data);
        localStorage.setItem('book', JSON.stringify(saveData));
        toast('Reading successfully');
    }
    else {
        toast('Already Data exist.');
    }
};
export const saveWishlistLocalStorage = (data) => {
    console.log(data)
    const saveData = JSON.parse(localStorage.getItem('wishlist')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    if (!existData) {
        saveData.push(data);
        localStorage.setItem('wishlist', JSON.stringify(saveData));
        toast('Added wishlist successfully');
    }
    else {
        toast('Already wishlist data exist.');
    }
};
export const getDataFromLocal = () => {
    const data = JSON.parse(localStorage.getItem('book')) || [];
    return data;

}
export const getDataFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('wishlist')) || [];
    return data;

}

