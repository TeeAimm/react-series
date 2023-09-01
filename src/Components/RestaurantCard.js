import { CDN_URL } from "../utils/constant";

export {CDN_URL} from "../utils/constant"

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name, cloudinaryImageId, cuisines, avgRating, locality} = resData?.info;
    console.log(resData);
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
            <div>{cuisines?.toString()}</div>
            <div>{avgRating}</div>
            <div>{locality}</div>
        </div>
    );
};

export default RestaurantCard;