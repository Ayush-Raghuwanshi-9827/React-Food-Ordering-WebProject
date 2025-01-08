import React from 'react'
import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';
import CustomerRoute from './Router/CustomerRouter';


 const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRoute />
    </ThemeProvider>
  )
}

export default App;
