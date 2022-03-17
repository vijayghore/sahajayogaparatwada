import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function TopNavbar() {

    let location = useLocation();
    useEffect(()=> {
        switch (location.pathname){
            case '/':
              document.title = "Sahajyoga Paratwada | The official website";
              break;
            case '/sahajyoga':
              document.title = "The only way to change your life";
              break;
            case '/benefits':
              document.title = "Benefits of Sahajyoga";
              break;
            case '/subtlesystem':
              document.title = "Subtle system of sahajyoga";
              break;
            case '/kundalini':
              document.title = "Kundalini";
              break;
            case '/chakras/mooladhar':
              document.title = "Mooladhar Chakra"
              break;
            case '/chakras/swadhishthan':
              document.title = "Swadhashthan Chakra"
              break;
            case '/chakras/nabhi':
              document.title = "Nabhi Chakra"
              break;
            case '/chakras/anahat':
              document.title = "Anahat Chakra"
              break;
            case '/chakras/vishuddhi':
              document.title = "Vishuddhi Chakra"
              break;
            case '/chakras/aagya':
              document.title = "Aagya Chakra"
              break;
            case '/chakras/sahastrar':
              document.title = "Door to the Heaven"
              break;
            case '/nadi/ida':
              document.title = "Ida Nadi"
              break;
            case '/nadi/pingala':
              document.title = "Pingala Nadi"
              break;
            case '/nadi/sushumna':
              document.title = "Sushumna Nadi"
              break;
            default:
              document.title = "404 | Page Not Found"

        }
    })
  return (
    <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark" className='mb-3'>
      <Container fluid>
        <Link className='navbar-brand' to="/">सहजयोगा परतवाडा</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={`nav-link ${location.pathname === "/sahajyoga"? "active": ""}`} to="/sahajyoga">सहजयोग</Link>
            <Link className={`nav-link ${location.pathname === "/benefits"? "active": ""}`} to="/benefits">फायदे</Link>
            <Link className={`nav-link ${location.pathname === "/subtlesystem"? "active": ""}`} to="/subtlesystem">सूक्ष्म शरीर</Link>
            <Link className={`nav-link ${location.pathname === "/kundalini"? "active": ""}`} to="/kundalini">कुण्डलिनी</Link>
            <NavDropdown title="७ चक्रे" id="chakras-nav-dropdown">
              <Link className= "dropdown-item" to="chakras/mooladhar">mooladhar</Link>
              <Link className= "dropdown-item" to="chakras/swadhishthan">swadhishthan</Link>
              <Link className= "dropdown-item" to="chakras/nabhi">nabhi</Link>
              <Link className= "dropdown-item" to="chakras/anahat">anahat</Link>
              <Link className= "dropdown-item" to="chakras/vishuddhi">vishuddhi</Link>
              <Link className= "dropdown-item" to="chakras/aagya">aagya</Link>
              <Link className= "dropdown-item" to="chakras/sahastrar">sahastrar</Link>
            </NavDropdown>

            <NavDropdown title="३ नाड्या" id="nadi-nav-dropdown">
              <Link className='dropdown-item' to="nadi/ida">ida</Link>
              <Link className='dropdown-item' to="nadi/pingala">pingala</Link>
              <Link className='dropdown-item' to="nadi/sushumna">sushumna</Link>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link className={`nav-link ${location.pathname === "/about"? "active": ""}`} to="/about">About</Link>
            <Link className={`nav-link ${location.pathname === "/contact"? "active": ""}`} to="/contact">Contact </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
