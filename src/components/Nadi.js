import React from 'react'
import { Container, Card, Nav } from 'react-bootstrap'
import { Link, Outlet, useLocation } from 'react-router-dom'
import GoForward from './GoForward';


const Nadi = () => {
    let location = useLocation();
    return (
        <Container style={{ minHeight: '37vh' }}>
            <Card border='danger'>
                <Card.Header>
                    <Nav variant="tabs" className='row' activeKey="mooladhar">
                        <Nav.Item className='col text-center'>
                            <Link to="ida" className={`nav-link text-danger ${location.pathname === "/nadi/ida" ? "active fw-bold" : ""}`}>ईडा नाडी</Link>
                        </Nav.Item>

                        <Nav.Item className='col text-center'>
                            <Link to="pingala" className={`nav-link text-danger ${location.pathname === "/nadi/pingala" ? "active fw-bold" : ""}`}>पिंगला नाडी</Link>
                        </Nav.Item>

                        <Nav.Item className='col text-center'>
                            <Link to="sushumna" className={`nav-link text-danger ${location.pathname === "/nadi/sushumna" ? "active fw-bold" : ""}`}>सुषुम्ना नाडी</Link>
                        </Nav.Item>
                    </Nav>
                </Card.Header>

                <Card.Body>
                    <Outlet />
                </Card.Body>
            </Card>

            <GoForward page="/about" title="श्री माताजी आणि सहजयोग माहिती" />
        </Container>
    )
}
export default Nadi