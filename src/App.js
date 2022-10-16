import React from 'react';
import CalendarApp from './components/Calendar/Calendar';
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import FinishTask from "./components/TaskCompletion/TaskCompletion"
function App() {
  return (
   <>
        <Layout/>
        <Notification />
        <FinishTask />
        <CalendarApp/>
       
   </>
  );
}

export default App;
