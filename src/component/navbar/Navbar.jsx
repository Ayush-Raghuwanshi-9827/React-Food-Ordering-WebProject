import { Avatar, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

import React from "react";
import { pink } from '@mui/material/colors';

export const Navbar = () => {
  return (
    <Box className="px-5 sticky top-0 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between">
      
        <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
        <div className="logo font-semibold text-gray-300 text-2xl">Zomoto</div>
        </div>
        <div className="flex items-center space-x-2 lg:space-x-10">
          <div className="">
          <IconButton sx={{ fontSize:"1.5rem", padding: '10px' }} aria-label="search">
        <SearchIcon />
        </IconButton>

          </div>
          <div className=''>
              <Avatar sx={{bgcolor:"white",color:pink.A400}}>A</Avatar>                      
          </div>
          <div className=''>
            <IconButton>
              <Badge color='primary' badgeContent={3}>
              <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
              </Badge>
              </IconButton>    
         </div>

        </div>

      </Box>
  );
}