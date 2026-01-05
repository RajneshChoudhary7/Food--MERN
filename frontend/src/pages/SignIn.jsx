import React, { useState } from 'react'
import { FaAws, FaEye } from "react-icons/fa";
import { FaRegEyeSlash   } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from '../App';


const SignIn = () => {
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    const [showPassword, setShowPassword] =useState(false)
    const navigate = useNavigate()
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")



    const handleSignIn = async()=>{
        try {
            const result = await axios.post(`${serverUrl}/api/auth/signin`,{
              email,password
            },{withCredentials:true})
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }


  return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{backgroundColor:bgColor}}>
            <div className={`bg-white rounded-xl shadow-lg w-full max-w-md p-8 `} style={{border:`1px solid ${borderColor}`}} >
                <h1 className={`text-3xl font-bold  `} style={{color:primaryColor}}>Khaana</h1>
                <p className='text-gray-800 mb-8'>Sign In your  account to get started with delicious food deliveries</p>
                    
                {/* email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1" >Email</label>
                    <input type="email" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    placeholder='Enter your email' />
                </div>

                

                {/* password */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1" >Password</label>
                        <div className='relative'>
                    <input type={`${showPassword?"text":"password"}`} className='w-full rounded-xl px-3 py-2 focus:outline-none cursor-pointer focus:border-orange-500' 
                    onChange={(e)=>setpassword(e.target.value)}
                    value={password}
                    placeholder='Enter your Password' />
                            <button onClick={()=>setShowPassword(prev=>!prev)} className=' absolute right-3 top-[14px] text-gray-500'>{!showPassword?<FaEye />:<FaRegEyeSlash />}</button>
                        </div>
                        
                </div>


                <div onClick={()=>navigate("/forgot-password")} className="text-right mb-4 text-[#ff4d2d] cursor-pointer font-medium">Forgot Password</div>

                <button 
                onClick={handleSignIn}
                className='w-full font-semibold py-2 rounded-lg transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{border:"1px solid black"}}>Submit</button>
                <button className='mt-2 w-full flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{color:"white"}}><FcGoogle size={20} /><span className='text-black text-center'>Sign up with Google</span></button>
                <p className='text-center mt-2 cursor-pointer ' onClick={()=>{navigate('/signup')}}>Want to create a New Account ?<span className='text-[#ff4d2d] '>Sign Up</span></p>
            </div>
            
      </div>
  )
}

export default SignIn
