import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaRegEnvelope } from 'react-icons/fa';

import './Socials.css';

const Socials = () => {
  return (
    <ul className='socials'>
      <li>
        <a
          className='text-color'
          href='https://www.linkedin.com/in/javirv'
          target='_blank'
          rel='noreferrer'
        >
          <FaLinkedin />
        </a>
      </li>
      <li>
        <a
          className='text-color'
          href='https://www.github.com/javirob'
          target='_blank'
          rel='noreferrer'
        >
          <FaGithub />
        </a>
      </li>
      <li>
        <a className='text-color' href='#contact'>
          <FaRegEnvelope />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
