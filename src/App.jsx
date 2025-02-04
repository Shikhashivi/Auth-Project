import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import Login from './Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path='/' element={ <SignUpForm/>}/>
     <Route path='/login' element={ <Login/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
