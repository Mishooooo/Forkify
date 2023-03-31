import { useState, useEffect } from "react";

import { Form, useActionData, useNavigation } from "react-router-dom";
import OrangeBtn from "../../../UI/Buttons/OrangeBtn";
import PagMessage from "../../../UI/Message/PagMessage";
import WindowOverlay from "../../../UI/Overlay/Window";
import classes from "./AddRecipe.module.css";
import Ingredients from "./Ingredients";
import RecipeData from "./RecipeData";

const AddRecipesOverlay = function () {

  const actionData = useActionData();
  const navigation = useNavigation();


  const isSubmiting = navigation.state === "submitting";

  const [wasFormSent, setWasFormSent] = useState(null); // initialize as null

  useEffect(() => {
    if (navigation.state === "idle" && actionData && !actionData.message) {
      // update state with a new element
      setWasFormSent((curState) =>
        curState ? (
          false
        ) : (
          <PagMessage
            iconPoint={"#icon-smile"}
            messageTxt={`Recipe was added successfully! `}
          />
        )
      );
    }
  }, [navigation.state, actionData]);

  return (
    <WindowOverlay routePath={typeof actionData === 'string' ? `${actionData}` : -1}>
      {wasFormSent ? (
        wasFormSent
      ) : (
        <Form method="post" className={classes["upload"]}>
          <RecipeData errorData={actionData?.message} />
          <Ingredients />

          <OrangeBtn
            btnName={isSubmiting ? "SUBMITTING..." : "UPLOAD"}
            icon={"upload-cloud"}
            isDisabled={isSubmiting || false}
          />
        </Form>
      )}
    </WindowOverlay>
  );
};

export default AddRecipesOverlay;
