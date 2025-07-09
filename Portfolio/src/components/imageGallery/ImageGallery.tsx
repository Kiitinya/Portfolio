import './ImageGallery.css'

type ImageGalleryProps = {
  title: string
  images: { src: string; alt?: string }[]
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ title, images }) => {
  return (
    <div className="image-gallery">
      <h2 className="image-gallery-title">{title}</h2>
      <div className="image-gallery-content">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt || `Image ${index + 1}`}
            className="image-gallery-img"
          />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
