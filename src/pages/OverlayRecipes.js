
import AddRecipesOverlay from "../components/layout/Overlay/AddRecipe";
import Backdrop from "../components/layout/Overlay/Backdrop";
import React, { Fragment} from "react";
import ReactDOM from "react-dom";


const OverlayRecipes = function () {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <AddRecipesOverlay />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default OverlayRecipes;
