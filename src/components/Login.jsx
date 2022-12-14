import React, { useState } from "react"
import FormInputs from "./FormInputs"
import FormButton from "./FormButton"
import PasswordInput from "./PasswordInput"
import Image from "./Image"

function Login(){
     const [values, setValues] = useState({
          email:"",
          password:"",
     });



     const inputs =[
          {
               id:1,
               name:"email",
               type:"email",
               errorMessage:"It should be a valid Email Address",
               label:"Email Address",
               required: true,
          },
     ]

     const handleSubmit = (e) => {
          e.preventDefault();
          
     };

     const onChange = (e) =>{
          setValues({...values, [e.target.name]: e.target.value});
     };

     console.log(values)

     return(
          <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>

               <Image />

               <div className="bg-orange-100 flex flex-col  items-center pt-10 ">

                    <form onSubmit={handleSubmit} className="text-gray-600 w-3/5 sm:w-4/5 lg:w-3/5  pt-5">

                         <h2 className="text-2xl font-medium text-gray-600 mb-6 mt-3">
                              Login
                         </h2>

                         <div className="mb-5 w-100">
                             {inputs.map((input) =>(
                                <FormInputs 
                                   key={input.id} 
                                   {...input} 
                                   value={values[input.name]}
                                   onChange={onChange} />   
                             ))}
               
                              <PasswordInput
                               onChange={onChange}
                               value={values.password} />
                                    
                          
                         </div>

                         <div className="flex justify-between text-xs">
                              <p className="flex items-center">
                                   <input type="checkbox" className="mr-2"/>
                                   Remember Me
                              </p>
                              <a className="text-[#FF8A00] font-medium hover:text-orange-600" href="#">
                                   Forgot Password
                              </a>
                         </div>

                         <FormButton value="Login" />
                           
                         <p className="text-sm mt-4">
                              Don't have an account? 
                              <a href="/login" className="text-[#FF8A00] hover:text-orange-600 font-medium">
                                   Create Account
                              </a>
                         </p>
                    </form>
               </div>
                           

          </div>
     )
     

     
}

export default Login