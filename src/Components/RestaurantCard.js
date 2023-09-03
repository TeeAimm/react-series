import { CDN_URL } from "../utils/constant";

export {CDN_URL} from "../utils/constant"

const RestaurantCard = (props) => {
    console.log("old comp")
    const { resData } = props;
    const {name, cloudinaryImageId, cuisines, avgRating, locality} = resData?.info;
    //console.log(resData);
    return (
        <div className="border border-gray-50 hover:border-gray-500">
            <img
                className="w-full"
                src={
                    CDN_URL +
                    cloudinaryImageId
                }
            />
            <div>{resData?.info?.name}</div>
            <div>{cuisines?.join(', ')}</div>
            <div>{avgRating}</div>
            <div>{locality}</div>
        </div>
    );
};


// Higher order component

// Input - RestaurantCard ===> o/p - RestaurantCardVegLabel
 
export const withVegLabel = (RestaurantCard) => {
    console.log("new comp")
    return (props)=> {
        return <div className="relative">
            <label className="absolute left-1 top-1 bg-green-600 text-white text-sm py-1 px-2">VEG</label> 
            <RestaurantCard {...props}/> 
        </div>
    }
}

export default RestaurantCard;