import React from 'react'
import { userAuthStore } from '../store/userAuthStore'
import { Logo } from './Logo'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { authUser, logout } = userAuthStore()
  const navigate = useNavigate()
  return (
    <div className='h-16 sticky top-0 bg-emerald-600 flex items-center p-2 justify-between'>
      <Link to={'/'} className='flex flex-row items-center gap-2 cursor-pointer'>
        <Logo />
        <span className='font-medium text-white text-lg sm:text-2xl '>Cure <sup>n</sup> Grow
        </span>
      </Link>
      {authUser ?
        <div className='flex text-sm sm:text-lg '>
          <button
          className=' text-white p-2 m-2 bg-emerald-800 rounded-md cursor-pointer font-medium'
          onClick={() => navigate('/logs')}
          >History</button>
        <button
          className=' text-white p-2 m-2 bg-emerald-800 rounded-md cursor-pointer font-medium'
          onClick={() => logout()}
        >Log out</button>
        </div>
        :
        <button
          className=' text-white p-2 m-2 bg-emerald-800 rounded-md cursor-pointer font-medium'
          onClick={() => navigate('/login')}
        >Sign in</button>
      }
    </div>
  )
}

export default Navbar