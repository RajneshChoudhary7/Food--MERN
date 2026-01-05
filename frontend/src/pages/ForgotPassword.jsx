import React, { useState } from 'react'
import {IoIosArrowRoundBack} from "react-icons/io"
import {useNavigate}  from 'react-router-dom'
import { serverUrl } from '../App';
import axios from "axios"


const ForgotPassword = () => {
  const [step,setStep] = useState(1)
  const [email, setemail] = useState('')
  const [otp, setotp] = useState('')
  const [ConfirmPassword, setConfirmPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const navigate = useNavigate()

  const handleSendOtp = async ()=>{
    try {
      const result = await axios.post(`${serverUrl}/api/auth/send-otp`,{email},{withCredentials:true})
      console.log(result)
      setStep(2)
    } catch (error) {
      console.log(error)
    }
  }
  const handleVerifyOtp = async ()=>{
    try {
      const result = await axios.post(`${serverUrl}/api/auth/verify-otp`,{email,otp},{withCredentials:true})
      console.log(result)
      setStep(3)
    } catch (error) {
      console.log(error)
    }
  }
  const handleResetPassword = async ()=>{
    if(newPassword!=ConfirmPassword){
      return null
    }
    try {
      const result = await axios.post(`${serverUrl}/api/auth/reset-password`,{email,newPassword},{withCredentials:true})
      console.log(result)
      navigate("/signin")
    } catch (error) {
      console.log(error)
    }
  }









  return (
    <div className='flex w-full items-center justify-center min-h-screen p-4 bg-[#fff9f6]'>
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8">
        <div className='flex items-center gap-4 mb-4'>
          <IoIosArrowRoundBack size={30} onClick={()=>navigate("/signin")} className=' cursor-pointer text-[#ff4d2d]'/>
          <h1 className='text-2xl font-bold text-center text-[#ff4d2d]'>Forgot Password</h1>
        </div>
        {step == 1 
        && 
          <div>

              <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1" >Email</label>
                    <input type="email" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    placeholder='Enter your email' />
                </div>
                <button 
                onClick={handleSendOtp}
                className='w-full font-semibold py-2 rounded-lg transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{border:"1px solid black"}}>Send Otp</button>


          </div>
        }
        {step == 2 
        && 
          <div>

              <div className="mb-6">
                    <label htmlFor="otp" className="block text-gray-700 font-medium mb-1" >OTP</label>
                    <input type="otp" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setotp(e.target.value)}
                    value={otp}
                    placeholder='Enter your otp' />
                </div>
                <button 
                onClick={handleVerifyOtp}
                className='w-full font-semibold py-2 rounded-lg transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{border:"1px solid black"}}>Verify</button>


          </div>
        }
        {step == 3
        && 
          <div>

              <div className="mb-6">
                    <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-1" >New Password</label>
                    <input type="Password" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setNewPassword(e.target.value)}
                    value={newPassword}
                    placeholder='Enter New Password' />
                </div>

                <div className="mb-6">
                    <label htmlFor="ConfirmPassword" className="block text-gray-700 font-medium mb-1" >Confirm Password</label>
                    <input type="Password" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    value={ConfirmPassword}
                    placeholder='Enter Confirm Password' />
                </div>
                <button 
                onClick={handleResetPassword}
                className='w-full font-semibold py-2 rounded-lg transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{border:"1px solid black"}}>Reset Password</button>


          </div>
        }
      </div>
      
    </div>
  )
}

export default ForgotPassword
