import './App.css';
import React from 'react'
import Home from './pages/Home'
import "./assets/bootstrap-5.3.3-dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Restaurants from './pages/Restaurants';
import Header from './components/Header';
import Footer from './components/Footer';
import Restora from './pages/Restaurants/Restora';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { createContext, useState } from 'react';
import EditProfile from './pages/Profile/EditProfile';
import ChangePassword from './pages/Profile/ChangePassword';
export const MyContext = createContext();





function App() {

  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);

  const values={
    isHeaderFooterShow,
    setIsHeaderFooterShow,
  }
  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
    
      <Routes>
      <Route exact={true} path="/" element={<Home/>} />
      <Route exact={true} path="/rest" element={<Restaurants/>} />
      <Route exact={true} path="/restora" element={<Restora/>} />
      <Route exact={true} path="/profile" element={<Profile/>} />
      <Route exact={true} path="/cart" element={<Cart/>} />
      <Route exact={true} path="/reg" element={<SignUp/>} />
      <Route exact={true} path="/log" element={<SignIn/>} />
      <Route exact={true} path="/edit" element={<EditProfile/>} />
      <Route exact={true} path="/change" element={<ChangePassword/>} />
      </Routes>
      {
          isHeaderFooterShow === true && <Footer />
        }
      </MyContext.Provider>
    </BrowserRouter>
    
  );
}

export default App;
