import './style.css';

export default function Input({ type = 'text', name, placeholder, onChange }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={event => onChange(event.target.value)}
    />
  );
}
