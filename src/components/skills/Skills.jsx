import React from 'react';
import "./skills.css";
import Web from './Web';
import Critical from './Critical';
import Others from './Others';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical Lvl</span>
        <div className="skills__container container grid">
            <Critical />
            <Web />
            <Others />
        </div>
    </section>
  );
}

export default Skills;