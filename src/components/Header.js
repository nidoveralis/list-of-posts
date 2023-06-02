import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Route, Routes, Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import myImg from '../images/333333.jpg'

function Header() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <header >      
        <Navbar bg="light" expand={false} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${false}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
              placement="start"
            >
              
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Container>
                <Row >
                  <Image src={myImg} roundedCircle style={{"width":"190px", "margin":"20px auto"}} />
                  <p>Алина</p>
                  <p>nidoveralis@gmail.com</p>
                </Row>
              </Container>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link to="/" style={{"color":"#000", "textDecorationLine":"none"}} >Список постов</Link>
                  <Link to="/about-me" style={{"color":"#000", "textDecorationLine":"none"}}>Обо мне</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

    </header>
  )
}

export default Header;