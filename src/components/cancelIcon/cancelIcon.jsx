// linking css file
import "./cancel.css";

// cancle components
export const CancelIcon = ({ name, index, setIndex, message }) => {
  function handelback(index, setIndex) {
    setIndex(index - 1);
  }
  return (
    <>
      <div
        className="cross"
        onClick={() => {
          if (message === "back") handelback(index, setIndex);
        }}
      >
        <i class={name}></i>
      </div>
    </>
  );
};
