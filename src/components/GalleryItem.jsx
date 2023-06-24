import { useState } from "react";
import { LikeButton } from "./LikeButton";
import "./GalleryItem.css";

export function GalleryItem({ item, refreshState }) {
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
      <div className="GalleryItem-like-container">
        <LikeButton item={item} refreshState={refreshState} />
      </div>
    </div>
  );
}
