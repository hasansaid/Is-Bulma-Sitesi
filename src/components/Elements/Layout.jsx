import Navbar from './Navbar'

const Layout = ({ flex, children }) => {
  const classes = ['max-w-4xl mx-auto p-3 my-2']
  if (flex) classes.push('md:flex')

  return (
    <>
      <Navbar />
      <main className={classes.join(' ')} children={children} />
    </>
  )
}

export default Layout
