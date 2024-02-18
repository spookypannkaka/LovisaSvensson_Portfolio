import '../styles/Text.css'

function About() {
    return (
      <div style={styles.container}>
        <h2>Hello!!</h2>
        <p>My name is Lovisa and I am a master's student at M.Sc. in Media Technology at LiU. Although I have learned a lot of different things through my studies, my passions mainly lie in web and video game development. My dream is to release a video game on my own someday!</p>
      </div>
    );
  }

const styles = {
  container: {
    backgroundColor: '#8977C9',
    width: '100%'
  },
}
  
export default About;