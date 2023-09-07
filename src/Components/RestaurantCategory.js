import React, { useState } from 'react'
import CategoryItemList from './CategoryItemList'


const RestaurantCategory = (props) => {
    const {title, itemCards,showItem,setExpandIndex} = props
    /* const [showItem, setShowItem] = useState(false) */
    const handleAccordion = () => {
        setExpandIndex()
    }
    return (
        <div>
            <div className='flex justify-between items-baseline py-3 cursor-pointer border-b-8 ' onClick={handleAccordion}>
                <div className='font-semibold text-lg'>{title} ({itemCards?.length})</div>
                <div>{showItem ? '🔼' : '🔽'}</div>
            </div>
            {showItem && <CategoryItemList itemCards={itemCards}/>} 
        </div>
    )
}

export default RestaurantCategory