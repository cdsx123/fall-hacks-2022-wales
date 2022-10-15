import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/system/Box";
import Toolbar  from "@mui/material/Toolbar";
import Typography  from "@mui/material/Typography";



const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Scheduler 
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Layout;