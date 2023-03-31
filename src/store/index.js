import { configureStore } from "@reduxjs/toolkit";
import mealRecipeSlice,  { bookmarkListSlice, recipesSlice,  }from "./recipeData-slice";






const store = configureStore({
  reducer: { recipe: mealRecipeSlice, recipesListData: recipesSlice.reducer, bookmarkList: bookmarkListSlice.reducer},
});

export default store;

