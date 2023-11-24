import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
/* import { response } from 'express' */

function App() {

const [movieName, setMovieName] = useState('')
const [review, setReview] = useState('')
/* const [movieReviewList, setMovieList] = useState('') */

/* useEffect(() =>{
Axios.get('http://localhost:5174/api/get').then ((response) => {
setMovieList(response.data)
})
}, []) */

const submitReview = () => {
Axios.post('http://localhost:5174/api/insert', {
  movieName: movieName, 
  movieReview: review,
}).then(()=> {
  alert('Nuevo contenido añadido con éxito')
})
}

  return (
    <>
      <div className='App'>
      <h1>SHOT IN THE DARK</h1>

      <div className='form'>
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e)=>{
        setMovieName(e.target.value)
      }}/>
      
      <label>Review:</label>
      <input type="text" name="review" onChange={(e)=>{
        setReview(e.target.value)
      }}/>

      <button onClick={submitReview}>Submit</button>
      
     {/*  <div>
      {movieReviewList.map((value) => {
      return <h2>Movie: {value.movieName} | Review: {value.movieReview}</h2>

            }
      )}
      
      </div> */}
      
      </div>
      
      </div>
    </>
  )
}

export default App
