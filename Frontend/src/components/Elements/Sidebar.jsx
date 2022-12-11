import PropTypes from 'prop-types'

const Sidebar = ({ children }) => {
  return (
    <aside className="mr-5 w-full mb-5 md:mb-0 md:w-4/12 space-y-3">
      {children}
    </aside>
  )
}

Sidebar.propsTypes = {
  children: PropTypes.element,
}

export default Sidebar
