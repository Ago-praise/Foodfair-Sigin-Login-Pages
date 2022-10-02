import React from 'react'
import FrameImg from '../img/Frame.png'
import {GoCheck, GoEyeClosed} from "react-icons/go"
import "../App.css"

function Login() {
  return (
     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={FrameImg} alt='' />
           </div>

     <div className="bg-orange-100 flex flex-col  items-center pt-10 ">
         <form className="text-gray-600 w-3/5 sm:w-4/5 lg:w-3/5  pt-5">
               <h2 className="text-2xl font-medium text-gray-600 mb-6 mt-3">Login</h2>
               <div className="mb-5 w-100">
                   <div className="flex flex-col pt-2  relative">
                        <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">Email Address</label>
                        <input className="border border-gray-600 py-2 px-3 rounded-lg  " type="email" name="email" placeholder=""></input>
                   </div>
                   <div className="flex flex-col mt-5 pt-2 relative">
                        <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1" >Password</label>
                        <input className="border border-gray-600 py-2 px-3 rounded-lg" type="password"     name="password" placeholder=""></input>
                        <GoEyeClosed className="absolute right-4 bottom-3.5 "/>
                   </div>
               </div>
               
               <div className="flex justify-between text-xs">
                   <p className="flex mb-2 items-center " ><input type="checkbox" className="mr-2 appearance-none h-3 w-3 bg-[#FF8A00] border border-gray-600 rounded relative" />
                   <GoCheck className="text-gray-700 absolute text-opacity-0"/>
                   Remember Me</p>
                   <p className="text-[#FF8A00] font-medium">Forgot Password</p>

               </div>
               
               <button className="bg-[#FF8A00] px-5 py-2 rounded-lg text-white font-medium mt-8">Login</button>
               <p className="text-sm mt-4">Don't have an account? <a href="/login" className="text-[#FF8A00] font-medium">Create Account</a></p>

          </form>
     </div>

</div>
    )
}


export default Login