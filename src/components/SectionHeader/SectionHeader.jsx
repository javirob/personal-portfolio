import React from 'react';

import './SectionHeader.css';

const SectionHeader = ({ children, title }) => {
  return (
    <header className='section-header color-enfasis'>
      <h2 className='text-heading'>
        {children}
        <span>{title}</span>
      </h2>
    </header>
  );
};

export default SectionHeader;
