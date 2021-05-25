import './style.css';

export default function Checkbox({ name, label }) {
  return (
    <div className="checkbox">
      <input className="checkbox__input" id={name} type="checkbox" />
      <label className="checkbox__label" htmlFor={name} children={label} />
    </div>
  );
}
