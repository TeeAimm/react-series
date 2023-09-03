import { useState } from "react";
import {LOGO_URL} from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const isOnline = useOnlineStatus()
    return (
        <div className="header flex justify-between items-center border-2">
            <div className="logo-container">
                <img
                    className="h-20"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul className="flex items-center">
                    <li>{isOnline ? "✅" : "🛑"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="pr-4"><Link to="/about">About Us</Link></li>
                    <li className="pr-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="pr-4"><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
            <button 
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>{
                    btnName === 'Login' ? setBtnName('LogOut') : setBtnName('Login')
                }}>{btnName}</button>
        </div>
    );
};

export default Header;