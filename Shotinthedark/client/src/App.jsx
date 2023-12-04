import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'
/* import { response } from 'express' */

function App() {

const [movieName, setMovieName] = useState('')
const [review, setReview] = useState('')
const [movieReviewList, setMovieList] = useState([])
const [newReview, setNewReview] = useState('')


useEffect(() =>{
Axios.get('http://localhost:5174/api/get').then ((response) => {
setMovieList(response.data)
})
}, [])

/* Creación de un nuevo elemento */

const submitReview = () => {
Axios.post('http://localhost:5174/api/insert', {
  movieName: movieName, 
  movieReview: review,
})

/* Ver todos los elementos de la tabla */

setMovieList([...movieReviewList, 
  {movieName: movieName, movieReview: review}])
}

/* Eliminación de un elemento */

const deleteReview = (movie) => {
Axios.delete(`http://localhost:5174/api/delete/${movie}`)
}

/* Actualización de un elemento */

const updateReview = (movie) => {
  Axios.put(`http://localhost:5174/api/update/`, {
  movieName: movie,
  movieReview: newReview,
  })
  setNewReview("")
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
      
     {<div className='lista'>
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
      
      </div>}
      
      </div>
      
      </div>
    </>
  )
}

export default App
