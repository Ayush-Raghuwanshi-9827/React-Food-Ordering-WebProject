import React from 'react'
import OrdersCard from './OrdersCard'
import RestaurantCard from '../Restaurant/RestaurantCard';


const Favorite = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>My Favorite</h1>
      <div className='flex flex-wrap gap-2 justify-center'>
        {[1,1,1,1].map((item) => <RestaurantCard></RestaurantCard> )}
      </div>
    </div>
  )
}

export default Favorite