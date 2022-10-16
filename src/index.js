import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import RouteSwitch from './RouteSwitch';
import Layout from "./components/Layout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Layout />
    <RouteSwitch />
  </React.StrictMode>
);

