
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from './NavLink';

const NavbarComponent = () => (
  <Navbar bg="dark" variant="dark" expand='lg' className='navbar-wrapper'>
    <NavLink path="/" type='brand'>FilipJerga</NavLink>
    <NavbarToggle />
    <NavbarCollapse>
      <Nav className='mr-auto flex-1'>
        <ul className="navbar-nav" >
          <li className="nav-item mr-3">
            <NavLink path="/portfolios">Portfolio</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavDropdown title="Forum" id="navbarScrollingDropdown">
              <NavLink path="/forum/categories" type='dropdown'>Categories</NavLink>
              <NavLink path="/forum/topics/fer8g76eg8e76tg8e768et" type='dropdown'>Topics</NavLink>
              <NavDropdown.Divider />
              <NavLink path="/forum/categories" type='dropdown'>Something else here</NavLink>
            </NavDropdown>
          </li>
          <li className="nav-item mr-3">
            <NavLink path="/cv">My CV</NavLink>
          </li>
        </ul>
      </Nav>
      <Nav>
        <ul className="navbar-nav">
          <li className="nav-item mr-3">
            <a className="nav-link" href="/register">Sign Up</a>
          </li>
          <li className="nav-item mr-3">
            <NavLink path="/login" type='button'>Sign In</NavLink>
          </li>
        </ul>
      </Nav>
    </NavbarCollapse>
  </Navbar>
)

export default NavbarComponent;