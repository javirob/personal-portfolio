import React from 'react';

import { FaRegFileCode } from 'react-icons/fa';
import SectionHeader from '../SectionHeader/SectionHeader';
import { skillsList } from './data';

import './Skills.css';

const Skills = () => {
  return (
    <section className='skills section-padding bg-color-1' id='skills'>
      <SectionHeader title='Skills'>
        <FaRegFileCode />
      </SectionHeader>

      <div className='skills-content'>
        {skillsList.map((skill, index) => {
          const { title, items } = skill;

          return (
            <div key={index + title} className='skill-card'>
              <h3>{title}</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
