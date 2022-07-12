// connecting css file
import "./color.css";

export const Color = ({ color }) => {
  return <div className="color" style={{ backgroundColor: color }}></div>;
};
