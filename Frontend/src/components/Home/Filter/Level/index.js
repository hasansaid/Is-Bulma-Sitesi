import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function Level() {
  const [open, setOpen] = useState(true);

  const [internship, setInternship] = useState(false);
  const [junior, setJunior] = useState(false);
  const [senior, setSenior] = useState(false);
  const [cto, setCto] = useState(false);

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
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
        <p>Experience level</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Internship"
          checked={internship}
          change={() => setInternship(!internship)}
        />
        <Checkbox
          label="Junior"
          checked={junior}
          change={() => setJunior(!junior)}
        />
        <Checkbox
          label="Senior"
          checked={senior}
          change={() => setSenior(!senior)}
        />
        <Checkbox label="CTO" checked={cto} change={() => setCto(!cto)} />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
