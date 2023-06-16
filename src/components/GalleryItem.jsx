import "./GalleryItem.css"

export function GalleryItem({ item }) {
  return (
    <div className="GalleryItem">
      <img src={item.path} alt={item.description} />
    </div>
  );
}