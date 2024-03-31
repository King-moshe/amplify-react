import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './ui/homePage';
import Portfolio from './ui/portfolio';
import AboutMe from './ui/aboutMe';
import Contact from './ui/contact';

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<AboutMe/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes> 
      </BrowserRouter>
    </div>
  )
}
