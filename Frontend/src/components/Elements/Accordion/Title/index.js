import './style.css';

export default function Title({ open, click, children }) {
  const accrodionTitleClasses = ['accrodion__title'];
  if (open) accrodionTitleClasses.push('open');

  return (
    <div className={accrodionTitleClasses.join(' ')} onClick={click}>
      <div className="accrodion__title--content">{children}</div>
      <svg
        className="accrodion__title--icon"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
  );
}
