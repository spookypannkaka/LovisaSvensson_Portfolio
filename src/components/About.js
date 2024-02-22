import '../styles/Text.css'
import '../styles/About.css'

function About() {
    return (
      <div className="footerContainer">
        <div className="textArea">
          <h2>Hello!!</h2>
          <p>My name is Lovisa and I am a master's student at M.Sc. in Media Technology at LiU. Although I have learned a lot of different things through my studies, my passions mainly lie in web and video game development. My dream is to release a video game on my own someday!</p>
          <br/>
          <p>Want to get in contact? See my contact details at the top!</p>
        </div>
        {<img src={`${process.env.PUBLIC_URL}/images/groundwithufo.svg`} style={{width: '100%'}} alt="Ground" />}
      </div>
    );
  }

const styles = {
  container: {
    position: 'relative',
    backgroundColor: '#8977C9',
    width: '100%',
    marginBottom: 0,
  },
  textOverlay: {
    position: 'absolute', // Position the text over the SVG
    top: '10%', // Adjust this value to position the text vertically
    marginLeft: '30px', // Adjust this value to position the text from the left edge
    //transform: 'translateY(-50%)', // This centers the text block vertically
    color: '#FFFFFF', // Change text color for better visibility depending on your SVG
    maxWidth: '40%', // Prevent the text from taking up the entire width
    // Additional styling for the text can go here
  },
}
  
export default About;