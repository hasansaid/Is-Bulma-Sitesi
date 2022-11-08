import { NavLink, useHistory } from 'react-router-dom'

const Navbar = ({ userActive, changeUserActive }) => {
  let history = useHistory()

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
              to="/companies"
              activeClassName="active"
              className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
            >
              Şirketler
            </NavLink>
          </li>
          {userActive && (
            <>
              <li id="basvurulanlarID">
                <NavLink
                  to="/applied"
                  activeClassName="active"
                  className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
                >
                  Başvurulanlar
                </NavLink>
              </li>
              <li id="kaydedilenlerID">
                <NavLink
                  to="/saved"
                  activeClassName="active"
                  className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
                >
                  Kaydedilenler
                </NavLink>
              </li>
              <li id="cikisID">
                <NavLink
                  onClick={() => {
                    changeUserActive()

                    history.push('/')
                  }}
                  to="#"
                  activeClassName="active"
                  className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
                >
                  Çıkış Yap
                </NavLink>
              </li>
            </>
          )}
          {!userActive && (
            <>
              <li id="girisID">
                <NavLink
                  to="/login"
                  activeClassName="active"
                  className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
                >
                  Giriş Yap
                </NavLink>
              </li>
              <li id="kayitID">
                <NavLink
                  to="/signup"
                  activeClassName="active"
                  className="inline-block rounded-md px-4 py-1 cursor-pointer select-none font-semibold text-gray-500 hover:text-gray-600"
                >
                  Kayıt Ol
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
