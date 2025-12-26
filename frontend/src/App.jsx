import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/signin' element={<SignIn/>} />
    </Routes>
  )
}

export default App
