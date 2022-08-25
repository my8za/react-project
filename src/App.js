import './assets/css/App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from './pages/Search'
import Detail from './pages/Detail';
import Main from './pages/Main';
import Like from './pages/Like';
import ResFinished from './pages/ResFinished';
import MovieProvider from './context/MovieContext';
import Profile from './pages/Profile';

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path="/search" element={<Search />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/like" element={<Like />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resfinished" element={<ResFinished />} />

        </Routes>
      </BrowserRouter>
      
    </MovieProvider>
  );
}

export default App;