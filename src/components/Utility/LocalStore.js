

export const saveLocalStorage = (data) => {
    console.log(data)
    const saveData = JSON.parse(localStorage.getItem('book')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    if (!existData) {
        saveData.push(data);
        localStorage.setItem('book', JSON.stringify(saveData));
        alert('Reading successfully');
    }
    else {
        alert('Already Data exist.');
    }
};
export const saveWishlistLocalStorage = (data) => {
    console.log(data)
    const saveData = JSON.parse(localStorage.getItem('wishlist')) || []
    const existData = saveData.find((item) => item.bookId == data.bookId);
    if (!existData) {
        saveData.push(data);
        localStorage.setItem('wishlist', JSON.stringify(saveData));
        alert('Added wishlist successfully');
    }
    else {
        alert('Already wishlist data exist.');
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

