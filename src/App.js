import React from "react";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./reducer/StateProvider";


import Home from "./pages/Home";
import Library from "./pages/Library";
import Search from "./pages/Search";

import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [{ user }] = useStateValue();

  return (
    <div className="app">
      <Router>
        {
          Object.values(user).length !== 0 ?
            <Login /> :
            <>
              <Sidebar />
              <Routes>
                <Route path='/' element={<Navigate to="/Musify/home" />} />
                <Route path='/Musify' element={<Navigate to="/Musify/home" />} />
                <Route path='/Musify/login' element={<Login />} />
                <Route path='/Musify/home' element={<Home />} />
                <Route path='/Musify/library' element={<Library />} />
                <Route path='/Musify/search' element={<Search />} />
              </Routes>
              <Footer />
            </>
        }

      </Router>
    </div>
  );
}

export default App;
