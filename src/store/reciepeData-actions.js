import {
  mealRecipeSliceActions,
  recipesSliceActions,
} from "./recipeData-slice";

export const fetchRecipes = function (mealName) {
  return async (dispatch) => {
    dispatch(
      recipesSliceActions.fetchData({
        isLoading: true,
      })
    );

    const response = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes?search=${mealName}&key=94e7eaa6-2222-469a-bcf1-421551585890`
    );

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    const recData = data.data.recipes;

    dispatch(
      recipesSliceActions.fetchData({
        recipesList: recData,
        isLoading: false,
   
      })
    );
  };
};

export const fetchMealRecipe = function (id) {
  return async (dispatch) => {
    dispatch(
      mealRecipeSliceActions.fetchData({
        isLoading: true,
      })
    );
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=94e7eaa6-2222-469a-bcf1-421551585890`
      );

      if (!response.ok) {
        throw new Error(`Something went wrong ${response.status}`);
      }
     

      const data = await response.json();

      const recData = data.data.recipe;

      dispatch(
        mealRecipeSliceActions.fetchData({
          id: id,
          title: recData.title,
          publisher: recData.publisher,
          sourceURL: recData.source_url,
          cookingTime: recData.cooking_time,
          ingredients: recData.ingredients,
          imgURL: recData.image_url,
          serving: recData.servings,
          isLoading: false,
         ...(recData.key && {userGenerated: recData.key}),
        })
      );
    } catch (error) {
   
      dispatch(
        mealRecipeSliceActions.checkResponseValidity({
          message: error.message,
        })
      );
    }
  };
};
