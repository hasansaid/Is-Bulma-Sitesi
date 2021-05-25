import './style.css';
import Navbar from '../Navbar';

export default function Layout({ flex, children }) {
  const classes = ['main-content'];
  if (flex) classes.push('md:flex');

  return (
    <>
      <Navbar />
      <main className={classes.join(' ')} children={children} />
    </>
  );
}
