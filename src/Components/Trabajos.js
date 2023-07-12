import React from 'react';
import TrabajosL from "../Trabajos.json";
import Trabajo from './Trabajo';
import { Col, Container, Row } from 'reactstrap';
import Trabajo2 from './Trabajo2';

const Trabajos = () => {
  return (
    <Container>
      <Row>
        {TrabajosL.map((tp) => {
          return (
            <Trabajo2
              nombre={tp.nombre}
              url={tp.url}
              imagen={tp.imagen}
              descripcion={tp.descripcion}
              key={tp.id} 
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Trabajos;