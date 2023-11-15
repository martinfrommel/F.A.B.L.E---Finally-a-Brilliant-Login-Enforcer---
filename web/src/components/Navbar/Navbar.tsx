import { NavLink } from '@redwoodjs/router'

// Define the TypeScript interface for route objects and additional props
// interface Route {
//   to: string
//   label: string
// }

interface NavbarProps {
  // routes: Route[]
  className?: string
}

const Navbar: React.FC<NavbarProps> = ({ className, ...rest }) => {
  const routes = [
    { to: '/', label: 'Home' },
    { to: '/generate-password', label: 'Generate a password' },
  ]

  return (
    <nav
      className={`navbar navbar-end flex-1 space-x-2 bg-primary ${className}`}
      {...rest}
    >
      {routes.map((route, index) => (
        <NavLink
          key={index}
          to={route.to}
          className="nav-link"
          activeClassName="nav-link-active"
        >
          {route.label}
        </NavLink>
      ))}
    </nav>
  )
}

export default Navbar
