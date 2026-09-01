import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
export default function App(){return <Router><ScrollToTop/><Routes><Route path="/" element={<HomePage/>}/></Routes></Router>}
