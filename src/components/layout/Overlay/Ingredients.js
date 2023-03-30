import IngInputs from "../../../UI/Input/IngInputs";
import classes from "./IngredientsData.module.css";

const Ingredients = function () {
  return (
    <div className={classes["upload__column"]}>
      <h3 className={classes["upload__heading"]}>Ingredients</h3>
      <div>
        <IngInputs ingNum={1} isRequired={true}/>
        <IngInputs ingNum={2}/>
        <IngInputs ingNum={3} />
        <IngInputs ingNum={4} />
        <IngInputs ingNum={5} />
        <IngInputs ingNum={6} />
      </div>
    </div>
  );
};

export default Ingredients;
