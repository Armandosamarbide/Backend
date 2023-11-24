import React from 'react'

import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPage from './RouterPage'
import TopNav from './screens/TopNav/TopNav'


function App() {

  return (
    <>
    <div>
      <nav>
      <TopNav />
      </nav>
    <BrowserRouter>
      <RouterPage/>
    </BrowserRouter>
    </div> 
    </>
  )
}

export default App