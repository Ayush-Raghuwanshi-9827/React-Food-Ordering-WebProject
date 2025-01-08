import { Button, Card } from '@mui/material'
import React from 'react'

const OrdersCard = () => {
  return (
    <Card className='flex justify-between items-center p-10'>
      <div className='flex items-center space-x-5'>
        <img className='w-[5rem] h-[5rem] object-cover' src='http://res.cloudinary.com/dcpesbd8q/image/upload/v1707904777/ufillbuz6lzjilw0rrc3.jpg' alt='' />
        <div className='space-y-3 text-gray-500'>
          <h1 className='font-semibold text-lg text-white'>Order ID: 12345</h1>
          <p>Biryani</p>
          <p>$100</p>
          <p>Placed on: 2023-01-12</p>
        </div>
      <div>
        <Button className='cursor-not-allowed'>Completed</Button>
      </div>

      </div>
    </Card>
  )
}

export default OrdersCard