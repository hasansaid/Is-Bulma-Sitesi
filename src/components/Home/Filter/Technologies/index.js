import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function Technologies() {
  const [open, setOpen] = useState(true);

  const [backend, setBackend] = useState(false);
  const [frontend, setFrontend] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [javascript, setJavaScript] = useState(false);
  const [react, setReact] = useState(false);
  const [python, setPython] = useState(false);
  const [php, setPhp] = useState(false);
  const [csharp, setCsharp] = useState(false);
  const [java, setJava] = useState(false);
  const [linux, setLinux] = useState(false);

  return (
    <Accrodion.Group>
      <Accrodion.Title open={open} click={() => setOpen(!open)}>
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
          change={() => setBackend(!backend)}
        />
        <Checkbox
          label="Frontend"
          checked={frontend}
          change={() => setFrontend(!frontend)}
        />
        <Checkbox
          label="Mobile"
          checked={mobile}
          change={() => setMobile(!mobile)}
        />
        <Checkbox
          label="JavaScript"
          checked={javascript}
          change={() => setJavaScript(!javascript)}
        />
        <Checkbox
          label="React"
          checked={react}
          change={() => setReact(!react)}
        />
        <Checkbox
          label="Python"
          checked={python}
          change={() => setPython(!python)}
        />
        <Checkbox label="PHP" checked={php} change={() => setPhp(!php)} />
        <Checkbox
          label="C#"
          checked={csharp}
          change={() => setCsharp(!csharp)}
        />
        <Checkbox label="Java" checked={java} change={() => setJava(!java)} />
        <Checkbox
          label="Linux"
          checked={linux}
          change={() => setLinux(!linux)}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
