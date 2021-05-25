import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function Type() {
  const [open, setOpen] = useState(true);

  const [fulltime, setFulltime] = useState(false);
  const [parttime, setParttime] = useState(false);
  const [project, setProject] = useState(false);

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
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
        <p>Type of cooperation</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox
          label="Fulltime"
          checked={fulltime}
          change={() => setFulltime(!fulltime)}
        />
        <Checkbox
          label="Parttime"
          checked={parttime}
          change={() => setParttime(!parttime)}
        />
        <Checkbox
          label="Project"
          checked={project}
          change={() => setProject(!project)}
        />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
