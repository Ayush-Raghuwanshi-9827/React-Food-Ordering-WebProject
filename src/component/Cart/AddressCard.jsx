import React from 'react'
import { Card, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';


const AddressCard = ({item,showButton,handleSelectAddress}) =>  {
  return (
    <Card className='flex gap-5 w-64 p-5'>
      <HomeIcon />
      <div className='space-y-3 text-gray-500'>
        <h1 className='font-semibold text-lg text-white'>Home</h1>
        <p>Bhopal M.P (462010)</p>
        {showButton && (
          <Button onClick={() => handleSelectAddress(item)} variant="outlined" fullWidth className=""> 
          Select
          </Button>
        )}
      </div>
    </Card>
  )
}
export default AddressCard;
