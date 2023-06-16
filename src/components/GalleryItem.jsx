import "./GalleryItem.css"

export function GalleryItem({ item }) {
  return (
    <div className="GalleryItem-container">
      <img className="GalleryItem-image" src={item.path} alt={item.description} />
    </div>
  );
}