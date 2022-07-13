// connecting css file
import "./index.css";

import { Avatar } from "../avatar/avatar";

export const CreatePost = ({ url }) => {
  return (
    <div className="createPost">
      <Avatar url={url} />
      <input type="text" placeholder=" Create Your POst" />
    </div>
  );
};
