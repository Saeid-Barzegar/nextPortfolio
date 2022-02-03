import Link from 'next/link';

const NavLink = (props) => {
  const { path, children, type = 'link', } = props;
  const classCreator = () => {
    switch (type) {
      case 'link': return 'nav-link';
      case 'dropdown': return 'dropdown-item';
      case 'button': return 'btn btn-success';
      case 'brand': return 'navbar-brand mr-3 font-weight-bold';
      default: return 'nav-link';
    }
  }
  return (
    <Link href={path}>
      <span className={`cursor-pointer ${classCreator()}`}>{children}</span>
    </Link>
  )
}

export default NavLink;
