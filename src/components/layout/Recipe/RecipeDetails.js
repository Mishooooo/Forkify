import classes from "./RecipeDetails.module.css";
import icons from "../../../assets/icons.svg";

import { useDispatch, useSelector } from "react-redux";
import {
  bookmarkListSliceActions,
  mealRecipeSliceActions,
} from "../../../store/recipeData-slice";
import { useEffect, useState } from "react";

const RecipeDetails = () => {
  const selector = useSelector((recState) => recState);

  const dispatch = useDispatch();

  const [bookmarkIcon, setBookmarkIcon] = useState("#icon-bookmark");

  const storage = selector.bookmarkList.storage;

  let bookmarkList = storage && storage.length !== 0 ? JSON.parse(storage) : [];

  const bookmarkHandler = () => {
    let bookmarks;

    if (bookmarkList.some((bookmark) => bookmark.id === selector.recipe.id)) {
      bookmarks = bookmarkList.filter(
        (bookmark) => bookmark.id !== selector.recipe.id
      );

      localStorage.setItem("bookmarkList", JSON.stringify(bookmarks));
      setBookmarkIcon("#icon-bookmark");
    }

    if (!bookmarkList.some((bookmark) => bookmark.id === selector.recipe.id)) {
      const newBookmark = {
        id: selector.recipe.id,
        image_url: selector.recipe.imgURL,
        publisher: selector.recipe.publisher,
        title: selector.recipe.title,
        ...(selector.recipe.userGenerated && {
          userGenerated: selector.recipe.userGenerated,
        }),
      };
      bookmarks = [...bookmarkList, newBookmark];

      setBookmarkIcon("#icon-bookmark-fill");
    }
    localStorage.setItem("bookmarkList", JSON.stringify(bookmarks));

    dispatch(bookmarkListSliceActions(JSON.stringify(bookmarks)));
  };

  useEffect(() => {
    if (bookmarkList.some((bookmark) => bookmark.id === selector.recipe.id)) {
      setBookmarkIcon("#icon-bookmark-fill");
    } else {
      setBookmarkIcon("#icon-bookmark");
    }
  }, [bookmarkList, selector.recipe.id]);

  const recipeIngsList = selector.recipe.ingredients;

  let cookingTime = selector.recipe.cookingTime;
  let serving = selector.recipe.serving;

  const updateServingHandler = (parameter) => {
    serving += parameter;

    const updatedIngredients = recipeIngsList.map((ing) => {
      const quantity = ing.quantity;
      return {
        ...ing,
        quantity: quantity ? (quantity * serving) / (serving - parameter) : "",
      };
    });

    dispatch(
      mealRecipeSliceActions.manageServing({
        serving: serving,
        ingredients: updatedIngredients,
      })
    );
  };

  return (
    <div className={classes["recipe__details"]}>
      <div className={classes["recipe__info"]}>
        <svg className={classes["recipe__info-icon"]}>
          <use href={icons + "#icon-clock"}></use>
        </svg>
        <span>{cookingTime} minutes </span>
      </div>
      <div className={classes["recipe__info"]}>
        <svg className={classes["recipe__info-icon"]}>
          <use href={icons + "#icon-users"}></use>
        </svg>
        <span>{serving} servings</span>

        <div className={classes["recipe__info-buttons"]}>
          <button
            onClick={serving !== 1 && updateServingHandler.bind(null, -1)}
          >
            <svg>
              <use href={icons + "#icon-minus-circle"}></use>
            </svg>
          </button>

          <button onClick={updateServingHandler.bind(null, 1)}>
            <svg>
              <use href={icons + "#icon-plus-circle"}></use>
            </svg>
          </button>
        </div>
      </div>

      {selector.recipe.userGenerated && (
        <div className={classes["recipe__user-generated"]}>
          <svg>
            <use href={icons + "#icon-user"}></use>
          </svg>
        </div>
      )}
      <button className={classes["bookmark-btn"]} onClick={bookmarkHandler}>
        <svg>
          <use href={icons + bookmarkIcon}></use>
        </svg>
      </button>
    </div>
  );
};

export default RecipeDetails;
