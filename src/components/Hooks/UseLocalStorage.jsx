import { useEffect, useState } from "react";
import { getDataFromLocal } from "../Utility/LocalStore";


const UseLocalStorage = () => {
    const [LocalStorageData,setLocalStorageData]=useState([]);
    useEffect(()=>{
        setLocalStorageData(getDataFromLocal());
    },[]);
    return [LocalStorageData];
};

export default UseLocalStorage;
