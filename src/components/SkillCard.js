function SkillCard({skill}) {
  const preventDragHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div style={styles.container} onDragStart={preventDragHandler}>
      <img src={`${process.env.PUBLIC_URL}/images/${skill.image}`} alt={`${skill.name} logotype`} style={styles.image}/>
      <p>{skill.name}</p>
    </div>
  );
}

const styles = {
    container: {
        backgroundColor: '#FDCCE8',
        width: '100px',
        height: '100px',
        border: '5px solid #fc9bd3',
        borderRadius: 10,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px 5px'
    },
    image: {
        width: '50%',
        height: '50%',
        userSelect: 'none',
    }
}
  
export default SkillCard;