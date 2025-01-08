import { Card, CardActions, CardContent, CardMedia, Typography, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react'

const EventCard = () => {
  return (
    <Card sx={{width:345}}> 
      <CardMedia
         sx={{height:345}}
         image='https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_640.jpg'
      >
        </CardMedia>
        <CardContent>
          <Typography variant='h5' >Indian Fast Food</Typography>
          <Typography variant='body2' >50% off on your first Order</Typography>
          <div className='py-2 space-y-2 font-semibold'>
            <p className='font-semibold' >Location :  Bhopal </p>
            <p className='text-blue-600 font-semibold'>Date : 10-25th March</p>
            <p className='text-red-600 font-semibold'>Time : 12:00 PM - 03:00 PM</p>
          </div>
        </CardContent>
        {true &&
        <CardActions>
          <IconButton>
            <DeleteIcon  />
          </IconButton>
        </CardActions>
        }
      
    </Card>
  )
}

export default EventCard