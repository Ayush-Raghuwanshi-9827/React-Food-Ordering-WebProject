import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'



const Auth = () => {
  const loction = useLocation();
  const navigate = useNavigate();
  return (
    <>
    <Modal open={
      loction.pathname === '/account/register' || loction.pathname === '/account/login'
    }>
      <Box sx={{style}}>


      </Box>

    </Modal>
    </>
  )
}

export default Auth