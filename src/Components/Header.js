import {LOGO_URL} from "../utils/constant"

const Header = () => {
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
        </div>
    );
};

export default Header;