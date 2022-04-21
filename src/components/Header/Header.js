import { Link } from "react-router-dom";
import { useState } from "react";
import {Dropdown, Row, Col, Navbar, Nav } from "react-bootstrap";
import search from '../Assest/svg/search.svg'
const Header = () => {
  const [showMenu, setshowMenu] = useState(false)
  const openMenu =() => {
    setshowMenu(true)
  }
  const closeMenu = () => {
   setshowMenu(false)
  }

  return (
    <header>
      <Row className="header-content container-lg">
        <Col xs={10} md={6} className='header-col'>
          <div className="Logo">
            <strong>Books</strong><span>Reviwes</span>
          </div>
        </Col>
        <Col xs={2} md={6} className="header-col">
          <Navbar expand='md' className="sub-navbar">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse>
              <Nav>
              <Nav.Link><Link to="/">HOME</Link></Nav.Link>
            <Dropdown show={showMenu} onMouseEnter={openMenu} onClick={openMenu} onMouseLeave={closeMenu}>
              <Dropdown.Toggle>
              BOOKS
              </Dropdown.Toggle>
              
              <Dropdown.Menu >
                <Dropdown.Item ><Link  to="/bookDetails/Maecenas">Maecenas</Link></Dropdown.Item>
                <Dropdown.Item> <Link to="/bookDetails/Nam">Nam</Link></Dropdown.Item>
                <Dropdown.Item> <Link to= "/bookDetails/Suspendisse">Suspendisse</Link></Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link>REVIWES</Nav.Link>
            <Nav.Link>NEWS</Nav.Link>
            <Nav.Link>CONTACTS</Nav.Link>
            <img src={search} className='search-icon'></img>
              </Nav>
        
          </Navbar.Collapse>
        
          </Navbar>
          
        </Col>
      </Row>
    </header>
  );
}

export default Header;
