// connecting css file
import "./navbar.css";

// importing components
import { NavbarIcon } from "../icon/navbarIcon/navbarIcon";
import { NavbarSearch } from "../navbarSearch/navbarSearch";

// importing data
import { Data } from "../icon/navbarIcon/navIconData";
import { Avatar } from "../avatar/avatar";

// navbar component
export const Navbar = () => {
  const logoData = [
    "https://e7.pngegg.com/pngimages/85/114/png-clipart-avatar-user-profile-male-logo-profile-icon-hand-monochrome.png",

    "https://png.pngtree.com/png-clipart/20190614/original/pngtree-menu-vector-icon-png-image_3791388.jpg",
  ];

  return (
    <div className="navbar">
      <div className="col_1">
        <NavbarSearch />
      </div>
      <div className="col_2">
        {Data.map((ele) => (
          <NavbarIcon class1={ele} />
        ))}
      </div>
      <div className="col_3">
        {logoData.map((ele) => (
          <Avatar url={ele} />
        ))}
      </div>
    </div>
  );
};
