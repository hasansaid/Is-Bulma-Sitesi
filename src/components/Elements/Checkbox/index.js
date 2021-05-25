import './style.css';

export default function Checkbox({ label, checked, change }) {
  return (
    <div className="checkbox" onClick={change}>
      <div className="checkbox__container">
        <input
          type="checkbox"
          checked={checked}
          onChange={change}
          className="checkbox__input"
        />
        {checked && (
          <svg
            className="checkbox__icon"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </div>
      <label className="checkbox__label" onClick={change} children={label} />
    </div>
  );
}
