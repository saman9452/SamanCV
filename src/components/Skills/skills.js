import React from 'react';
import './skills.css';
import webDevelopment from '../../assets/webDevelopment.png';
import appDevelopment from '../../assets/appDevelopment.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'>With a proven background in Web Development spanning more than 4 years, I bring expertise in crafting dynamic
web designs and mobile applications. My strength lies in keen analytical insights and effective communication,
making me a valuable collaborator within team environments. </span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={webDevelopment} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Website Development</h2>
                    <p>this is a test that can be filled later</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={appDevelopment} className='skillBarImg'/>
                <div className='skillBarText'>
                    <h2>Application Development</h2>
                    <p>this is a test that can be filled later</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;