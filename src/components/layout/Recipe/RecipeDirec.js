import classes from './RecipeDirec.module.css'
import icons from "../../../assets/icons.svg";
import { useSelector } from "react-redux";

const RecipeDirec = () =>{

  const recipe = useSelector((recState) => recState);
 const rec = recipe.recipe;

  
return (
  <div className={classes["recipe__directions"]}>
    <h2>How to cook it</h2>
    <p className={classes["recipe__directions-text"]}>
      This recipe was carefully designed and tested by{" "}
      <span className={classes["recipe__publisher"]}>{rec.publisher}</span>. Please check out
      directions at their website.
    </p>

    <a className={classes["recipe__btn"]} href={rec.sourceURL} target="_blank">
      <span>Directions</span>
      <svg className={classes["search__icon"]}>
        <use href={icons + "#icon-arrow-right"}></use>
      </svg>
    </a>
  </div>
);
}

export default RecipeDirec;