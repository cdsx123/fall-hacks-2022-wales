import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { db } from '../db/storage';


const Notification = () => {
  const [events, setEvents] = React.useState(null);

  React.useEffect(() => {
    const data = db.getItem("data");
    if (data === null) {
      return;
    }

    const json = JSON.parse(data);
    const newEvents = json["data"].map((e) => {
      return { name: e.name }
    })

    setEvents(newEvents)
  }, []);

  const crateLabel = (events) => {
    if(events === null){
      return 
    }
    let lable = "";
    events.forEach(e => {
      lable += e.name + ' and ' 
    }) 
    return lable;
  }

  return (
    <>
    <Snackbar
      open={events !== null}
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
        { crateLabel(events)} deadline is coming
      </MuiAlert>
    </Snackbar>
    </>
  )
}

export default Notification