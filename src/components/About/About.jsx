/* eslint-disable react/no-unescaped-entities */
import "./About.css"
import about_img from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"


// eslint-disable-next-line react/prop-types
const About = ({setPlayerState}) => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about_img} alt="" className="about-img" />
            <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayerState(true)}/>
        </div>
        <div className="about-right">
            <h3>About the University</h3>
            <h2>Exploring Paths to Academic Success and Beyond</h2>
            <p>At our university, we dedicate ourselves to delivering an outstanding educational journey, cultivating students ready to tackle the complexities of today's world. With a vibrant community, extensive academic offerings, and cutting-edge facilities, our institution fosters an enriching atmosphere for learning, research, and individual development.</p>
            <p>Embark on a journey through our diverse courses, meet our esteemed faculty, and uncover the myriad opportunities awaiting you. Join us and become a part of an educational odyssey that transcends traditional limits.</p>
        </div>
    </div>
  )
}

export default About