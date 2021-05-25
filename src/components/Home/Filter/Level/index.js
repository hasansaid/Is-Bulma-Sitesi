import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function Level() {
  const [open, setOpen] = useState(true);

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
        <Checkbox name="level__internship" label="Internship" />
        <Checkbox name="level__junior" label="Junior" />
        <Checkbox name="level__senior" label="Senior" />
        <Checkbox name="level__cto" label="CTO" />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
