function SkillCard({skill}) {
    return (
      <div style={styles.container}>
        <img src={`${process.env.PUBLIC_URL}/images/${skill.image}`} alt={`${skill.name} logotype`} style={styles.image}/>
        <p>{skill.name}</p>
      </div>
    );
}

const styles = {
    container: {
        backgroundColor: '#FDCCE8',
        width: '150px',
        height: '150px',
        border: '10px solid #fc9bd3',
        borderRadius: 10,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px'
    },
    image: {
        width: '50%',
        height: 'auto',
    }
}
  
export default SkillCard;