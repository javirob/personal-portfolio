import hero from '../../assets/hero.svg';

import './Hero.css';

const Hero = () => {
  return (
    <section className='hero section-padding flex-around bg-color-1' id='home'>
      <div className='hero-content text-color'>
        <h2>Javier Robles</h2>
        <h1 className='text-heading '>Portfolio Website</h1>
        <p className='text-leading'>
          Welcome to my Portolio site! I am a Frontend Developer, living in Ireland. I focus in
          Vanilla Javascript and React
        </p>
        <a href='#projects' className='btn'>
          See My Projects
        </a>
      </div>
      <div className='hero-img'>
        <img src={hero} alt='presentation_image' />
      </div>
    </section>
  );
};

export default Hero;
