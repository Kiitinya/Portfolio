import './css/Home.css'
import profileImage from '../assets/ashley.jpg'
import ProfileSection from '../components/profileSection/ProfileSection'
import reactLogo from '../assets/react.svg'
import unityLogo from '../assets/Unity.png'
import CursorFollower from "../components/cursorFollower/CursorFollower"
import ImageGallery from '../components/imageGallery/ImageGallery'
import GitHubLogo from '../assets/GitHub.png'
import JavaLogo from '../assets/Java.webp'
import CLogo from '../assets/C.svg'
import RLogo from '../assets/r.webp'
import SQLLogo from '../assets/SQL.png'
import CNLogo from '../assets/C1.svg'
import HTMLLogo from '../assets/HTML.svg'
import CSSLogo from '../assets/CSS.svg'
import JSLogo from '../assets/js.png'


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
        <CursorFollower />

      </div>
      <div className="profiles-wrapper">
        <div className="profile-sections">
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
            skills={['Unity', 'C#', 'Physics & Collisions', 'ScriptableObjects', 'Localization']}
            extraClassName="delay-2"
          />
        </div>
        <ImageGallery
          title="My skills"

          images={[{ src: reactLogo },
          { src: HTMLLogo, alt: 'HTML' },
          { src: CSSLogo, alt: 'CSS' },
          { src: JSLogo, alt: 'JS' },
          { src: SQLLogo, alt: 'SQL' },
          { src: GitHubLogo, alt: 'GitHub' },
          { src: CLogo, alt: 'C#' },
          { src: unityLogo, alt: 'Unity' },
          { src: RLogo, alt: 'R' },
          { src: JavaLogo, alt: 'Java' },
          ]}
          className="delay-3"
        />
      </div>
    </div>

  )
}

export default Home;
