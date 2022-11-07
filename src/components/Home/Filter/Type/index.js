import {useState, useEffect} from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';
import allJobs from '../../../../constants/jobs.json';

export default function Type({jobs, changeJobs}) {
  const [open, setOpen] = useState (true);

  const [fulltime, setFulltime] = useState (false);
  const [parttime, setParttime] = useState (false);
  const [project, setProject] = useState (false);

  const [types, setTypes] = useState ([]);

  const filterJobs = () => {
    let filteredJobs;
    if (types.length === 0) filteredJobs = allJobs;
    else
      filteredJobs = allJobs.filter (job =>
        types.includes (job.contract.replace (' ', '').toLowerCase ())
      );

    changeJobs (filteredJobs);
  };

  useEffect (
    () => {
      filterJobs ();
    },
    [types]
  );

  return (
    <Accrodion.Group>
      <Accrodion.Title open={open} click={() => setOpen (!open)}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <p>İş Tipi</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Tam Zamanlı"
          checked={fulltime}
          change={() => {
            if (!fulltime) {
              let newTypes = [...types];
              newTypes.push ('tamzamanlı');
              setTypes (newTypes);
            } else {
              let newTypes = types.filter (type => type !== 'tamzamanlı');
              setTypes (newTypes);
            }

            setFulltime (!fulltime);
          }}
        />
        <Checkbox
          label="Yarı Zamanlı"
          checked={parttime}
          change={() => {
            if (!parttime) {
              let newTypes = [...types];
              newTypes.push ('yarızamanlı');
              setTypes (newTypes);
            } else {
              let newTypes = types.filter (type => type !== 'yarızamanlı');
              setTypes (newTypes);
            }

            setParttime (!parttime);
          }}
        />
        <Checkbox
          label="Proje Bazlı"
          checked={project}
          change={() => {
            if (!project) {
              let newTypes = [...types];
              newTypes.push ('projebazlı');
              setTypes (newTypes);
            } else {
              let newTypes = types.filter (type => type !== 'projebazlı');
              setTypes (newTypes);
            }

            setProject (!project);
          }}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
