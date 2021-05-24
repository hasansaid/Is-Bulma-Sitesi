import './style.css';

export default function Button({ type, block, children }) {
  return (
    <button className={`btn btn-${type} ${block ? 'btn-block' : ''}`}>
      {children}
    </button>
  );
}
