import Form from "./components/Forms/Form";
import React from 'react';
import CalendarApp from './components/Calendar/Calendar';
import Layout from "./components/Layout";
import Notification from "./components/Notification";

function App() {
  return (
   <>
        <Layout/>
        <Notification />
        <CalendarApp/>
   </>
  );
}

export default App;
