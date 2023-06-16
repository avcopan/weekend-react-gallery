import { GalleryItem } from "./GalleryItem";

export function GalleryList({ gallery }) {
  return (
    <div>
      {gallery.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
