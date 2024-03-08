import React from 'react';
import StarrySky from './StarrySky';
import Banner from './Banner';
import About from './About';
import ProjectCard from './ProjectCard';
import SkillCard from './SkillCard';
import projects from '../data/projects.json';
import technicalSkills from '../data/technicalskills.json';

function Home() {
  const numberOfNotableProjects = 5;

  return (
    <div>
      <Banner />

      <div style={{ height: '100px', background: 'linear-gradient(#332B48, #3C4059)' }} />

      <div style={styles.projects}>
        <StarrySky />
        <h2>Notable Projects</h2>
        <div style={styles.projectContainer}>
          {projects.slice(0, numberOfNotableProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div style={{ height: '100px', background: 'linear-gradient(#3C4059, #4C587E)' }} />

      <div style={{ backgroundColor: '#4C587E', width: '100%' }}>
        <h2>Technical Skills</h2>
        <h3>I have worked with a lot of languages and tools, but here are my most proficient ones.</h3>
        <div style={styles.skillContainer}>
          {technicalSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>

      <div style={{ height: '100px', background: 'linear-gradient(#4C587E, #8977C9)' }} />

      <About />
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

export default Home;
