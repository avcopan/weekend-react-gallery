import { IoHeart } from "react-icons/io5";
import "./LikeButton.css";

export function LikeButton({ item, className }) {
  return (
    <div className={className}>
      <IoHeart
        title="Like"
        className="LikeButton-icon"
        // onClick={onClick}
      />
    </div>
  );
}
