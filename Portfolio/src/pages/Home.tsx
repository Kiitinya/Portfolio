import './css/Home.css'

function Home() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Welcome to Ashley's Portfolio</h1>
      <p className="hero-subtitle">Developer • Designer • Dreamer</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="#contact" className="btn btn-secondary">Contact Me</a>
      </div>
    </div>
  )
}

export default Home;
