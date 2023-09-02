import { useState } from "react";
import {LOGO_URL} from "../utils/constant"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
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
                    <li className="pr-4">Home</li>
                    <li className="pr-4">About Us</li>
                    <li className="pr-4">Contact Us</li>
                    <li className="pr-4">Cart</li>
                </ul>
            </div>
            <button 
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={()=>{
                    btnName === 'Login' ? setBtnName('LogOut') : setBtnName('Login')
                }}>{btnName}</button>
        </div>
    );
};

export default Header;