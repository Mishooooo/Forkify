import { Link } from "react-router-dom";
import classes from "./Window.module.css";

const WindowOverlay = function (props) {


  return (
    <div className={classes["add-recipe-window"]}>
      <Link className={classes["btn--close-modal"]} to={props.routePath}>
        &times;
      </Link>
      {props.children}
    </div>
  );
};

export default WindowOverlay;
