import React from 'react';
import FrameImg from '../img/Frame.png'
import {GoCheck, GoEyeClosed} from "react-icons/go"


function Signup() {

    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
           <div className="hidden sm:block">
                <img className="w-full h-screen object-cover" src={FrameImg} alt='' />
           </div>

           <div className="bg-orange-100 flex flex-col  items-center justify-center overflow">
               <form className="w-3/5 sm:w-4/5 lg:w-3/5  text-gray-600">
                     <h2 className="text-2xl font-medium text-gray-600 mb-3 mt-2 sm:mb-5">Create Account</h2>
                   <div className="mb-5">
                         <div className="flex flex-col pt-2 relative">
                              <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">Email Address</label>
                              <input className="border border-gray-600 py-2 px-3 rounded-lg" type="email" name="email" placeholder=""></input>
                         </div>
                         <div className="flex flex-col mt-5 pt-2 relative">
                              <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">Username</label>
                              <input className="border border-gray-600 py-2 px-3 rounded-lg" type="text" name="username"     placeholder=""></input>
                         </div>
                         <div className="flex flex-col mt-5 pt-2 relative">
                              <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1">Phone Number</label>
                              <input className="border border-gray-600 py-2 px-3 rounded-lg" type="text"     name="phonenumber" placeholder=""></input>
                         </div>
                         <div className="flex flex-col mt-5 pt-2 relative">
                              <label className="text-xs absolute top-0 left-3 bg-gradient-to-b from-orange-100 to-white px-1" >Password</label>
                              <input className="border border-gray-600 py-2 px-3 rounded-lg" type="password"     name="password" placeholder=""></input>
                              <GoEyeClosed className="absolute right-4 bottom-3.5 "/>
                         </div>
                   </div>
                     
                   <div>
                        <p className="text-xs flex mb-2 items-center ">
                             <input type="checkbox" className="mr-2 appearance-none h-3 w-3 bg-gray-200 border border-gray-600 rounded " />
                             <p>I have read and accept the <a className="text-[#FF8A00] font-bold" href='#'>Terms and    Conditions</a>, Privacy and Cookie Notice</p>
                        </p>
                        <p className="text-xs flex mb-2 items-center">
                             <input type="checkbox" className="mr-2 appearance-none h-3 w-3 bg-[#FF8A00] border border-gray-600 rounded relative" />
                             <GoCheck className="text-gray-700 absolute text-opacity-0"/>
                             <p>I want to receive FoodFair Newsletters in my mails</p>
                        </p>
                    </div>
                     
                    <button className="bg-[#FF8A00] px-5 py-2 rounded-lg text-white font-medium mt-5 sm:mt-8">Create Account</button>
                    <p className="text-sm mt-2 sm:mt-4">Already have an account? <a href="/login" className="text-[#FF8A00]">Login</a></p>

                </form>
           </div>

      </div>
    )
  }

export default Signup