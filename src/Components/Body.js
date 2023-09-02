import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";
//import resList from "../utils/restaurant-mock-List";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredRestaurantsList, setFilteredRestaurantsList] = useState([])
    const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        const res = await fetch(SWIGGY_API)
        const jsonRes = await res.json()
        console.log(jsonRes, jsonRes?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListOfRestaurants(jsonRes?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantsList(jsonRes?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleSearchBtn = () => {
        console.log(searchText)
        const newList = listOfRestaurants.filter((item)=> item?.info?.name?.toLowerCase().includes(searchText.toLowerCase()))
        console.log(newList, )
        setFilteredRestaurantsList(newList)
    }

    const handleFilterList = () => {
        const filteredList = listOfRestaurants.filter((item)=> item?.info?.avgRating > 4.5)
        setFilteredRestaurantsList(filteredList)
    }

    return (!listOfRestaurants?.length ? <Shimmer /> :
        <div className="body px-4">
            <div className="search-bar mx-52">
                <input type="text" className="border p-2" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className="rounded-none bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 my-7" 
                onClick={()=>{handleSearchBtn()}}>Search</button>
            </div>
            <button
                className="rounded-none bg-blue-500 text-white font-bold py-2 px-4 hover:bg-blue-700 my-7 mx-52"
                onClick={() => {
                    handleFilterList()
                }}
            >
                Top Rated Restaurant
            </button>
            <div className="res-container px-52 grid grid-cols-4 gap-4">
                {filteredRestaurantsList.map((restaurant) => (
                    <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                        <RestaurantCard
                            resData={restaurant}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;
