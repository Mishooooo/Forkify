import styles from "./IngInputs.module.css";

const IngInputs = ({ ingNum, isRequired }) => {
  return (
    <div>
      <label
        className={styles["ingredient-label"]}
      >{`Ingredient ${ingNum}`}</label>
      <div className={styles["ingredient-inputs"]}>
        <input
          type="text"
         
          name={`ingredient-${ingNum}-quantity`}
          placeholder="Quantity"
        />
        <input
          type="text"
          name={`ingredient-${ingNum}-unit`}
          placeholder="Unit"
        />
        <input
          type="text"
          name={`ingredient-${ingNum}-description`}
          placeholder="Description"
           required={isRequired}
        />
      </div>
    </div>
  );
};

export default IngInputs;
