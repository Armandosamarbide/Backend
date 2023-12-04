import { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios' /* Axios nos permite hacer API requests */

function App() {
  
const [discList, setDiscList] = useState([])
const [disc, setDisc] = useState('')
const [artist, setArtist] = useState('')
const [year, setYear] = useState('')
const [genre, setGenre] = useState('')
const [info, setInfo] = useState('')

useEffect(() =>{
  Axios.get('http://localhost:5174/api/get').then ((response) => {
  setDiscList(response.data)
  })
  }, [])

/* Agregar nuevo elemento */

const addDisc = () => {
Axios.post("http://localhost:5174/api/new", {
  album: disc, 
  artista: artist, 
  anio: year, 
  genero: genre, 
  discogs: info
}).then( () => {
  alert('OK')
})

  /* Ver todos los elementos */

setDiscList([...discList, 
    {album: disc, artista: artist, anio: year, genero: genre, discogs: info}])
  }

  return (
    <>
     <div className='form'>
      <h1>SHOT IN THE DARK</h1>
     
      <label>Disco</label>
      <input type="text" name="disc" onChange={(e)=>{
        setDisc(e.target.value)
      }}/>
      
      <label>Artista</label>
      <input type="text" name="artist" onChange={(e)=>{
        setArtist(e.target.value)
      }}/>
      
    <label>Año</label>
      <input type="text" name="year" onChange={(e)=>{
        setYear(e.target.value)
      }}/>
      
      <label>Género</label>
      <input type="text" name="genre" onChange={(e)=>{
        setGenre(e.target.value)
      }}/>
      
      <label>Información</label>
      <input type="text" name="info" onChange={(e)=>{
        setInfo(e.target.value)
      }}/>

      <button onClick={addDisc}>Submit</button>

     {<div>
      {discList.map((value) => {
      return <div className='card'>
              <h2>{value.album}</h2>
              <p>{value.artista}</p>
              </div>
            }
      )}
      
      </div>}

      </div>
      </>
  )
}

export default App
