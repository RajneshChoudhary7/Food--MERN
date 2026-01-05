import React, { useState } from 'react'
import { FaAws, FaEye } from "react-icons/fa";
import { FaRegEyeSlash   } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { serverUrl } from '../App';


const SignUp = () => {
    const primaryColor = "#ff4d2d";
    const hoverColor = "#e64323";
    const bgColor = "#fff9f6";
    const borderColor = "#ddd";

    const [showPassword, setShowPassword] =useState(false)
    const [role,setRole]=useState("user")
    const navigate = useNavigate()
    const [fullName , setFullName] = useState("")
    const [email , setemail] = useState("")
    const [password , setpassword] = useState("")
    const [mobile , setMoblie] = useState("")


    const handleSignUp = async()=>{
        try {
            const result = await axios.post(`${serverUrl}/api/auth/signup`,{
                fullName,email,password,mobile,role
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
                <p className='text-gray-800 mb-8'>Create your account to get started with delicious food deliveries</p>
                    {/* fullname */}
                <div className="mb-4">
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-1" >Full Name</label>
                    <input type="text" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setFullName(e.target.value)}
                    value={fullName}
                    placeholder='Enter your full name' />
                </div>

                {/* email */}
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-1" >Email</label>
                    <input type="email" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    placeholder='Enter your email' />
                </div>

                {/* moblie */}
                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1" >Mobile</label>
                    <input type="text" className='w-full rounded-xl px-3 py-2 focus:outline-none focus:border-orange-500' 
                    onChange={(e)=>setMoblie(e.target.value)}
                    value={mobile}
                    placeholder='Enter your mobile' />
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


                {/* role */}
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-medium mb-1" >Role</label>
                        <div className='flex gap-2'>
                            {["user","owner","deliveryBoy"].map((r)=>(
                                <button 
                                key={r}
                                type='button'
                                className='flex-1 border rounded-lg px-3 py-2 text-center
                                font-medius transition-colors cursor-pointer '
                                onClick={()=>setRole(r)}
                                style=
                                    {
                                        role === r
                                    ?{backgroundColor:primaryColor,color:"white"}
                                    :{border:`1px solid:${primaryColor}`,color:"#333"}
                                    }
                                    >
                                    {r}
                                </button>
                            ))}
                        </div>
                        
                </div>

                <button 
                onClick={handleSignUp}
                className='w-full font-semibold py-2 rounded-lg transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{border:"1px solid black"}}>Submit</button>
                <button className='mt-2 w-full flex items-center justify-center gap-2 border rounded-lg px-4 py-2 transition duration-200 hover:bg-[#e64323] cursor-pointer ' style={{color:"white"}}><FcGoogle size={20} /><span className='text-black text-center'>Sign up with Google</span></button>
                <p className='text-center mt-2 cursor-pointer ' onClick={()=>{navigate('/signin')}}>Already have an account ?<span className='text-[#ff4d2d] '>Sign In</span></p>
            </div>
            
      </div>
  )
}

export default SignUp
