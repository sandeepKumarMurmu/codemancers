// connection css file
import "./avatar.css";

export const Avatar = ({ url }) => {
  return (
    <div className="avatarContainer">
      <img src={url} alt="profile" />
    </div>
  );
};
