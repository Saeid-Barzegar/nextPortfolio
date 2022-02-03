
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
  // <div className="navbar-wrapper">
  //   <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
  //     <Link href="/">
  //       <span className="navbar-brand mr-3 font-weight-bold cursor-pointer" >FilipJerga</span>
  //     </Link>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>

  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <ul className="navbar-nav mr-auto" style={{flex: 1}}>
  //         <li className="nav-item mr-3">
  //           <NavLink path="/portfolios" label="Portfolio" />
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //             Forum
  //           </a>
  //           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //             <NavLink path="/categories" label="Categories" />
  //             <NavLink path="/topics" label="Topics" />
  //             <div className="dropdown-divider"></div>
  //             <a className="dropdown-item" href="#">Something else here</a>
  //           </div>
  //         </li>
  //       </ul>
  //       <ul className="navbar-nav">
  //         <li className="nav-item mr-3">
  //           <a className="nav-link" href="#">Sign Up</a>
  //         </li>
  //         <li className="nav-item mr-3">
  //           <Link href={'/login'} >
  //             <span className="nav-link btn btn-success bg-green-2 bright" >Sign In</span>
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // </div>
)

export default NavbarComponent;