import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) {
        return <Shimmer />;
    }

    //console.log(resInfo[0]?.card?.card?.info);
    const { id, name, costForTwoMessage, cuisines, locality, areaName, city } = resInfo[0]?.card?.card?.info;
    const { itemCards } = resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("i -", resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR);

    return (
        <>
            <h1>{name}</h1>
            <div>{cuisines?.join(', ')}</div>
            <div>{costForTwoMessage}</div>
            <h5>Menu - </h5>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - Rs.{" "}
                        {(item?.card?.info?.price ||
                            item?.card?.info?.defaultPrice) / 100}{" "}
                        /-
                    </li>
                ))}
            </ul>
        </>
    );
};

export default RestaurantMenu;
