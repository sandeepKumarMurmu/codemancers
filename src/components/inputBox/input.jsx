// connecting css file
import "./input.css";

export const Input = ({ width }) => {
  return (
    <input
      className="inputGeneral"
      type="text"
      placeholder="Search Facebook"
      style={{ width: width }}
    />
  );
};
