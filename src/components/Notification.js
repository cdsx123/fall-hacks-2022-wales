import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Notification = () => {

  return (
      <Snackbar
        open={true}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        style={{
          position: "absolute",
          top: "80px",
        }}
      >
        <MuiAlert
          severity="warning"
          elevation={6}
          variant="filled"
          sx={{ width: 700 }}
        >
          deadline is coming
        </MuiAlert>
      </Snackbar>
  )
}

export default Notification