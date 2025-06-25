import {create} from 'zustand'
import { axiosInstance } from '../lib/axios'

export const userAuthStore=create((set)=>({
    authUser:null,
    isSigningUp:false,
    isLoggingIn:false,
    isChecking:true,

    checkAuth:async()=>{
        try {
            const res=await axiosInstance.get('/auth/check')
            set({authUser:res.data.user})
        } catch (err) {
            console.log('Error in checkAuth',err)
            set({authUser:null})
        }finally{
            set({isChecking:false})
        }
    },
    login:async(data)=>{
        try {
            set({isLoggingIn:true})
            const res=await axiosInstance.post('/auth/login',data)
            set({authUser:res.data})
        } catch (err) {
            console.log('Error in login',err)
            set({authUser:null})
        }finally{
            set({isLoggingIn:false})
        }
    },
    signup:async(data)=>{
        try {
            set({isSigningUp:true})
            const res=await axiosInstance.post('/auth/signup',data)
            set({authUser:res.data})
        } catch (err) {
            console.log('Error in signup',err)
            set({authUser:null})
        }finally{
            set({isSigningUp:false})
        }
    },
    logout:async()=>{
        try {
            await axiosInstance.post('/auth/logout')
            set({authUser:null})
        } catch (err) {
            console.log('Error in logout',err)
            set({authUser:null})
        }
    }

}))