// connecting css file
import "./navbar.css";

// importing components
import { NavbarIcon } from "../icon/navbarIcon/navbarIcon";

// importing data
import { Data } from "../icon/navbarIcon/navIconData";

// navbar component
export const Navbar = () => {
  console.log(Data);
  return (
    <div className="navbar">
      <div className="col_1"></div>
      <div className="col_2">
        {Data.map((ele) => (
          <NavbarIcon class1={ele} />
        ))}
      </div>
      <div className="col_3"></div>
    </div>
  );
};
