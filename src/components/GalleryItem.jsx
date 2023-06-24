import { useState } from "react";
import { LikeButton } from "./LikeButton";
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
      <img
        className={viewDescription ? "GalleryItem-img-blur" : ""}
        src={item.path}
        alt={item.description}
      />
      {viewDescription && <span>{item.description}</span>}
      <LikeButton item={item} className="GalleryItem-like-container" />
    </div>
  );
}
