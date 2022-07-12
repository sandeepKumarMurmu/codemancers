// connection css file
import "./avatar.css";

export const Avatar = () => {
  const url =
    "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60";
  return (
    <div className="avatarContainer">
      <img src={url} alt="profile" />
    </div>
  );
};
