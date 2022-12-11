import './style.css';

export default function Content({ open, children }) {
  if (!open) return null;

  return <div className="accrodion__content" children={children} />;
}
