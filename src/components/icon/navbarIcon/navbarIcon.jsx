// connecting css file
import "./navbarIcon.css";

// icon component
export const NavbarIcon = ({ class1 }) => {
  return (
    <div className="navbarIconContainer">
      <i className={class1} />
    </div>
  );
};
