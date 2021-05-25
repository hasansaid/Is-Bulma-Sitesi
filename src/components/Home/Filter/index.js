import './style.css';
import Accrodion from '../../Elements/Accordion';

import Technologies from './Technologies';
import Level from './Level';
import Type from './Type';
import City from './City';

export default function Filter() {
  return (
    <section className="filter">
      <Accrodion>
        <Technologies />
        <Level />
        <Type />
        <City />
      </Accrodion>
    </section>
  );
}
