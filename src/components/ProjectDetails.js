import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projects from '../data/projects.json';
import slugify from '../utils/slugify';
import ReactMarkdown from 'react-markdown';

import { DurationIcon, PeopleIcon, ToolsIcon, ArrowIcon, GitHubIcon, StarIcon } from './Icons';

import '../styles/Project.css';

function ProjectDetails() {
  let { projectNameSlug } = useParams();
  const project = projects.find(project => slugify(project.name) === projectNameSlug);

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // Navigates back to the previous page
    };

  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/projects/${project.markdown}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [project.markdown]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div style={container} className="project-details">
        <div onClick={goBack} className='goBackLink'>
          <p>{'<'} Go Back</p>
        </div>
      <h1 className='title' >{project.name}</h1>
      <h3>{project.type}</h3>

      <div style={video.container}>
        <video 
                src={`${process.env.PUBLIC_URL}/videos/${project.video}`}
                alt="Project animation"
                autoPlay 
                loop 
                muted
                playsInline
                disablePictureInPicture
            />
        <div style={video.banner}>
            <div style={iconTextContainer}>
                <DurationIcon/>
                <p>Duration: {project.duration}</p>
            </div>
            <div style={iconTextContainer} className="overlay-text">
                <PeopleIcon/>
                <p>Team size: {project.group_size}</p>
            </div>
            <div style={iconTextContainer} className="overlay-text">
                <ToolsIcon/>
                <p>Tech: {project.technologies}</p>
            </div>
            {project.github &&
              <a href={project.github} style={iconTextContainer} className="link">
                <div style={iconTextContainer}>
                  <GitHubIcon size={30} includeLink={false}/>
                </div>
                <p>View on GitHub</p>
              </a>
            }
            {project.link && 
              <a href={project.link} style={iconTextContainer} className="link">
                <div style={iconTextContainer}>
                  <StarIcon />
                </div>
                <p>Link to project</p>
              </a>              
            }
        </div>
      </div>

        <div className="description">
            <ReactMarkdown children={content} />
        </div>

    </div>
  );
}

const container = {
    backgroundColor: '#3C4059',

    display: 'flex',
    flexDirection: 'column',
}

const video = {
    container: {
        width: '70%',
        alignSelf: 'center',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    banner: {
        backgroundColor: '#FC9BD3',
        width: '100%',
        marginBottom: '30px',
        padding: '10px',
        boxSizing: 'border-box',

        fontSize: '24px',

        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-evenly',
        gap: "10px 10px"
    }
}

const iconTextContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',

    fill: '#332B48'
}

export default ProjectDetails;
