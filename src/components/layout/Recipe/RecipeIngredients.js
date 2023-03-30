import classes from "./RecipeIngredients.module.css";
import icons from "../../../assets/icons.svg";
import { useSelector } from "react-redux";
import { Fraction} from "fractional";

const RecipeIngredients = function () {
  const recipe = useSelector((recState) => recState);
 

  const ingredientsList = recipe.recipe.ingredients.map((ing, ind) => {
    const quantity =
      ing.quantity ? new Fraction(ing.quantity).toString() : "";
 
    return (
      <li key={ind} className={classes["recipe__ingredient"]}>
        <svg className={classes["recipe__icon"]}>
          <use href={icons + "#icon-check"}></use>
        </svg>
        <div className={classes["recipe__quantity"]}></div>
        <div className={classes["recipe__description"]}>
          <span className={classes["recipe__unit"]}></span>
          {`${quantity} ${ing.unit} ${ing.description}`}
        </div>
      </li>
    );
  });

  return (
    <div className={classes["recipe__ingredients"]}>
      <h2>Recipe ingredients</h2>
      <ul className={classes["recipe__ingredient-list"]}>{ingredientsList}</ul>
    </div>
  );
};

export default RecipeIngredients;
