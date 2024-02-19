import React, { useState, useEffect } from 'react';
import StarrySky from './components/StarrySky.js'
import FixedHeader from './components/FixedHeader.js'
import Banner from './components/Banner.js'
import About from './components/About.js'
import ProjectCard from './components/ProjectCard.js'
import SkillCard from './components/SkillCard.js'

import projects from './data/projects.json';
import technicalSkills from './data/technicalskills.json';

function App() {
  const numberOfNotableProjects = 4;

  return (
    <div style={styles.container}>
      <FixedHeader/>
      <Banner/>

      {/*<About/>*/}

      <div style={{height: '100px', background: 'linear-gradient(#332B48, #3C4059)'}}/>

      <div style={styles.projects}>
        <StarrySky />
        <h2>Notable Projects</h2>
        <div style={styles.projectContainer}>
          {projects.slice(0,numberOfNotableProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div style={{height: '100px', background: 'linear-gradient(#3C4059, #4C587E)'}}/>

      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8977c9" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,192C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>*/}
      <div style={{backgroundColor: '#4C587E', width: '100%',}}>
        <h2>Technical Skills</h2>
        <h3>I have worked with a lot of languages and tools, but here are my most proficient ones.</h3>
        <div style={styles.skillContainer}>
          {technicalSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      {/*<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8977c9" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,192C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>*/}
    
      <div style={{height: '100px', background: 'linear-gradient(#4C587E, #8977C9)'}}/>

      <About/>
    
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#dabaff',
  },
  projects: {
    backgroundColor: '#3C4059',
    width: '100%',

    display: 'flex',
    flexFlow: 'column nowrap',
    alignSelf: 'center',
  },
  projectContainer: {
    width: '80%',
    height: 'auto',
    alignSelf: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    gap: '40px 20px',
  },
  skillContainer: {
    //width: '90%',
    //height: 'auto',

    // Flexbox
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    justifySelf: 'center',
    gap: '7px 7px'
  }
}

export default App;
