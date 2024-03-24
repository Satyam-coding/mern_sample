import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Register} from './pages/Register';
import {Login} from './pages/Login';
import {VerifyOtp} from './pages/VerifyOtp';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './pages/Navbar';
import Logout from './pages/Logout';
import Profile from './pages/Profile';
import { UpdatePassword } from './pages/UpdatePassword';
import {ForgotPassword} from './pages/ForgotPassword';
import {ResetPassword} from './pages/ResetPassword';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/> 
        <Route path='/otp' element={<VerifyOtp/>}/> 
        <Route path='/home' element={<Home/>}/> 
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/aboutus' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/updatePassword' element={<UpdatePassword/>}/>
        <Route path='/forgotPassword' element={<ForgotPassword/>}/>
        <Route path='/resetPassword' element={<ResetPassword/>}/>
        
        <Route path='/logout' element={<Logout/>}/>

        </Routes>
    </BrowserRouter>
    
  )
}

export default App