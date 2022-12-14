import Form from "./components/Forms/Form";
import React from 'react';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import CalendarApp from './components/Calendar/Calendar';
import Notification from "./components/Notification";
import FinishTask from "./components/TaskCompletion/TaskCompletion"
function App() {
  return (
   <div>
        <Notification />
        <FinishTask />
        <CalendarApp/>
        
        <div style={{display: "flex", justifyContent: "center"}}>
          <Button component={Link} to="/form" variant="outlined">Add Assignment</Button>
        </div>
   </div>
  );
}

export default App;
