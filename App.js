import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header flex justify-between items-center border-2">
            <div className="logo-container">
                <img
                    className="h-20"
                    src="https://png.pngtree.com/png-clipart/20230106/original/pngtree-simple-and-modern-food-logo-vector-design-png-image_8876455.png"
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

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">SEARCH</div>
            <div className="res-container px-52 grid grid-cols-4 gap-4">
                <RestaurantCard 
					resData = {resData}
				/>
            </div>
        </div>
    );
};
//restaurants?.info?.name
const resData = {
    restaurants: [
        {
            info: {
                id: "3022",
                name: "Aminia Restaurant",
                cloudinaryImageId: "ub35uaf2iferroprejgy",
                locality: "Golpark",
                areaName: "Golpark",
                costForTwo: "₹500 for two",
                cuisines: [
                    "Biryani",
                    "Mughlai",
                    "North Indian",
                    "Indian",
                    "Kebabs",
                    "Tandoor",
                ],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "3022",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 7900,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 7900,
                },
                parentId: "47",
                avgRatingString: "4.4",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 32,
                    lastMileTravel: 7.5,
                    serviceability: "SERVICEABLE",
                    slaString: "32 mins",
                    lastMileTravelString: "7.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/aminia-restaurant-golpark-kolkata-3022",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "3071",
                name: "Jai Hind Dhaba",
                cloudinaryImageId: "cdbdjcego1vt4reojqiy",
                locality: "Bhawanipur",
                areaName: "Bhowanipore",
                costForTwo: "₹500 for two",
                cuisines: [
                    "North Indian",
                    "Indian",
                    "Tandoor",
                    "Kebabs",
                    "Punjabi",
                    "Home Food",
                    "Chinese",
                ],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "3071",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "1928",
                avgRatingString: "4.4",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 28,
                    lastMileTravel: 4.9,
                    serviceability: "SERVICEABLE",
                    slaString: "28 mins",
                    lastMileTravelString: "4.9 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 05:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "30% OFF",
                    subHeader: "UPTO ₹75",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/jai-hind-dhaba-bhawanipur-bhowanipore-kolkata-3071",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "5251",
                name: "Bachan's Dhaba",
                cloudinaryImageId: "ggez5y5emtvp50kbtd8s",
                locality: "Near Kalighat Metro, Rash Behari Avenue",
                areaName: "Kalighat",
                costForTwo: "₹250 for two",
                cuisines: ["North Indian", "Chinese"],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "5251",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 7400,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 7400,
                },
                parentId: "6136",
                avgRatingString: "4.4",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 34,
                    lastMileTravel: 7.3,
                    serviceability: "SERVICEABLE",
                    slaString: "34 mins",
                    lastMileTravelString: "7.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 00:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "10% OFF",
                    subHeader: "ABOVE ₹800",
                    discountTag: "FLAT DEAL",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/bachans-dhaba-near-metro-rash-behari-avenue-kalighat-kolkata-5251",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "23935",
                name: "Domino's Pizza",
                cloudinaryImageId: "srsxx6srasrjky3hupbo",
                locality: "Millennium City",
                areaName: "Kankurgachi",
                costForTwo: "₹400 for two",
                cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "23935",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "2456",
                avgRatingString: "4.4",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 30,
                    lastMileTravel: 3.9,
                    serviceability: "SERVICEABLE",
                    slaString: "30 mins",
                    lastMileTravelString: "3.9 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 02:57:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "₹100 OFF",
                    subHeader: "ABOVE ₹999",
                    discountTag: "FLAT DEAL",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/dominos-pizza-millennium-city-kankurgachi-kolkata-23935",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "149283",
                name: "Pizza Hut",
                cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                locality: "FCD Park Street Kolkata",
                areaName: "Park Street Area",
                costForTwo: "₹350 for two",
                cuisines: ["Fast Food", "Pizzas"],
                avgRating: 4,
                feeDetails: {
                    restaurantId: "149283",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "721",
                avgRatingString: "4.0",
                totalRatingsString: "5K+",
                sla: {
                    deliveryTime: 29,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "29 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 05:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/pizza-hut-fcd-park-street-park-street-area-kolkata-149283",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "39236",
                name: "KFC",
                cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
                locality: "Central",
                areaName: "Park Street Area",
                costForTwo: "₹450 for two",
                cuisines: [
                    "Burgers",
                    "Biryani",
                    "American",
                    "Snacks",
                    "Fast Food",
                ],
                avgRating: 4.3,
                feeDetails: {
                    restaurantId: "39236",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "547",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 26,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "26 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 02:59:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹50",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/kfc-central-park-street-area-kolkata-39236",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "8912",
                name: "Subway",
                cloudinaryImageId: "0bf19a82b109b40c2f5c56d00f071a33",
                locality: "Park Street",
                areaName: "Park Street",
                costForTwo: "₹350 for two",
                cuisines: [
                    "Healthy Food",
                    "Salads",
                    "Snacks",
                    "Desserts",
                    "Beverages",
                ],
                avgRating: 4.1,
                feeDetails: {
                    restaurantId: "8912",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "2",
                avgRatingString: "4.1",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 25,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "25 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 03:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/subway-park-street-kolkata-8912",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "407661",
                name: "Burger King",
                cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                locality: "New Market",
                areaName: "Esplanade",
                costForTwo: "₹350 for two",
                cuisines: ["Burgers", "American"],
                avgRating: 4.2,
                feeDetails: {
                    restaurantId: "407661",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 3300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 3300,
                },
                parentId: "166",
                avgRatingString: "4.2",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 24,
                    lastMileTravel: 2.8,
                    serviceability: "SERVICEABLE",
                    slaString: "24 mins",
                    lastMileTravelString: "2.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 03:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "60% OFF",
                    subHeader: "UPTO ₹120",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/burger-king-new-market-esplanade-kolkata-407661",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "466935",
                name: "Peter Hu?",
                cloudinaryImageId: "oukpnymiw7gtvp44svea",
                locality: "Park Street",
                areaName: "Park Street",
                costForTwo: "₹1200 for two",
                cuisines: ["Asian", "Chinese", "Pan-Asian", "Thai", "Japanese"],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "466935",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "280345",
                avgRatingString: "4.4",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 29,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "29 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:00:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "60% OFF",
                    subHeader: "UPTO ₹120",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/peter-hu-park-street-kolkata-466935",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "4484",
                name: "Mocambo",
                cloudinaryImageId: "syvxzreznmd3nmnwelwp",
                locality: "Park Street",
                areaName: "Park Street",
                costForTwo: "₹1500 for two",
                cuisines: ["North Indian", "Biryani", "Continental", "Italian"],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "4484",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "137494",
                avgRatingString: "4.4",
                totalRatingsString: "5K+",
                sla: {
                    deliveryTime: 30,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "30 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:20:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "60% OFF",
                    subHeader: "UPTO ₹120",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/mocambo-park-street-kolkata-4484",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "355776",
                name: "Grameen Kulfi",
                cloudinaryImageId: "pj3ldvf9eyhzfsb80wfx",
                locality: "Mackenzie Lane",
                areaName: "Salkia",
                costForTwo: "₹120 for two",
                cuisines: ["Ice Cream", "Desserts"],
                avgRating: 4.7,
                veg: true,
                feeDetails: {
                    restaurantId: "355776",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "12175",
                avgRatingString: "4.7",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 25,
                    lastMileTravel: 4.3,
                    serviceability: "SERVICEABLE",
                    slaString: "25 mins",
                    lastMileTravelString: "4.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "₹151 OFF",
                    subHeader: "ABOVE ₹899",
                    discountTag: "FLAT DEAL",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/grameen-kulfi-mackenzie-lane-salkia-kolkata-355776",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "258968",
                name: "Machhli Baba Fries",
                cloudinaryImageId: "pqqqckhvkmfazk9iahv0",
                locality: "Bentick Street",
                areaName: "Burrabazar",
                costForTwo: "₹300 for two",
                cuisines: ["Bengali"],
                avgRating: 4.3,
                feeDetails: {
                    restaurantId: "258968",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 3800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 3800,
                },
                parentId: "4413",
                avgRatingString: "4.3",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 25,
                    lastMileTravel: 1.7,
                    serviceability: "SERVICEABLE",
                    slaString: "25 mins",
                    lastMileTravelString: "1.7 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 00:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹50",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/machhli-baba-fries-bentick-street-burrabazar-kolkata-258968",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "16102",
                name: "Kasturi Restaurant",
                cloudinaryImageId: "bzjxi9y5sbywps82fhso",
                locality: "New Market",
                areaName: "New Market",
                costForTwo: "₹400 for two",
                cuisines: ["Bengali", "Biryani", "Thalis", "Desserts"],
                avgRating: 4.2,
                feeDetails: {
                    restaurantId: "16102",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 3800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 3800,
                },
                parentId: "2046",
                avgRatingString: "4.2",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 30,
                    lastMileTravel: 2.3,
                    serviceability: "SERVICEABLE",
                    slaString: "30 mins",
                    lastMileTravelString: "2.3 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "40% OFF",
                    subHeader: "UPTO ₹80",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/kasturi-restaurant-new-market-kolkata-16102",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "17602",
                name: "Don Giovanni's",
                cloudinaryImageId: "dldatsfuylpxgkieqfpk",
                locality: "Opp Mocambo",
                areaName: "Taltala",
                costForTwo: "₹1300 for two",
                cuisines: [
                    "North Indian",
                    "Chinese",
                    "Italian",
                    "Pizzas",
                    "Thai",
                ],
                avgRating: 4.1,
                feeDetails: {
                    restaurantId: "17602",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "6196",
                avgRatingString: "4.1",
                totalRatingsString: "5K+",
                sla: {
                    deliveryTime: 35,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "35 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 03:36:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "50% OFF",
                    subHeader: "UPTO ₹100",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/don-giovannis-opp-mocambo-taltala-kolkata-17602",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "368032",
                name: "Chowman",
                cloudinaryImageId: "06d12ec700e4118d159fab6c3a7256dd",
                locality: "Maniktala",
                areaName: "Maniktala",
                costForTwo: "₹700 for two",
                cuisines: [
                    "Chinese",
                    "Asian",
                    "Thai",
                    "Oriental",
                    "Burmese",
                    "Tibetan",
                ],
                avgRating: 4.3,
                feeDetails: {
                    restaurantId: "368032",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "266",
                avgRatingString: "4.3",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 27,
                    lastMileTravel: 3.5,
                    serviceability: "SERVICEABLE",
                    slaString: "27 mins",
                    lastMileTravelString: "3.5 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 22:30:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "60% OFF",
                    subHeader: "UPTO ₹120",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/chowman-maniktala-kolkata-368032",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "63215",
                name: "Ping's Cafe Orient",
                cloudinaryImageId: "pmzdtcsypeesgr1ia2xb",
                locality: "Park Street",
                areaName: "Park Street",
                costForTwo: "₹1500 for two",
                cuisines: ["Asian"],
                avgRating: 4.4,
                feeDetails: {
                    restaurantId: "63215",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "16238",
                avgRatingString: "4.4",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 27,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "27 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:30:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "₹125 OFF",
                    subHeader: "ABOVE ₹249",
                    discountTag: "FLAT DEAL",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/pings-cafe-orient-park-street-kolkata-63215",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "322208",
                name: "Burma Burma",
                cloudinaryImageId: "2f53710b2bc94cd3f96c324d3a58cf39",
                locality: "Park Street",
                areaName: "Park Street",
                costForTwo: "₹1500 for two",
                cuisines: [
                    "Burmese",
                    "Asian",
                    "Salads",
                    "Ice Cream",
                    "Desserts",
                ],
                avgRating: 4.5,
                veg: true,
                feeDetails: {
                    restaurantId: "322208",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "3712",
                avgRatingString: "4.5",
                totalRatingsString: "500+",
                sla: {
                    deliveryTime: 29,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "29 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 22:30:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/burma-burma-park-street-kolkata-322208",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "51296",
                name: "The Fatty Bao",
                cloudinaryImageId: "oaqvfni0ruhdsbkcebc6",
                locality: "Camac Street",
                areaName: "Camac Street",
                costForTwo: "₹1500 for two",
                cuisines: ["Asian"],
                avgRating: 4.3,
                feeDetails: {
                    restaurantId: "51296",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4800,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4800,
                },
                parentId: "3526",
                avgRatingString: "4.3",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 34,
                    lastMileTravel: 3,
                    serviceability: "SERVICEABLE",
                    slaString: "34 mins",
                    lastMileTravelString: "3.0 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-30 23:15:00",
                    opened: true,
                },
                badges: {
                    imageBadges: [
                        {
                            imageId: "newg.png",
                            description: "Gourmet",
                        },
                    ],
                },
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {
                            badgeObject: [
                                {
                                    attributes: {
                                        description: "Gourmet",
                                        imageId: "newg.png",
                                    },
                                },
                            ],
                        },
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "₹151 OFF",
                    subHeader: "ABOVE ₹799",
                    discountTag: "FLAT DEAL",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/the-fatty-bao-camac-street-kolkata-51296",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "30490",
                name: "Baskin Robbins - Ice Cream Desserts",
                cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
                locality: "Shakespeare Sarani Road",
                areaName: "Elgin",
                costForTwo: "₹400 for two",
                cuisines: ["Ice Cream", "Desserts"],
                avgRating: 4.7,
                veg: true,
                feeDetails: {
                    restaurantId: "30490",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 4300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 4300,
                },
                parentId: "5588",
                avgRatingString: "4.7",
                totalRatingsString: "1K+",
                sla: {
                    deliveryTime: 25,
                    lastMileTravel: 4.2,
                    serviceability: "SERVICEABLE",
                    slaString: "25 mins",
                    lastMileTravelString: "4.2 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 03:00:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹50",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-shakespeare-sarani-road-elgin-kolkata-30490",
                type: "WEBLINK",
            },
        },
        {
            info: {
                id: "37107",
                name: "Natural Ice Cream",
                cloudinaryImageId: "ow0tfhk3nw7ag7telsy1",
                locality: "Park street",
                areaName: "Taltala",
                costForTwo: "₹150 for two",
                cuisines: ["Ice Cream", "Desserts"],
                avgRating: 4.7,
                veg: true,
                feeDetails: {
                    restaurantId: "37107",
                    fees: [
                        {
                            name: "BASE_DISTANCE",
                            fee: 3300,
                        },
                        {
                            name: "BASE_TIME",
                        },
                        {
                            name: "ANCILLARY_SURGE_FEE",
                        },
                    ],
                    totalFee: 3300,
                },
                parentId: "2093",
                avgRatingString: "4.7",
                totalRatingsString: "10K+",
                sla: {
                    deliveryTime: 20,
                    lastMileTravel: 2.8,
                    serviceability: "SERVICEABLE",
                    slaString: "20 mins",
                    lastMileTravelString: "2.8 km",
                    iconType: "ICON_TYPE_EMPTY",
                },
                availability: {
                    nextCloseTime: "2023-08-31 00:45:00",
                    opened: true,
                },
                badges: {},
                isOpen: true,
                type: "F",
                badgesV2: {
                    entityBadges: {
                        imageBased: {},
                        textBased: {},
                        textExtendedBadges: {},
                    },
                },
                aggregatedDiscountInfoV3: {
                    header: "20% OFF",
                    subHeader: "UPTO ₹50",
                    discountCalloutInfo: {
                        message: "Free Delivery",
                        logoCtx: {
                            logo: "v1655895371/free_delivery_logo_hqipbo.png",
                        },
                    },
                },
                differentiatedUi: {
                    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    differentiatedUiMediaDetails: {
                        mediaType: "ADS_MEDIA_ENUM_IMAGE",
                        lottie: {},
                        video: {},
                    },
                },
                reviewsSummary: {},
                displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                restaurantOfferPresentationInfo: {},
            },
            analytics: {},
            cta: {
                link: "https://www.swiggy.com/restaurants/natural-ice-cream-park-street-taltala-kolkata-37107",
                type: "WEBLINK",
            },
        },
    ],
};
// json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
const RestaurantCard = (props) => {
	const {resData} = props;
	console.log(resData)
    return (
        <div className="border border-gray-50 hover:border-gray-500">
            <img
                className="w-full"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
            />
            <div>{resData?.restaurants[0]?.info?.name}</div>
            <div>{resData?.restaurants[0]?.info?.cuisines?.toString()}</div>
            <div>{resData?.restaurants[0]?.info?.cuisine?.avgRating}</div>
            <div>{resData?.restaurants[0]?.info?.cuisine?.locality}</div>
        </div>
    );
};

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
