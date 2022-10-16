import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Form from "./components/Forms/Form";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;