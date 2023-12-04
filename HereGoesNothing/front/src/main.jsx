import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TopNav } from './components'
import { Footer } from './components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
 <TopNav />
  <App />
<Footer />
    </>
)
