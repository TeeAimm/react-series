import React from 'react'
import { CDN_URL } from './RestaurantCard'

const CategoryItemList = ({ itemCards }) => {
    return (
        <ul className='pb-2 '>
            {itemCards?.map((item) =>
                <li key={item?.card?.info?.id} className='border-b-2 py-4 flex justify-between items-center'>
                    <div className='w-4/5'>
                        <div>{item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' ? '🔴' : '🟢'}</div>
                        <div className='font-medium'>
                            {item?.card?.info?.name} - Rs.{" "}
                            {(item?.card?.info?.price || item?.card?.info?.defaultPrice) / 100}{" "} /-
                        </div>
                        <div className='text-sm text-gray-400 pt-2'>{item?.card?.info?.description}</div>
                    </div>
                    <div className='text-center'>
                        <img src={CDN_URL + item?.card?.info?.imageId} className='w-28 h-24'/>
                        <button className='rounded-none border px-3 py-1 text-sm relative bg-white bottom-3 shadow shadow-gray-500/50'>Add</button>
                    </div>
                </li>)}
        </ul>
    )
}

export default CategoryItemList