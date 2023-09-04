import React from 'react'
import CategoryItemList from './CategoryItemList'

const RestaurantCategory = (props) => {
    const {title, itemCards} = props
    //console.log("new-",props, title, itemCards)
    return (
        <div>
            <div className='flex justify-between items-baseline py-3'>
                <div className='font-semibold text-lg'>{title} ({itemCards?.length})</div>
                <div>🔽</div>
            </div>
            <CategoryItemList itemCards={itemCards}/>  
        </div>
    )
}

export default RestaurantCategory