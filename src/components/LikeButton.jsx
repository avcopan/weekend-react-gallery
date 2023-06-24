import { likeGalleryItem } from "../modules/request";
import { IoHeart } from "react-icons/io5";
import "./LikeButton.css";

export function LikeButton({ item, refreshState }) {
  const handleClick = (event) => {
    event.stopPropagation();
    likeGalleryItem(item.id, refreshState);
  };

  return (
    <div className="LikeButton">
      <IoHeart size={20} title="Like" onClick={handleClick} />
      <div>{item.likes}</div>
    </div>
  );
}
