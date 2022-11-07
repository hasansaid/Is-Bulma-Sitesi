import {useState, useEffect} from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';
import allJobs from '../../../../constants/jobs.json';

export default function Technologies({jobs, changeJobs}) {
  const [open, setOpen] = useState (true);

  const [backend, setBackend] = useState (false);
  const [frontend, setFrontend] = useState (false);
  const [mobile, setMobile] = useState (false);
  const [javascript, setJavaScript] = useState (false);
  const [react, setReact] = useState (false);
  const [python, setPython] = useState (false);
  const [php, setPhp] = useState (false);
  const [csharp, setCsharp] = useState (false);
  const [java, setJava] = useState (false);
  const [linux, setLinux] = useState (false);

  const [techs, setTechs] = useState ([]);

  const filterJobs = () => {
    let filteredJobs;
    if (techs.length === 0) filteredJobs = allJobs;
    else
      filteredJobs = allJobs.filter (
        job => techs.some (tech => job.techs.includes (tech)) === true
      );

    changeJobs (filteredJobs);
  };

  useEffect (
    () => {
      filterJobs ();
    },
    [techs]
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <p>Technologies</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Backend"
          checked={backend}
          change={() => {
            if (!backend) {
              let newTechs = [...techs];
              newTechs.push ('backend');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'backend'));

            setBackend (!backend);
          }}
        />
        <Checkbox
          label="Frontend"
          checked={frontend}
          change={() => {
            if (!frontend) {
              let newTechs = [...techs];
              newTechs.push ('frontend');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'frontend'));

            setFrontend (!frontend);
          }}
        />
        <Checkbox
          label="Mobile"
          checked={mobile}
          change={() => {
            if (!mobile) {
              let newTechs = [...techs];
              newTechs.push ('mobile');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'mobile'));

            setMobile (!mobile);
          }}
        />
        <Checkbox
          label="JavaScript"
          checked={javascript}
          change={() => {
            if (!javascript) {
              let newTechs = [...techs];
              newTechs.push ('javascript');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'javascript'));

            setJavaScript (!javascript);
          }}
        />
        <Checkbox
          label="React"
          checked={react}
          change={() => {
            if (!react) {
              let newTechs = [...techs];
              newTechs.push ('react');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'react'));

            setReact (!react);
          }}
        />
        <Checkbox
          label="Python"
          checked={python}
          change={() => {
            if (!python) {
              let newTechs = [...techs];
              newTechs.push ('python');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'python'));

            setPython (!python);
          }}
        />
        <Checkbox
          label="PHP"
          checked={php}
          change={() => {
            if (!php) {
              let newTechs = [...techs];
              newTechs.push ('php');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'php'));

            setPhp (!php);
          }}
        />
        <Checkbox
          label="C#"
          checked={csharp}
          change={() => {
            if (!csharp) {
              let newTechs = [...techs];
              newTechs.push ('csharp');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'csharp'));

            setCsharp (!csharp);
          }}
        />
        <Checkbox
          label="Java"
          checked={java}
          change={() => {
            if (!java) {
              let newTechs = [...techs];
              newTechs.push ('java');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'java'));

            setJava (!java);
          }}
        />
        <Checkbox
          label="Linux"
          checked={linux}
          change={() => {
            if (!linux) {
              let newTechs = [...techs];
              newTechs.push ('linux');
              setTechs (newTechs);
            } else setTechs (techs.filter (tech => tech !== 'linux'));

            setLinux (!linux);
          }}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
