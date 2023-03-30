import styles from "./PagButton.module.css";
import icons from "../../assets/icons.svg";


const PagButton = function ({currentPage, onClick, direction}){
return (
  <button
    className={styles["btn--inline"]}
    style={{ float: `${direction}` }}
    onClick={onClick}
  >
    <span>Page {currentPage}</span>
    <svg className={styles["search__icon"]}>
      <use href={icons + `#icon-arrow-${direction}`}></use>
    </svg>
  </button>
);

};

export default PagButton;
