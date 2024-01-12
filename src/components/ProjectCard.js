function ProjectCard({project, customStyles}) {
    return (
      <div style={customStyles.container}>
        <div style={customStyles.gifContainer}>
            <img 
                src={`${process.env.PUBLIC_URL}/images/fireworks.gif`}
                alt="Project animation" 
                style={customStyles.gifImage}
            />
        </div>
        <div style={cardContent}>
            <span style={textStyles.titleText}>{project.name} ({project.year})</span>
            <span style={textStyles.projectTypeText}>Type of project: {project.type}</span>
            <span style={textStyles.projectLanguageText}>Technologies: {project.technologies} / Languages: {project.languages}</span>
            <p style={{width: '80%', marginTop: '10px'}}>{project.short_desc}</p>
            <div style={arrowContainer}>
                <img src={`${process.env.PUBLIC_URL}/images/expand_more.png`}/>
            </div>
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
}

const cardContent = {
    height: '90%',
    marginLeft: '15px',
    display: 'flex',
    flexDirection: 'column',
}

const arrowContainer = {
    position: 'absolute',
    right: '40px',
    bottom: '70px',
    //transform: 'translateY(-50%)',
    width: '20px',
    height: '20px',
}

export default ProjectCard;