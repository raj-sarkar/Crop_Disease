import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { userAuthStore } from '../store/userAuthStore.js'
import { Lock, Mail, Eye, EyeOff, Loader2 , User } from 'lucide-react'
import { Logo } from '../components/Logo.jsx'
import {toast} from 'react-hot-toast'

const Signup = () => {

  const { signup, isSigningUp } = userAuthStore()
  const [hidden, setHidden] = useState(true)

  const [formData, setFormData] = useState({
    fullName:"",
    email: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!formData.fullName.trim())return toast.error('Please provide full name')
    if(!formData.email.trim())return toast.error('Please provide email')
    if(!formData.password.trim())return toast.error('Please provide password')
    signup(formData)
  }
  return (
    <div className='p-4 mt-10'>
      <form className='border border-slate-400 w-fit sm:min-w-md m-auto rounded-md p-2'>
        <div className='flex flex-col items-center p-4'>
          <Logo />
          <h2 className='text-emerald-700 font-medium text-4xl'>Create Account</h2>
          <span className='text-emerald-700'>Get started with your free account</span>
        </div>
        <div className='p-2'>
          <div className='flex flex-row items-center'>
            <User className='w-5 h-5 m-2 text-gray-500' />
            <label className='text-gray-600 font-medium'>Full Name</label>
          </div>
          <input
            className='appearance-none w-full  bg-gray-200 focus:outline-none focus:bg-white p-3 block focus:border-b-2 border-emerald-700 text-gray-700 rounded transition-colors ease-in font-medium'
            type='text'
            placeholder='Alice Doe'
            required
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        <div className='p-2'>
          <div className='flex flex-row items-center'>
            <Mail className='w-5 h-5 m-2 text-gray-500' />
            <label className='text-gray-600 font-medium'>Email</label>
          </div>
          <input
            className='appearance-none w-full  bg-gray-200 focus:outline-none focus:bg-white p-3 block focus:border-b-2 border-emerald-700 text-gray-700 rounded transition-colors ease-in font-medium'
            type='email'
            placeholder='you.example@gmail.com'
            required
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        <div className='p-2'>
          <div className='flex flex-row items-center'>
            <Lock className='w-5 h-5 m-2 text-gray-500' />
            <label className='text-gray-600 font-medium'>Password</label>
          </div>
          <div className='relative'>
            <input
              className='appearance-none w-full  bg-gray-200 focus:outline-none focus:bg-white p-3 block focus:border-b-2 border-emerald-700 text-gray-700 rounded transition-colors ease-in font-medium'
              type={hidden ? 'password' : 'text'}
              placeholder='••••••••'
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <button
              type='button'
              className='absolute inset-y-0 right-0'
              onClick={() => setHidden(!hidden)}
            >

              {!hidden ?
                <Eye className='m-2 cursor-pointer' />
                :
                <EyeOff className='m-2 cursor-pointer' />}
            </button>
          </div>
        </div>

        <button
          type='submit'
          className='rounded w-full p-2 mt-5 bg-emerald-600 font-medium text-white hover:bg-emerald-700 cursor-pointer '
          onClick={(e) => handleSubmit(e)}
        >
          {isSigningUp ? <Loader2 className='h-5 w-5 animate-spin m-auto' /> : 'Sign up'}
        </button>
        <p className='text-center text-sm sm:text-lg'>
          Already have an account?
          <Link to={'/login'} className=' text-blue-700 cursor-pointer'> Sign in</Link>
        </p>
      </form>
    </div>
  )
}

export default Signup