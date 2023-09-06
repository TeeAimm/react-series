import React, { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fatchResDetails();
    }, []);
    const fatchResDetails = async () => {
        const res = await fetch(MENU_API + resId);
        const jsonRes = await res.json();
        setResInfo(jsonRes?.data?.cards);
    };
    return resInfo
};

export default useRestaurantMenu;
