import { useState } from 'react'
import './App.css'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Logs from './pages/Logs'
import { userAuthStore } from './store/userAuthStore'
import { useEffect } from 'react'
import {Toaster} from 'react-hot-toast'
import Navbar from './components/Navbar'
import { Loader } from 'lucide-react'

function App() {


  const {authUser,checkAuth,isChecking}=userAuthStore()
  useEffect(()=>{
    checkAuth()
  },[checkAuth])


  if (isChecking && !authUser) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <Loader className='size-10 animate-spin' />
      </div>
    )
  }

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={authUser?   <Home/>:<Navigate to={'/login'}/>}/>
        <Route path='/signup' element={!authUser?   <Signup/>:<Navigate to={'/'}/>}/>
        <Route path='/login' element={!authUser?   <Login/>:<Navigate to={'/'}/>}/>
        <Route path='/logs' element={authUser?   <Logs/>:<Navigate to={'/login'}/>}/>
      </Routes>
      <Toaster/>
    </div>
  )
}

export default App
