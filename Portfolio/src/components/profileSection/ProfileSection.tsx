import './ProfileSection.css'


type ProfileSectionProps = {
  title: string
  imageSrc: string
  imageAlt?: string
  skills: string[]
  extraClassName?: string
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  title,
  imageSrc,
  imageAlt = '',
  skills,
  extraClassName = ''
}) => {
  return (
    <div className={`profile-container ${extraClassName}`}>
      <h2 className="profile-title">{title}</h2>

      <img src={imageSrc} alt={imageAlt} className="profile-image-large" />

      <div className="skills-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}


export default ProfileSection
