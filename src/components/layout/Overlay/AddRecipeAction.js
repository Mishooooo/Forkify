import { json} from "react-router-dom";

const AddRecipeAction = async function ({ request }) {
  const data = await request.formData();

  const ingredientArr = [
    {
      quantity: data.get("ingredient-1-quantity") || null,
      unit: data.get("ingredient-1-unit") || "",
      description: data.get("ingredient-1-description"),
    },
    {
      quantity: data.get("ingredient-2-quantity") || null,
      unit: data.get("ingredient-2-unit") || "",
      description: data.get("ingredient-2-description"),
    },
    {
      quantity: data.get("ingredient-3-quantity") || null,
      unit: data.get("ingredient-3-unit") || "",
      description: data.get("ingredient-3-description"),
    },
    {
      quantity: data.get("ingredient-4-quantity") || null,
      unit: data.get("ingredient-4-unit") || "",
      description: data.get("ingredient-4-description"),
    },
    {
      quantity: data.get("ingredient-5-quantity") || null,
      unit: data.get("ingredient-5-unit") || "",
      description: data.get("ingredient-5-description"),
    },
    {
      quantity: data.get("ingredient-6-quantity") || null,
      unit: data.get("ingredient-6-unit") || "",
      description: data.get("ingredient-6-description"),
    },
  ].filter((ingredient) => ingredient.description !== "");

  const recipe = {
    title: data.get("title"),
    image_url: data.get("image"),
    publisher: data.get("publisher"),
    cooking_time: +data.get("cookingTime"),
    servings: +data.get("servings"),
    source_url: data.get("sourceUrl"),
    ingredients: ingredientArr,
  };

  let url = `https://forkify-api.herokuapp.com/api/v2/recipes/?key=94e7eaa6-2222-469a-bcf1-421551585890`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(recipe),
  });

  if (response.status === 400) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not send data", status: response.status });
  }
  const sentData = await response.json()

const addedRecipeId = sentData.data.recipe.id;

  return addedRecipeId;
};

export default AddRecipeAction;
