import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import './Home.css'

const Home = () => {
  const [discos, setDiscos] = useState([])
  const [loading, setLoading] = useState(true)

  const [disc, setDisc] = useState('')
  const [artist, setArtist] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const [info, setInfo] = useState('')
  
  useEffect(() =>{
    fetch('http://localhost:4000/api/discos', 
      {method: 'GET'}
    )
    .then((res) => res.json())
    .then(result => {
    setDiscos(result.discos)
    console.log(result)
    setLoading(false)
    })
  }, [])

/* Agregar nuevo elemento */

const addDisc = () => {
  Axios.post("http://localhost:4000/api/new", {
    album: disc, 
    artista: artist, 
    anio: year, 
    genero: genre, 
    discogs: info
  }).then( () => {
    setDiscos([...discos, 
      {album:disc, artista:artist, anio:year, genero: genre, discogs: info}])

alert('Agregado')
  
  })
}
    
  console.log(discos)
  return (
    <div className="container row" id="home"> 
    
    <div id="sidebar" className="col-2">

    <div className="row">
          
            </div>
            <div className="row">
            <div className="panel panel-default" >
              <div className="panel-heading"><h2>Nuevo disco</h2></div>
              
            <div className="panel-body">
            <form>
            
            <label className="form-label">Disco</label>
                    <input type="text" name="disc" className="form-control" required onChange={(e)=>{
                    setDisc(e.target.value)
                    }}/>
                   
                 <label className="form-label">Artista</label>
                   <input type="text" name="artist" className="form-control" required onChange={(e)=>{
                    setArtist(e.target.value)
                    }}/>
            
            <div className="form-group">
            <label className="form-label">Año</label>
            <input type="text" name="year" className="form-control" onChange={(e)=>{
            setYear(e.target.value)
            }}/>
      
            <label className="form-label">Género</label>
            <input type="text" name="genre" className="form-control" onChange={(e)=>{
            setGenre(e.target.value)
            }}/>
      
            <label className="form-label">Información</label>
            <input type="text" name="info" className="form-control" onChange={(e)=>{
            setInfo(e.target.value)
      }}/>
            </div>
            <br/>
            <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={addDisc}>Confirmar</button>
            
            </form>
            </div>
            </div>
            </div>


    </div>
   
           <div id="content" className="col-10">
          
            <div className='container d-flex flex-wrap align-items-center'> {/* Acá empieza el listado */}
        { 
          loading 
          ? <h2>Cargando..</h2>
          
          : discos.map(disco =>(
            <div className="col">
            <div key={disco.id} className='card bg-light'>
              <div className="card-body">
              <h3>{disco.album}</h3>
             
              <p>{disco.artista}</p>
             
              
              <Link className="btn btn-dark" to={'/discos/detail/' + disco.id }>Ver detalle</Link>

              
            
            </div>
            </div>
            </div>
           
          )) 
          }
           </div>
    </div>
   

    </div>



  )
  
}

export default Home