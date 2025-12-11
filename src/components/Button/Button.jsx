import styles from "./Button.module.css";

const Button = ({ open, handleBtnPress }) => {
  return <button onClick={handleBtnPress}>{open ? "LESS" : "MORE"}</button>;
};

export default Button;
