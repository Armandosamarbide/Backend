import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detail, Home } from './screens'

const RouterPage = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/discos/detail/:did' element={<Detail/>}/>
    </Routes>
  )
}

export default RouterPage