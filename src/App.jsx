import React from 'react'
import './App.css'
import Create from './component/Create'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Read from './component/Read'
import Edit from './component/Edit'



const App = () => {
  return (
    <>
    
       
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Read/>}></Route>
      <Route exact path='/create' element={<Create/>}></Route>
      <Route exact path='/edit' element={<Edit/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
