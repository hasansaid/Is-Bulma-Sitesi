import { useState } from 'react';

import Accrodion from '../../../Elements/Accordion';
import Checkbox from '../../../Elements/Checkbox';

export default function Technologies() {
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        <p>Technologies</p>
      </Accrodion.Title>
      <Accrodion.Content open={open}>
        <Checkbox name="technology__backend" label="Backend" />
        <Checkbox name="technology__frontend" label="Frontend" />
        <Checkbox name="technology__mobile" label="Mobile" />
        <Checkbox name="technology__javascript" label="JavaScript" />
        <Checkbox name="technology__react" label="Recat" />
        <Checkbox name="technology__python" label="Python" />
        <Checkbox name="technology__php" label="PHP" />
        <Checkbox name="technology__csharp" label="C#" />
        <Checkbox name="technology__java" label="Java" />
        <Checkbox name="technology__linux" label="Linux" />
      </Accrodion.Content>
    </Accrodion.Group>
  );
}
