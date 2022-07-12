// connecting css file
import "./tag.css";

// importing components
import { Avatar } from "../avatar/avatar";

// Tag componet to be exported
export const Tags = ({ url, title }) => {
  return (
    <div className="tagContainer">
      <div className="tagChild_1">
        <Avatar url={url} />
      </div>
      <div className="tagChild_2">
        <p>{title}</p>
      </div>
    </div>
  );
};
