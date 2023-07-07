import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap'

const Trabajo = ({alumno,nombre, url, imagen, descripcion}) => {

    console.log(nombre);

  return (
    <Col xl="4">
    <Card className="my-5">
        <CardImg
        alt={nombre}
        src="../../../public/ejemplo.png"
        top
        width="100%"
        />
        <CardBody>
        <CardTitle tag="h5">
            {nombre}
        </CardTitle>
        <CardText>
            {descripcion}
        </CardText>
        <CardText>
            <small className="text-muted">
            {alumno}
            </small>
        </CardText>
        </CardBody>
    </Card>
    </Col>
  )
}

export default Trabajo