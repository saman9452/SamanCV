import React from 'react';
import './contact.css';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';
import facebook from '../../assets/facebook.png';

const Contact = () => {
  return (
    <section id='contact'>
        <h1 className='contactTitle'>Contact Me</h1>
        <span className='contactDescription'>please write your message here</span>
        <form className='contactForm'>
            <input className='name' type='text' placeholder='Your Name' />
            <input className='email' type='text' placeholder='Your Email' />
            <textarea className='message' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Send</button>
            <div className='links'>
                <img src={linkedin} className='link' />
                <img src={instagram} className='link' />
                <img src={facebook} className='link' />
                <img src={facebook} className='link' />
            </div>
        </form>
    </section>
  )
}

export default Contact