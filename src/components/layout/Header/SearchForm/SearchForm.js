import styles from "./SearchForm.module.css";

import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchRecipes } from "../../../../store/reciepeData-actions";

import OrangeBtn from "../../../../UI/Buttons/OrangeBtn";

const SearchForm = () => {
  const searchValue = useRef();

  const dispatch = useDispatch();

  const searchRecipes = (e) => {
    e.preventDefault();
   if (searchValue.current.value !== "")  dispatch(fetchRecipes(searchValue.current.value));

    searchValue.current.value = "";
  };

  return (
    <form className={styles["search"]}>
      <input
        type="text"
        className={styles["search__field"]}
        placeholder="Search over 1,000,000 recipes..."
        ref={searchValue}
        onFocus={(e) => (e.target.value = "")}
      />

      <OrangeBtn onClick={searchRecipes} btnName={"search"} icon={"search"} />
    </form>
  );
};

export default SearchForm;
