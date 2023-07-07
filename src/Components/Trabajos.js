import React from 'react';
import TrabajosL from "../Trabajos.json";
import Trabajo from './Trabajo';
import { Col, Container, Row } from 'reactstrap';

const Trabajos = () => {
  return (
    <Container>
      <Row>
        {TrabajosL.map((tp) => {
          return (
            <Trabajo
              alumno={tp.alumno}
              nombre={tp.nombre}
              url={tp.url}
              imagen={tp.imagen}
              descripcion={tp.descripcion}
              id={tp.id} 
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Trabajos;