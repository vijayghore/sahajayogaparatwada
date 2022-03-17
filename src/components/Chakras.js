import React from 'react'
import { Container, Card, Nav } from 'react-bootstrap'
import { Link, Outlet, useLocation } from 'react-router-dom'
import GoForward from './GoForward';



const Chakras = () => {

  let location = useLocation();

  return (
    
        <Container>
        <Card border='danger'>
          <Card.Header>
            <Nav variant="tabs" className='row' activeKey="sahastrar">
              <Nav.Item className='col text-center'>
                <Link key="mooladhar" to="mooladhar" className={`nav-link text-danger ${location.pathname === "/chakras/mooladhar" ? "active fw-bold" : ""}`} >मुलाधार चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link to="swadhishthan" className={`nav-link text-danger ${location.pathname === "/chakras/swadhishthan" ? "active fw-bold" : ""}`}>स्वाधीष्ठान चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link to="nabhi" className={`nav-link text-danger ${location.pathname === "/chakras/nabhi" ? "active fw-bold" : ""}`}>नाभी चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link to="anahat" className={`nav-link text-danger ${location.pathname === "/chakras/anahat" ? "active fw-bold" : ""}`}>अनाहत चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link to="vishuddhi" className={`nav-link text-danger ${location.pathname === "/chakras/vishuddhi" ? "active fw-bold" : ""}`}>विशुद्धी चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link to="aagya" className={`nav-link text-danger ${location.pathname === "/chakras/aagya" ? "active fw-bold" : ""}`}>आज्ञा चक्र</Link>
              </Nav.Item>

              <Nav.Item className='col text-center'>
                <Link key="sahastrar" to="sahastrar" className={`nav-link text-danger ${location.pathname === "/chakras/sahastrar" ? "active fw-bold" : ""}`}>सहस्रार चक्र</Link>
              </Nav.Item>

            </Nav>
          </Card.Header>


          <Card.Body>
            <Outlet />
          </Card.Body>

          {/* <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            Second With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Second</Button>
        </Card.Body> */}

        </Card>

        <GoForward page="/nadi/ida" title="आपले नाडी संस्थान जाणून घ्या" />

      </Container>
    
  )
}

export default Chakras
