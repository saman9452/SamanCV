import React from 'react';
import './hero.css';
import bg from '../../assets/hero.jpg';
import {Link} from 'react-scroll';

const Hero = () => {
  return (
    <section id='hero'>
        <div className='heroContent'>
            <span className='hello'>Hello,</span>
            <span>I'm <span className='introName'>Saman</span></span>
            <span>Web Developer</span>
            <p className='introPara'>I'm a skilled web developer with experience in developing interactive, innovative websites</p>
            <Link><button className='btn'>Hire Me</button></Link>
        </div>
        <img className='bg' src={bg} />
    </section>
  )
}

export default Hero;