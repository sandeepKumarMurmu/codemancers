// connecting css file
import "./tag.css";

// importing components
import { Avatar } from "../avatar/avatar";

// Tag componet to be exported
export const Tags = () => {
  return (
    <div className="tagContainer">
      <div className="tagChild_1">
        <Avatar />
      </div>
      <div className="tagChild_2">
        <p>Operation</p>
      </div>
    </div>
  );
};
