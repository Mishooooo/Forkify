import classes from "./Recipe.module.css";
import RecipeDetails from "./RecipeDetails";
import RecipeIngredients from "./RecipeIngredients";
import RecipeDirec from "./RecipeDirec";
import { useDispatch, useSelector } from "react-redux";
import { fetchMealRecipe } from "../../../store/reciepeData-actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../UI/Spinner";
import PagMessage from "../../../UI/Message/PagMessage";

let isInitial = true;

const Recipe = function () {
  const recipe = useSelector((recState) => recState.recipe);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(fetchMealRecipe(params.mealId));
  }, [fetchMealRecipe, params.mealId]);

  
  if (recipe.isLoading) {
    return (
      <div className={classes["recipe"]}>
        <Spinner />
      </div>
    );
  }


  if (recipe.message) {
    return (
      <div className={classes["recipe"]}>
        <PagMessage
          iconPoint={"#icon-alert-triangle"}
          messageTxt={recipe.message}
        />
      </div>
    );
  }


  return (
    <div className={classes["recipe"]}>
      <figure className={classes["recipe__fig"]}>
        <img
          src={recipe.imgURL}
          alt={recipe.title}
          className={classes["recipe__img"]}
        />
        <h1 className={classes["recipe__title"]}>
          <span>{recipe.title}</span>
        </h1>
      </figure>

      <RecipeDetails />
      <RecipeIngredients />
      <RecipeDirec />
    </div>
  );
};
export default Recipe;
