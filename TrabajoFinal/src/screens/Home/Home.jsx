import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
  const [cds, setCds] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() =>{
    fetch('http://localhost:4000/api/discos', 
      {method: 'GET'}
    )
    .then((res) => res.json())
    .then(result => {
      setCds(result.products)
      setLoading(false)
    })
  }, [])
    

  console.log(cds)
  return (
    <div>
            <h1>Listado de Discos</h1>

        {
          loading 
          ? <h2>Cargando..</h2>
          : cds.map(cd =>(
           
            <div key={cd.id}>
              <h3>{cd.album} ({cd.anio})</h3>
              <h4>{cd.artista}</h4>
              <Link to={'/disco/detail/' + cd.id }>Ver detalle</Link>
            </div>
           
          )) 
        }
    </div>
  )
}

export default Home