import './Project.css';

import { BsGithub } from 'react-icons/bs';
import { BiLinkExternal } from 'react-icons/bi';

const Project = ({ img, title, desc, siteUrl, githubUrl }) => {
  return (
    <article className='project-card'>
      <header className='project-img'>
        <img src={img} alt={title} />
      </header>
      <div className='project-info'>
        <h3>{title}</h3>
        <ul>
          {desc.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <footer className='project-links bg-color-2'>
        <a href={siteUrl} target='_blank' rel='noreferrer'>
          <span>Visit Site</span>
          <BiLinkExternal />
        </a>

        <a href={githubUrl} target='_blank' rel='noreferrer'>
          <span>Source Code</span>
          <BsGithub />
        </a>
      </footer>
    </article>
  );
};

export default Project;
