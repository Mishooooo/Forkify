import { createSlice } from "@reduxjs/toolkit";

const storage = localStorage.getItem("bookmarkList") || [];

export const bookmarkListSlice = createSlice({
  name: "bookmarks",
  initialState: {
    storage: storage,
  },

  reducers: {
    fetchFromStorage(state, action) {
      state.storage = action.payload;
    },
  },
});

export const bookmarkListSliceActions =
  bookmarkListSlice.actions.fetchFromStorage;

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    isLoading: false,
    recipesList: null,
 
  },
  reducers: {
    fetchData(state, action) {
      state.recipesList = action.payload.recipesList || [];
      state.isLoading = action.payload.isLoading;
    },
  },
});

export const recipesSliceActions = recipesSlice.actions;

const mealRecipeSlice = createSlice({
  name: "recipeData",
  initialState: {
    id: undefined,
    title: undefined,
    publisher: undefined,
    sourceURL: null,
    cookingTime: null,
    imgURL: null,
    serving: null,
    ingredients: [],
    isLoading: false,
    userGenerated: false,

    message: undefined,
  },
  reducers: {
    fetchData(state, action) {
      state.id = action.payload.id;
      state.title = action.payload.title;
      state.publisher = action.payload.publisher;
      state.sourceURL = action.payload.sourceURL;
      state.cookingTime = action.payload.cookingTime;
      state.ingredients = action.payload.ingredients;
      state.imgURL = action.payload.imgURL;
      state.serving = action.payload.serving;
      state.isLoading = action.payload.isLoading;
      state.userGenerated = action.payload.userGenerated || false;
    },
    manageServing(state, action) {
      state.ingredients = action.payload.ingredients;
      state.serving = action.payload.serving;
    },

    checkResponseValidity(state, action) {
      state.message = action.payload.message || undefined;
    },
  },
});

export const mealRecipeSliceActions = mealRecipeSlice.actions;
export default mealRecipeSlice.reducer;
