import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components'
import Checkout from './Checkout.css';
import { faCheckCircle,  } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Container = styled.div`
text-align: center;
padding: 100px`

const Check = styled.div`
height: 70px;
color: green;
`

const MensajeFinal = () => {
  return (
    <div ><Container>
    <h1 className='texto' >¡Compra Realizada correctamente!</h1>
    <Check>
    <FontAwesomeIcon className='check' icon={faCheckCircle}/>
    </Check>
    </Container>
    <Link to="/" className='btnVolver'>Volver a comprar Productos</Link>
    </div> 
    
  )
}

export default MensajeFinal