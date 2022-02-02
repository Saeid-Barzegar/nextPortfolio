import Link from 'next/link';

const NavLink = ({label, path}) => (
  <Link href={path}>
    <span className="nav-link cursor-pointer">{label}</span>
  </Link>
)

const NavbarComponent = () => (
  <div className="navbar-wrapper">
    <nav className="navbar navbar-expand-lg navbar-dark fj-mw9">
      <Link href="/">
        <span className="navbar-brand mr-3 font-weight-bold cursor-pointer" >FilipJerga</span>
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" style={{flex: 1}}>
          <li className="nav-item mr-3">
            <NavLink path="/portfolios" label="Portfolio" />
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Forum
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink path="/categories" label="Categories" />
              <NavLink path="/topics" label="Topics" />
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item mr-3">
            <a className="nav-link" href="#">Sign Up</a>
          </li>
          <li className="nav-item mr-3">
            <Link href={'/login'} >
              <span className="nav-link btn btn-success bg-green-2 bright" >Sign In</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)

export default NavbarComponent;