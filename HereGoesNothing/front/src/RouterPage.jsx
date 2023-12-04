import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './screens/'
import { Detail } from './screens/'

const RouterPage = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/discos/detail/:did' element={<Detail/>}/>
    </Routes>
  )
}

export default RouterPage