import './style.css';
import Accrodion from '../../Elements/Accordion';

import Technologies from './Technologies';
import Level from './Level';
import Type from './Type';
import City from './City';

export default function Filter({jobs, changeJobs}) {
  return (
    <section className="filter">
      <Accrodion>
        <Technologies jobs={jobs} changeJobs={changeJobs} />
        {/* <Level /> */}
        <Type jobs={jobs} changeJobs={changeJobs} />
        <City jobs={jobs} changeJobs={changeJobs} />
      </Accrodion>
    </section>
  );
}
