import { useState } from "react";
import "./GalleryItem.css";

export function GalleryItem({ item }) {
  const [viewDescription, setViewDescription] = useState(false);

  const toggleViewDescription = () => setViewDescription(!viewDescription);

  return (
    <div
      className="GalleryItem"
      onClick={toggleViewDescription}
      onMouseLeave={() => setViewDescription(false)}
    >
      {viewDescription && <span>{item.description}</span>}
      <img src={item.path} alt={item.description} />
    </div>
  );
}
