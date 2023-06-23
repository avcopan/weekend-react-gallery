import { GalleryItem } from "./GalleryItem";
import "./GalleryList.css";

export function GalleryList({ gallery }) {
  return (
    <div className="GalleryList">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
