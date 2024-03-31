import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './ui/dashboard';
import Footer from './ui/footer';

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Dashboard/>} />
      </Routes>
      <Routes>
        <Route path='/*' element={<Footer/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
