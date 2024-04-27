import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Empowering Minds, Forging Futures: Unlocking the Boundless Potential of Education!</h1>
        <p>Integrated Learning Platform: Empowering Students with Interactive Tools, Courses, and Resources to Unleash Their Full Potential.
        </p>
        <button className="btn">Know More<img src={dark_arrow} alt="" /></button>

      </div>
    </div>
  )
}

export default Hero