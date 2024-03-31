import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './ui/dashboard';

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Dashboard/>} />
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}
