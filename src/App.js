import "./App.css";
import Recipe from "./components/layout/Recipe/Recipe";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";

import OverlayRecipes from "./pages/OverlayRecipes";
import AddRecipeAction from "./components/layout/Overlay/AddRecipeAction";
import GreetingMessagePage from "./pages/GreetingMessage";
import ErrorPage from "./pages/Error";
import AddRecipeErrorPage from "./pages/AddRecipeError";
import RecipeErrorPage from "./pages/RecipeError";
import { fetchMealRecipe } from "./store/reciepeData-actions";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      errorElement: <ErrorPage />,

      children: [
        { index: true, element: <GreetingMessagePage /> },

        {
          path: "/:mealId",
          element: <Recipe />,
          loader: fetchMealRecipe,
          errorElement: <RecipeErrorPage />,
        },
        {
          path: "/addRecipe",
          element: <OverlayRecipes />,
          errorElement: <AddRecipeErrorPage />,
          action: AddRecipeAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
