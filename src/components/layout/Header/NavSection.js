import classes from "./NavSection.module.css";
import icons from "../../../assets/icons.svg";
import Bookmarks from "../../Bookmark/Bookmarks";
import { Link } from "react-router-dom";

const NavSecton = function () {

  
  return (
    <nav className={classes["nav"]}>
      <ul className={classes["nav__list"]}>
        
        <li className={classes["nav__item"]}>
          <Link to={'addRecipe'} className={classes["nav__btn"]} >
            <svg className={classes["nav__icon"]}>
              <use href={icons + "#icon-edit"}></use>
            </svg>
            <span>Add recipe</span>
          </Link>
        </li>

        <li className={classes["nav__item"]}>
          <button className={classes["nav__btn"]}>
            <svg className={classes["nav__icon"]}>
              <use href={icons + "#icon-bookmark"}></use>
            </svg>
            <span>Bookmarks</span>
          </button>

          <Bookmarks />
        </li>
      </ul>
    </nav>
  );
};

export default NavSecton;
