import './style.css';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <ul className="flex">
          <li>
            <NavLink to="/" activeClassName="active" className="main-nav__link">
              Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied"
              activeClassName="active"
              className="main-nav__link"
            >
              Applied
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pinned"
              activeClassName="active"
              className="main-nav__link"
            >
              Pinned
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/companies"
              activeClassName="active"
              className="main-nav__link"
            >
              Companies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
