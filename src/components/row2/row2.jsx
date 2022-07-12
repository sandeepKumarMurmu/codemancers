// connnecting css file
import "./row2.css";

// importing components
import { Tags } from "../tag/tag";

// row2 component
export const Row2 = () => {
  return (
    <div className="row2">
      <div className="row2_child1">
        <div className="row2_grandChild1">
          <Tags />
        </div>
        <div className="row2_grandChild2"></div>
        <div className="row2_grandChild3"></div>
      </div>
      <div className="row2_child2"></div>
      <div className="row2_child1 "></div>
    </div>
  );
};
