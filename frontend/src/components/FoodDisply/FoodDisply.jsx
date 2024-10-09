import React, { useContext } from 'react'
import './FoodDisply.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisply = ({ category }) => {
    const { foodList } = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-display-list'>
                {foodList?.map((item, index) => {
                    if(category=='All'||category==item.category)
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                })}
            </div>
        </div>
    )
}

export default FoodDisply
