import MyIcon from "./MyIcon";
import ArrowUp from "../assets/desktop/icon-arrow-up.svg";

// eslint-disable-next-line react/prop-types
const Button = ({ handleButtonClick, showSection }) => {
  return (
    <button
      className="w-[146px] h-[56px] flex justify-center items-center bg-color-3 text-black rounded-full text-body"
      onClick={handleButtonClick}
    >
      <p className="p-2">{showSection ? "MORE" : "LESS"}</p>
      <p
        className={`transform transition-transform duration-300 ${
          showSection ? "rotate-180" : ""
        }`}
      >
        {MyIcon(ArrowUp, "40", "40")}
      </p>
    </button>
  );
};

export default Button;
