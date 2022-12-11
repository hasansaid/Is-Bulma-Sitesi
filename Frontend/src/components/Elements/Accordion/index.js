import './style.css';

import Group from './Group';
import Title from './Title';
import Content from './Content';

export default function Accrodion({ children }) {
  return <ul className="accrodion">{children}</ul>;
}

Accrodion.Group = Group;
Accrodion.Title = Title;
Accrodion.Content = Content;
