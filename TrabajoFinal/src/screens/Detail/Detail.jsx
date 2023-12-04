import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './detail.css';

const Detail = () => {

    const navigate = useNavigate()
    const {did} = useParams()
    const [discDetail, setDiscDetail] = useState(null)
    
    useEffect( 
        () =>{
            fetch('http://localhost:4000/api/disco/' + did)
            .then(res => res.json() )
            .then(result =>{
                setDiscDetail(result.disco)
                console.log(result)
            })
        },  []
    )
   
    const handleDeleteDisc = () =>{
        
        fetch('http://localhost:4000/api/disco/' + did, {method: 'DELETE'})
        .then((res) => res.json())
        .then(data =>{
            if(data.ok){
                navigate('/')
            }
            else{
                alert('No se pudo eliminar el album')
            }
        })
    }
    
    const updateDisc = () =>{
        fetch('http://localhost:4000/api/disco/' + did, {method: 'PUT'})
        .then((res) => res.json())
        .then(result =>{
            if(result.ok){
                alert('Actualizado')
                navigate('/')
            }
            else{
                alert('No se pudo modificar')
            }
        })
    }
    
    return (
    
    <div className='container-fluid'>
        <nav className='nav' aria-label="breadcrumb">
        <Link to='/' className="text-end "><div className="btn btn-secondary col-1">Volver</div></Link>
        </nav>

        {
            discDetail 
            ? <div id="detalle">
                <div>
                <h3>{discDetail.album}</h3>

                <h4>{discDetail.artista}</h4>
         
                <p><b>Edición:</b> {discDetail.anio}</p>
         
                <p><b>Género:</b> {discDetail.genero}</p>
        
                <a href={discDetail.discogs} target='_blank' id="informacion" className="btn btn-primary col-2">Información</a>
               
                <button id="delete" className="btn btn-danger col-2" onClick={handleDeleteDisc}>Eliminar</button>

                </div>

            </div>
            : <h2>Cargando...</h2>
        }
        
    </div>
  )
}

export default Detail