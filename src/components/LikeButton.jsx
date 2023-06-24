import { IoHeart } from "react-icons/io5";
import "./LikeButton.css";

export function LikeButton({ item }) {
  return (
    <div className="LikeButton">
        <IoHeart
          size={20}
          title="Like"
          // onClick={onClick}
        />
      <div>10000</div>
    </div>
  );
}
