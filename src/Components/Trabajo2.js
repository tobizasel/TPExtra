import React from 'react'
import { Col } from 'reactstrap'

const Trabajo2 = ({nombre, url, imagen, descripcion}) => {

  return (
    <Col xl="4">
    <a href={url}>
    <div className="my-5 carta">
        <img
        alt={nombre}
        src={`/assets/${imagen}`}
        top
        width="100%"
        className='carta__img'
        />
        <div className='carta__cuerpo'>
        <h5 className='carta__titulo'>
            {nombre}
        </h5>
        <p className='carta__texto'>
            {descripcion}
        </p>
        </div>
    </div>
    </a>
    </Col>
  )
}

export default Trabajo2