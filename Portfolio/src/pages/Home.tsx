import './css/Home.css'
import profileImage from '../assets/ashley.jpg'

function Home() {
  return (
    <div className="hero-container">
      <img src={profileImage} alt="Ashley" className="profile-image" />
      <h1 className="hero-title">Welcome to Ashley's Portfolio</h1>
      <p className="hero-subtitle">Developer • Designer • Dreamer</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="https://linktr.ee/kiitinya" className="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  )
}

export default Home;
