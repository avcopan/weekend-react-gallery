export function GalleryList({ gallery }) {
  return (
    <div>
      {gallery.map((galleryItem) => {
        return <p key={galleryItem.id}>{galleryItem.title}</p>;
      })}
    </div>
  );
}
