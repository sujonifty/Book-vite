import UseLocalStorage from "../components/Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";


const ListedBook = () => {
    const [localStorageData ] = UseLocalStorage();
    console.log('aa', localStorageData);
    return (
        <div>
            {
                localStorageData.map((item, index)=><ListCard key={index} item={item}></ListCard>)
            }
            
        </div>
    );
};

export default ListedBook;