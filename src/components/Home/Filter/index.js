import './style.css';
import { useState } from 'react';
import update from 'immutability-helper';

import Accrodion from '../../Elements/Accordion';

import Technologies from './Technologies';
import Level from './Level';

export default function Filter() {
  const [accrodion, setAccrodion] = useState({
    technologies: true,
    level: true,
    type: true,
    city: true
  });

  const handleAccrodion = name => {
    switch (name) {
      case 'technologies':
        return setAccrodion(
          update(accrodion, { technologies: { $set: !accrodion.technologies } })
        );
      case 'level':
        return setAccrodion(
          update(accrodion, { level: { $set: !accrodion.level } })
        );
      case 'type':
        return setAccrodion(
          update(accrodion, { type: { $set: !accrodion.type } })
        );
      case 'city':
        return setAccrodion(
          update(accrodion, { city: { $set: !accrodion.city } })
        );
      default:
        return name;
    }
  };

  return (
    <section className="filter">
      <Accrodion>
        <Technologies />
        <Level />

        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.type}
            click={() => handleAccrodion('type')}
          >
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
          <Accrodion.Content open={accrodion.type}>Content</Accrodion.Content>
        </Accrodion.Group>

        <Accrodion.Group>
          <Accrodion.Title
            open={accrodion.city}
            click={() => handleAccrodion('city')}
          >
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
          <Accrodion.Content open={accrodion.city}>Content</Accrodion.Content>
        </Accrodion.Group>
      </Accrodion>
    </section>
  );
}