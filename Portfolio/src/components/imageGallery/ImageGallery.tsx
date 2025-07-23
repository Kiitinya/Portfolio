import './ImageGallery.css'

type ImageGalleryProps = {
  title: string
  images: { src: string; alt?: string }[]
  className?: string
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images, className = "" }) => {
  return (
    <div className={`image-gallery ${className}`}>
      <h2 className="image-gallery-title">{title}</h2>
      <div className="image-gallery-content">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || `Image ${index + 1}`}
            data-tooltip={img.alt}
            className="image-gallery-img"
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
