import React from 'react';
import { FaCubes } from 'react-icons/fa';

import Project from './Project';
import { projectsData } from './data';

import SectionHeader from '../SectionHeader/SectionHeader';

import './Projects.css';

const Projects = () => {
  return (
    <section className='projects section-padding bg-color-3' id='projects'>
      <SectionHeader title='Projects'>
        <FaCubes />
      </SectionHeader>
      <div className='projects-content'>
        {projectsData.map((item) => {
          return <Project {...item} key={item.id} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
