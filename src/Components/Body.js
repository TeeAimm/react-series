import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/restaurant-mock-List";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    const handleFilterList = () => {
        const filteredList = listOfRestaurants.filter((item)=> item?.info?.avgRating > 4.5)
        setListOfRestaurants(filteredList)
    }
    return (
        <div className="body px-4">
            <div className="search-bar">SEARCH</div>
            <div>
                <button
                    className="rounded-none bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 my-7 mx-52"
                    onClick={() => {
                        handleFilterList()
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container px-52 grid grid-cols-4 gap-4">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant?.info?.id}
                        resData={restaurant}
                    />
                ))}
            </div>
        </div>
    );
};

export default Body;
