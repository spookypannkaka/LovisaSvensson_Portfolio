import Header from './components/Header.js'
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
      {/*<Header/>*/}
      <Banner/>

      <About/>

      <h2>Notable Projects</h2>
      <div style={styles.notableContainer}>
        {projects.slice(0,numberOfNotableProjects).map((project, index) => (
          <ProjectCard key={index} project={project} customStyles={notableStyle} />
        ))}
      </div>

      <h2>Other Projects</h2>
    <div style={styles.notableContainer}>
      {projects.slice(numberOfNotableProjects).map((project, index) => (
        <ProjectCard key={index} project={project} customStyles={otherStyle} />
      ))}
    </div>

      <h3>For more things I've worked on, check out my GitHub page</h3>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8977c9" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,192C960,181,1200,139,1320,117.3L1440,96L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
      <div style={{backgroundColor: '#8977c9', width: '100%',}}>
        <h1>Technical Skills</h1>
        <h3>I have worked with a lot of languages and tools, but here are my most proficient ones.</h3>
        <div style={styles.skillContainer}>
          {technicalSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#8977c9" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,192C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
      <h3>Want to get in contact?</h3>
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
  notableContainer: {
    width: '80%',
    height: 'auto',
    alignSelf: 'center',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    gap: '40px 40px',
  },
  skillContainer: {
    backgroundColor: '#8977c9',
    width: '70%',
    height: 'auto',
    alignSelf: 'center',

    // Flexbox
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
  }
}

const notableStyle = {
  container: {
    position: 'relative',
      backgroundColor: '#FDCCE8',
      width: '600px',
      height: '600px',
      boxShadow: 'box-shadow: 10px 10px 5px #332b48',
      
      // Flexbox
      display: 'flex',
      flexDirection: 'column',

      // Border
      border: '5px solid #fc9bd3',
  },
  gifContainer: {
      width: '100%',
      //height: '150px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  gifImage: {
      width: '100%', // Adjust as needed
      height: 'auto' // Adjust as needed
  },
}

const otherStyle = {
  container: {
      position: 'relative',
      backgroundColor: '#FDCCE8',
      width: '100%',
      height: '200px',
      boxShadow: 'box-shadow: 10px 10px 5px #332b48',
      
      // Flexbox
      display: 'flex',
      flexDirection: 'row',

      // Border
      border: '5px solid #fc9bd3',
  },
  gifContainer: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
  gifImage: {
      width: 'auto',
      height: '100%',
  },
}

export default App;
