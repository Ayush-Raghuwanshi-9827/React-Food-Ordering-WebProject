import {Divider, FormControl, FormControlLabel, Grid, RadioGroup, Typography, Radio } from '@mui/material';
import React from 'react'
import LocationIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useState } from 'react';
import MenuCard from './MenuCard';


const menu = [1,1,1,1,1]
const categories = ["pizza" ,"Biryani", "Burger", "Chicken", "rice"]
const foodTypes = [{label:"ALL", value:"All"}, {label:"Vegiterian only", value:"vegiterian"}, {label:"Non-Vegiterian", value:"non_vegiterian"}, {label:"seasonal", value:"seasonal"}]
const  RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all")
  const handleFileter = (e) => {
    console.log(e.target.value, e.target.name);
  }
  return (
    <div className='px-5 lg:px-20'>
      <section className=''>
        <h3 className='text-gray-300 py-2 mt-10 text-2xl font-semibold'>Home/india/indian fast food/3</h3>
        <div>
          <Grid container spacing={2}>
              <Grid item xs={12}>
                <img className='w-full h-[40vh] object-cover' src='https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt='food' />
              </Grid>
              <Grid item xs={12} lg={6}>
                <img className='w-full h-[40vh] object-cover' src='https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt='food' />
              </Grid>
              <Grid item xs={12} lg={6}>
                <img className='w-full h-[40vh] object-cover' src='https://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3xq93xzfbqhtudigv2.jpg' alt='food' />
              </Grid>

          </Grid>
        </div>
        <div className='pt-3 pb-5'>
          <h1 className='text-4xl font-semibold '>Indian Fast Food</h1>
          <p className='text-gray-500 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur suscipit culpa, architecto eveniet molestiae tempora a accusantium eaque dignissimos atque facere voluptatem, optio inventore.</p>
          <div className='space-y-3 mt-3'>
          <p className='text-gray-500 flex items-center gap-3'>
            <LocationIcon />
            <span>Bhopal , M.P</span>
          </p>
          </div>
          <div className='mt-2'>
          <p className='text-gray-500 flex items-center gap-3'>
            <CalendarTodayIcon />
            <span>MON-SUN: 9:00 AM - 9:00 PM (Today)</span>
          </p>
          </div>
        </div>


      </section>
      <Divider/>
      <section className='pt-[2rem] lg:flex relative'> 
        <div className='space-y-10 lg:w-[20%] filter '>
           <div className='box space-y-5 lg:sticky top-28'>
              <div className=''>
                  <Typography variant='h5' sx={{paddingBottom:"1rem"}}>Food Type</Typography>

                  <FormControl className='py-10 space-y-5' component={"fieldset"}>
                    <RadioGroup name='food_type' onChange={handleFileter} value={foodType}>
                       {foodTypes.map((item) =>  <FormControlLabel key={item.value} value={item.value} control={<Radio />} label={item.label} />
                       )}
                    </RadioGroup>
                  </FormControl>
              </div>
              <Divider/>
              <div className=''>
                  <Typography variant='h5' sx={{paddingBottom:"1rem"}}>Food Category</Typography>

                  <FormControl className='py-10 space-y-5' component={"fieldset"}>
                    <RadioGroup name='food_type' onChange={handleFileter} value={foodType}>
                       {categories.map((item) =>  <FormControlLabel key={item} value={item} control={<Radio />} label={item} />
                       )}
                    </RadioGroup>
                  </FormControl>
              </div>
           </div>
        </div>
        <div className='space-y-5 lg:w-[80%] lg:pl-10'>
        {menu.map((item) => (
          <MenuCard {...item} />
        ))}
        </div>
      </section>
      
    </div>
  )
}
export default RestaurantDetails;
