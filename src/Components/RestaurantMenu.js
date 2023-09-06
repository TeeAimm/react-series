import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [expandIndex, setExpandIndex] = useState(0);

    if (resInfo === null) {
        return <Shimmer />;
    }

    //console.log(resInfo[0]?.card?.card?.info);
    const { id, name, costForTwoMessage, cuisines, locality, areaName, city } = resInfo[0]?.card?.card?.info;
    const { itemCards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((item) => item?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    //console.log("i -", categories);


    return (
        <>
            <div className="grid grid-cols-7 gap-4">
                <div className="col-start-3 col-span-3 py-5">
                    <h1 className="text-center font-bold text-xxl ">{name}</h1>
                    <div>{cuisines?.join(', ')}</div>
                    <div className="border border-b-2 border-t-0 border-x-0">{costForTwoMessage}</div>
                    <h5 className="font-semibold text-lg">Menu - </h5>
                    {categories?.map((item, index)=> 
                        <RestaurantCategory 
                            key={index} 
                            showItem={expandIndex===index}
                            setExpandIndex={()=>setExpandIndex(index)}
                            {...item?.card?.card}
                        />)}
                </div>
            </div>

        </>
    );
};

export default RestaurantMenu;
