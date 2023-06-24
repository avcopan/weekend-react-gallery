import { GalleryItem } from "./GalleryItem";
import "./GalleryList.css";

export function GalleryList({ gallery, refreshState }) {
  return (
    <div className="GalleryList">
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} refreshState={refreshState} />
      ))}
    </div>
  );
}
