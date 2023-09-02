import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fatchResDetails();
    }, []);

    const fatchResDetails = async () => {
        const res = await fetch(MENU_API + resId);
        const jsonRes = await res.json();
        console.log(jsonRes, jsonRes?.data?.cards);
        setResInfo(jsonRes?.data?.cards);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    console.log(resInfo[0]?.card?.card?.info);
    const { id, name, costForTwoMessage, cuisines, locality, areaName, city } =
        resInfo[0]?.card?.card?.info;
    const { itemCards } =
        resInfo[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log("i -", itemCards);

    return (
        <>
            <h1>{name}</h1>
            <div>{cuisines?.toString()}</div>
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
