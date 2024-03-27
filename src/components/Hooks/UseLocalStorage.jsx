import { useEffect, useState } from "react";
import { getDataFromLocal, getDataFromLocalStorage } from "../Utility/LocalStore";


const UseLocalStorage = () => {
    const [LocalStorageData,setLocalStorageData]=useState([]);
    useEffect(()=>{
        setLocalStorageData(getDataFromLocal());
    },[]);
    return [LocalStorageData];
};
export const UseLocalStorageWishlist = () => {
    const [localStorageWishlistData,setLocalStorageWishlistData]=useState([]);
    useEffect(()=>{
        setLocalStorageWishlistData(getDataFromLocalStorage());
    },[]);
    return [localStorageWishlistData];
};

export default UseLocalStorage;
