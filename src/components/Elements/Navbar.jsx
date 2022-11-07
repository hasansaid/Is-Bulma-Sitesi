import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-4xl mx-auto p-3">
        <ul className="flex">
          <li>
            <NavLink
              to="/"
              exact
              activeClassName="active"
              className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
            >
              İşler
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/applied"
              activeClassName="active"
              className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
            >
              Başvurulanlar
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/saved"
              activeClassName="active"
              className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
            >
              Kaydedilenler
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/companies"
              activeClassName="active"
              className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
            >
              Şirketler
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
