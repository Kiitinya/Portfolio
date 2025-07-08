import './css/Home.css'
import profileImage from '../assets/ashley.jpg'
import ProfileSection from '../components/profileSection/ProfileSection'
import reactLogo from '../assets/react.svg'
import unityLogo from '../assets/Unity.png'
import CursorFollower from "../components/cursorFollower/CursorFollower"

function Home() {
  return (
    <div className="home-layout">
    <div className="hero-wrapper">
    <div className="hero-container">
      <img src={profileImage} alt="Ashley" className="profile-image" />
      <h1 className="hero-title">Welcome to Ashley's Portfolio</h1>
      <p className="hero-subtitle">Developer • Designer • Dreamer</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="https://linktr.ee/kiitinya" className="btn btn-secondary">Contact Me</a>
      </div>
    </div>
    <CursorFollower/>
      
    </div>
     <ProfileSection
        title="Web Developer"
        imageSrc={reactLogo}
        imageAlt="React Logo"
        skills={['React', 'TypeScript', 'Node.js', 'Redux', 'CSS Modules', 'SQL']}
        extraClassName="delay-1"
      />
      <ProfileSection
        title="Game Developer"
        imageSrc={unityLogo}
        imageAlt="React Logo"
        skills={['Unity', 'C#', 'Physics & Collisions', 'ScriptableObjects', 'Localization' ]}
        extraClassName="delay-2"
      />
      </div>
  )
}

export default Home;
