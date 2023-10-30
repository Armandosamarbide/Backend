import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import './detail.css';

const Detail = () => {

    const navigate = useNavigate()
    const {did} = useParams()
    const [discDetail, setDiscDetail] = useState(null)
    useEffect(
        () =>{
            fetch('http://localhost:4000/api/discos/' + did)
            .then(res => res.json() )
            .then(result =>{
                setDiscDetail(result.disco)
            })
        },  []
    )
   
    const handleDeleteDisc = () =>{
        
        fetch('http://localhost:4000/api/discos/' + did, {method: 'DELETE'})
        .then((res) => res.json())
        .then(data =>{
            if(data.ok){
                navigate('/')
            }
            else{
                alert('No se pudo eliminar el album, intenta mas tarde')
            }
        })
    }
    const handleActiveEditMode =() =>{
        setIsEditModeActive(true)
        setStockValue(discDetail.stock)
    }
    console.log(discDetail)

    const handleConfirmNewStock = () =>{
        fetch('http://localhost:4000/api/product/' + did + '?stock=' + stockValue, {method: 'PUT'})
        .then((res) => res.json())
        .then(result => {
            if(result.ok){
                setdiscDetail(result.disco)
            }else{
                alert(result.error)
            }
        })
        setIsEditModeActive(false)
    }
  return (
    <div class='detalle'>
        <Link to='/'>Volver</Link>
        {
            discDetail 
            ? <div>
                <h2>{discDetail.album}</h2>
                <h3>Artista: ${discDetail.artista}</h3>
             {/*    <span>Stock: { 
                isEditModeActive 
                ? <input value={stockValue} onChange={(e) =>{setStockValue(e.target.value)}} type='number'/>
                :discDetail.stock
                }</span> */}
               {/*  <p>{discDetail.descripcion}</p> */}
                <button onClick={handleDeleteProduct}>Eliminar</button>
               {/*  {isEditModeActive 
                ? <button onClick={handleConfirmNewStock}>Confirmar</button>
                : <button onClick={handleActiveEditMode}>Modificar stock</button>} */}
            </div>
            : <h2>Cargando...</h2>
        }
        
    </div>
  )
}

export default Detail