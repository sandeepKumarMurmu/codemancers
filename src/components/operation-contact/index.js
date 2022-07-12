// importing component
import { Tags } from "../tag/tag";

// component Operation
export const Operation = ({ data }) => {
  return (
    <div className="row2_grandChild2">
      {data.map((ele) => (
        <Tags url={ele.icon} title={ele.title} />
      ))}
    </div>
  );
};
