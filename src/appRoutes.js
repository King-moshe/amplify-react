import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './ui/homePage';
import Portfolio from './ui/portfolio';
import AboutMe from './ui/aboutMe';
import Header from './ui/Header';
import Footer from './ui/Footer';

export default function AppRoutes() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Header/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/about' element={<AboutMe/>} />
      </Routes> 
      <Routes>
        <Route path='/*' element={<Footer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
