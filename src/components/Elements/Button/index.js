import './style.css';

export default function Button({ type, block, children }) {
  const classes = ['btn'];

  if (type) classes.push(`btn-${type}`);
  if (block) classes.push('btn-block');

  return <button className={classes.join(' ')}>{children}</button>;
}
