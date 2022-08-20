import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import Sales from "./components/sales/Sales";
import Company from "./components/company/Company";
import Database from './providers/company-database/company-database';

const root = ReactDOM.createRoot(
    document.getElementById("root")
  );
  root.render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="Sales" element={<Sales />} />
        <Route path="Company" element={<Company />} />
        <Route path="Database" element={<Database />} />
      </Routes>
    </BrowserRouter>
  );