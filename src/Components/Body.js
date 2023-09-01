import RestaurantCard from "./RestaurantCard";
import resList from "../utils/restaurant-mock-List";

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">SEARCH</div>
            <div className="res-container px-52 grid grid-cols-4 gap-4">
                {resList.map((restaurant)=><RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>)} 
            </div>
        </div>
    );
};

export default Body;