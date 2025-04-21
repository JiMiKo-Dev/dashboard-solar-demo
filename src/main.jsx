import { createRoot } from 'react-dom/client'
import React from 'react'
import './index.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import BatteryComponent from './pages/Battery/BatteryComponent';
import DashboardComponent from './pages/Dashboard/DashboardComponent';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardComponent />} />
        <Route path='/battery' element={<BatteryComponent />} />
        {/* <Route path='/grid' element={<GridComponent />} />
        <Route path='/solar' element={<SiteLayoutComponent />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode >
)
