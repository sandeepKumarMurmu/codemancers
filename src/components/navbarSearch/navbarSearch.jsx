// connecting css file
import "./navbarSearch.css";

// importing components
import { Avatar } from "../avatar/avatar";
import { Input } from "../inputBox/input";

// search component
export const NavbarSearch = () => {
  const url =
    "https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png";
  return (
    <div className="navSearch">
      <Avatar url={url} />
      <Input width={"60%"} />
    </div>
  );
};
