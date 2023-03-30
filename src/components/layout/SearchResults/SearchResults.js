import styles from "./SearchResults.module.css";
import PagButton from "../../../UI/Buttons/PagButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Spinner from "../../../UI/Spinner";
import PagMessage from "../../../UI/Message/PagMessage";
import RecipeList from "../../../UI/RecipeList/RecipeList";

const SearchResults = function () {
  const recipesListData = useSelector((state) => state.recipesListData);

  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = recipesListData.recipesList?.length; // Total number of items
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1; // In case total item length is null total pages will be 1

  const startIndex = (currentPage - 1) * itemsPerPage; // Index of the first item on the current page
  const endIndex = startIndex + itemsPerPage; // Index of the last item on the current page
  const currentItems = recipesListData.recipesList?.slice(startIndex, endIndex); // Items to display on the current page

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [recipesListData]);

  if (recipesListData.isLoading) {
    return (
      <div className={styles["search-results"]}>
        <Spinner />
      </div>
    );
  }

  if (
    Array.isArray(recipesListData.recipesList) &&
    recipesListData.recipesList?.length == 0
  ) {
    return (
      <div className={styles["search-results"]}>
        <PagMessage
          iconPoint={"#icon-alert-triangle"}
          messageTxt={`Could not find recipes, please try again 404`}
        />
      </div>
    );
  }

  const recipesList = currentItems?.map((rec) => {
    return <RecipeList rec={rec} key={rec.id} />;
  });

  return (
    <div className={styles["search-results"]}>
      <ul className={styles["results"]}>{recipesList}</ul>

      {recipesListData.recipesList?.length !== 0 && (
        <div className={styles["pagination"]}>
          {currentPage !== 1 && (
            <PagButton
              onClick={() => goToPage(currentPage - 1)}
              currentPage={currentPage - 1}
              direction="left"
            />
          )}
          {currentPage !== totalPages && (
            <PagButton
              onClick={() => goToPage(currentPage + 1)}
              currentPage={currentPage + 1}
              direction="right"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
