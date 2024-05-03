import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
import UserPage from './pages/UserPage'
import UserSettingsPage from './pages/UserSettingsPage'
import Construction from './pages/Construction'
import "./App.css"
import MobileHeader from './components/header/MobileHeader'

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header/>
        <MobileHeader/>
        <Routes>
          <Route path='/' element={<Construction/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/profile/:id' element={<UserPage/>}/>
          <Route path='/profile/:id/settings' element={<UserSettingsPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    )
  }
}

export default App