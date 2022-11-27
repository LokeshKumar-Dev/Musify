import React from "react";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { useStateValue } from "./reducer/StateProvider";


import Home from "./pages/Home";
import Library from "./pages/Library";

import "./App.css";
import Login from "./pages/Login";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
                <Route path='/login' element={<Login />} />
                <Route path='/home' element={<Home />} />
                <Route path='/library' element={<Library />} />
              </Routes>
              <Footer />
            </>
        }

      </Router>
    </div>
  );
}

export default App;
