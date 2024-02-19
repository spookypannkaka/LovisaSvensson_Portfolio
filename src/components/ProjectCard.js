import '../styles/Card.css'

function ProjectCard({project}) {
    return (
      <div /*style={notableStyle.container}*/ className="project-card-container">
        <div style={notableStyle.gifContainer}>
            {/*<img 
                src={`${process.env.PUBLIC_URL}/images/beehive.gif`}
                alt="Project animation" 
                style={notableStyle.gifImage}
    />*/}
            <video 
                src={`${process.env.PUBLIC_URL}/videos/${project.video}`} // Change the path to your video file
                alt="Project animation" 
                style={notableStyle.gifImage}
                autoPlay 
                loop 
                muted // This is often necessary to autoplay in browsers
                playsInline // Helps with autoplay on mobile devices
                disablePictureInPicture
            ></video>
        </div>
        <div style={cardContent}>
            <span style={textStyles.titleText}>{project.name} ({project.year})</span>
            <span style={textStyles.projectTypeText}>{project.type}</span>
            <span style={textStyles.projectLanguageText}>Technologies: {project.technologies} / Languages: {project.languages}</span>
            <p style={textStyles.projectDescriptionText}>{project.short_desc}</p>
        </div>
      </div>
    );
}

const textStyles = {
    titleText: {
        fontFamily: 'Kanit',
        fontSize: '30px',
        fontWeight: 500,
        letterSpacing: '1px',
        color: '#332b48',
        marginTop: '5px',
        textTransform: 'uppercase',       
    },
    projectTypeText: {
        fontFamily: 'Kanit',
        fontSize: '16px',
        fontWeight: 300,
        //letterSpacing: '1px',
        color: '#3c4059',
        marginTop: '0px',
        textTransform: 'uppercase',    
    },
    projectLanguageText: {
        fontFamily: 'Kanit',
        fontSize: '14px',
        fontWeight: 300,
        //letterSpacing: '1px',
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
    height: '90%',
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
}

const arrowContainer = {
    position: 'absolute',
    right: '40px',
    bottom: '70px',
    //transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
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
export default ProjectCard;