import {useState, useEffect} from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';
import allJobs from '../../../../constants/jobs.json';

export default function City({jobs, changeJobs}) {
  const [open, setOpen] = useState (true);

  const [tehran, setTehran] = useState (false);
  const [esfahan, setEsfahan] = useState (false);
  const [shiraz, setShiraz] = useState (false);
  const [other, setOther] = useState (false);

  const [cities, setCities] = useState ([]);

  const filterJobs = () => {
    let filteredJobs;
    if (cities.length === 0) filteredJobs = allJobs;
    else
      filteredJobs = allJobs.filter (
        job => cities.some (city => job.cities.includes (city)) === true
      );

    changeJobs (filteredJobs);
  };

  useEffect (
    () => {
      filterJobs ();
    },
    [cities]
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <p>City</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Tehran"
          checked={tehran}
          change={() => {
            if (!tehran) {
              let newCity = [...cities];
              newCity.push ('Tehran');
              setCities (newCity);
            } else setCities (cities.filter (city => city !== 'Tehran'));
            setTehran (!tehran);
          }}
        />
        <Checkbox
          label="Esfahan"
          checked={esfahan}
          change={() => {
            if (!esfahan) {
              let newCity = [...cities];
              newCity.push ('Esfahan');
              setCities (newCity);
            } else setCities (cities.filter (city => city !== 'Esfahan'));
            setEsfahan (!esfahan);
          }}
        />
        <Checkbox
          label="Shiraz"
          checked={shiraz}
          change={() => {
            if (!shiraz) {
              let newCity = [...cities];
              newCity.push ('Shiraz');
              setCities (newCity);
            } else setCities (cities.filter (city => city !== 'Shiraz'));

            setShiraz (!shiraz);
          }}
        />
        <Checkbox
          label="Other"
          checked={other}
          change={() => {
            if (!other) {
              let newCity = [...cities];
              newCity.push ('Other');
              setCities (newCity);
            } else setCities (cities.filter (city => city !== 'Other'));
            setOther (!other);
          }}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
