import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className='App'>
      <h1>SHOT IN THE DARK</h1>

      <div className='form'>
      <label>Movie Name:</label>
      <input type="text" name="movieName" />
      
      <label>Review:</label>
      <input type="text" name="review" />

      <button>Submit</button>
      </div>
      
      </div>
    </>
  )
}

export default App
