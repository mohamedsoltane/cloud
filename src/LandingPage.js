import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LeafletMap from './LeafletMap'; 

const LandingPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <h1>Welcome to Our Map App !</h1>
          <p>Explore the world using our amazing map tool</p>
        </Col>
        <Col md={6}>
          <LeafletMap />
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
