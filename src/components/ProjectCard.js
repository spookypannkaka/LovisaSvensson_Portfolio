import '../styles/Card.css'
import { Link } from 'react-router-dom';
import slugify from '../utils/slugify';

import { DurationIcon, PeopleIcon, ToolsIcon, ArrowIcon } from './Icons';
  

function ProjectCard({project}) {
    const projectSlug = slugify(project.name);

    const preventDragHandler = (e) => {
        e.preventDefault();
      };

    return (
    <Link to={`/projects/${projectSlug}`} className="project-link" onDragStart={preventDragHandler} style={{ textDecoration: 'none' }}>
      <div className="project-card-container">
        <div style={notableStyle.gifContainer}>
            <video 
                src={`${process.env.PUBLIC_URL}/videos/${project.video}`}
                alt="Project animation" 
                style={notableStyle.gifImage}
                autoPlay 
                loop 
                muted
                playsInline
                disablePictureInPicture
            ></video>
            <div style={notableStyle.overlay} className="overlay-text">
                <div style={notableStyle.iconTextContainer}>
                    <DurationIcon/>
                    {project.duration}
                </div>
                <div style={notableStyle.iconTextContainer} className="overlay-text">
                    <PeopleIcon/>
                    {project.group_size}
                </div>
                <div style={notableStyle.iconTextContainer} className="overlay-text">
                    <ToolsIcon/>
                    {project.technologies}
                </div>
            </div>
        </div>
        <div style={cardContent}>
            <div style={titleContainer}>
                <h2 style={textStyles.titleText} className="title-text">{project.name} ({project.year})</h2>
            </div>
            <h3 style={textStyles.projectTypeText}>{project.type}</h3>
            <p style={textStyles.projectDescriptionText}>{project.short_desc}</p>
        </div>
        <div className="read-more"><ArrowIcon/></div>
      </div>
    </Link>
    );
}

const textStyles = {
    titleText: {
        fontFamily: 'Kanit',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#332b48',
        marginTop: '5px',
        marginLeft: '0px',
        textTransform: 'uppercase',       
    },
    projectTypeText: {
        fontFamily: 'Kanit',
        fontSize: '16px',
        fontWeight: 300,
        color: '#3c4059',
        marginTop: '0px',
        marginLeft: '0px',
        marginBottom: '0px',
        textTransform: 'uppercase',    
    },
    projectLanguageText: {
        fontFamily: 'Kanit',
        fontSize: '14px',
        fontWeight: 300,
        color: '#3c4059',
        marginTop: '0px',
        textTransform: 'uppercase',   
    },
    projectDescriptionText: {
        fontFamily: 'PT Sans',
        fontSize: '16px',
        fontWeight: 300,

        width: '80%',
        marginTop: '10px'
    },
}

const cardContent = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    padding: '15px', // Added padding for overall internal spacing
}

const titleContainer = {
    display: 'flex',
    justifyContent: 'space-between', // This pushes the arrow icon to the far right
    alignItems: 'center', // Vertically centers the title and arrow icon
}

const notableStyle = {
    container: {
      position: 'relative',
        backgroundColor: '#FDCCE8',
        width: '550px',
        height: '550px',
        boxShadow: 'box-shadow: 10px 10px 5px #332b48',
        
        // Flexbox
        display: 'flex',
        flexDirection: 'column',
  
        // Border
        border: '5px solid #fc9bd3',
    },
    gifContainer: {
        position: 'relative',
        width: '100%',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gifImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        color: '#d4faff',
        fill: "#D4FAFF",
        textAlign: 'center',
        padding: '10px 0',

        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    iconTextContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
    }
  }
export default ProjectCard;