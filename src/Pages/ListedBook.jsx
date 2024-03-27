import UseLocalStorage from "../components/Hooks/UseLocalStorage";
import ListCard from "../components/ListCard";


const ListedBook = () => {
    const [localStorageData] = UseLocalStorage();
    
    return (
        <div>

            <div>
                <div className="text-3xl font-bold  p-5 rounded-xl my-4 text-center bg-gray-200">
                    <h1>Books</h1>
                </div>
                <select className="select  text-white bg-[#23BE0A] w-40" >
                    <option disabled selected className="bg-white text-black font-semibold">Sort by</option>
                    <option className="bg-white text-black font-semibold" >Rating</option>
                    <option className="bg-white text-black font-semibold" >Number of pages</option>
                    <option className="bg-white text-black font-semibold" >Published year</option>
                </select>

                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab " aria-label="Read Books" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 space-y-10 rounded-box p-6">
                        {
                            localStorageData.map((item, index) => <ListCard key={index} item={item}></ListCard>)
                        }
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>


                </div>

            </div>

        </div>
    );
};

export default ListedBook;