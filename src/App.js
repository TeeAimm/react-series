import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


 

// json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
