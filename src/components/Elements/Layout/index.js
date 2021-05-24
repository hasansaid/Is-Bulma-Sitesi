import './style.css';
import Navbar from '../Navbar';

export default function Layout({ flex, children }) {
  return (
    <>
      <Navbar />
      <main className={`main-content ${flex ? 'flex' : ''}`}>{children}</main>
    </>
  );
}
