import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'

function App() {

const [disc, setDisc] = useState('')
const [artist, setArtist] = useState('')
const [anio, setYear] = useState('')
const [genre, setGenre] = useState('')
const [info, setInfo] = useState('')
const [newDisc, setNewDisc] = useState('')

  

  return (
    <>
      <div className='App'>
      <h1>SHOT IN THE DARK</h1>

      <div className='form'>
      <label>Disco</label>
      <input type="text" name="disc" onChange={(e)=>{
        setDisc(e.target.value)
      }}/>
      
      <label>Artista:</label>
      <input type="text" name="artist" onChange={(e)=>{
        setArtist(e.target.value)
      }}/>

      <label>Año:</label>
      <input type="text" name="anio" onChange={(e)=>{
        setYear(e.target.value)
      }}/>

      <label>Género:</label>
      <input type="text" name="genre" onChange={(e)=>{
        setGenre(e.target.value)
      }}/>

      <label>Información:</label>
      <input type="text" name="info" onChange={(e)=>{
        setGenre(e.target.value)
      }}/>

      <button onClick={submitDisc}>Submit</button>
      
    {/*  {<div>
      {movieReviewList.map((value) => {
      return <div className='card'>
              <h2>{value.movieName}</h2>
              <p>{value.movieReview}</p>
              
              <button onClick={() => {deleteReview(value.movieName)}}>Delete</button>
              
              <input type="text" id="updateInput" onChange={(e)=> {
                setNewReview(e.target.value)
              }} />
              <button onClick={()=> {updateReview(value.movieName)}}>Update</button>
             
             </div>
            }
      )}
      
      </div>} */}
      
      </div>
      
      </div>
    </>
  )
}

export default App
