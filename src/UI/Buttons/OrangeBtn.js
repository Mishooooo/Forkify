import styles from "./OrangeBtn.module.css";
import icons from "../../assets/icons.svg";

const OrangeBtn = ({ onClick, icon, btnName, isDisabled}) => {
  return (
    <button className={styles["btn"]} onClick={onClick} disabled={isDisabled} >
      <svg className={styles["search__icon"]}>
        <use href={icons + `#icon-${icon}`}></use>
      </svg>
      <span>{btnName}</span>
    </button>
  );
};

export default OrangeBtn;
