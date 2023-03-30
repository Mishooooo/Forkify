import styles from "./RecipeList.module.css";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

const RecipeList = ({ rec}) => {
 

  return (
    <li className={styles["preview"]} >
      <Link className={styles["preview__link"]} to={rec.id}>
        <figure className={styles["preview__fig"]}>
          <img src={rec.image_url} alt={rec.title} />
        </figure>
        <div className={styles["preview__data"]}>
          <h4 className={styles["preview__title"]}>{rec.title}</h4>
          <p className={styles["preview__publisher"]}>{rec.publisher}</p>

          {(rec.userGenerated || rec.key) && (
            <div className={styles["preview__user-generated"]}>
              <svg>
                <use href={icons + "#icon-user"}></use>
              </svg>
            </div>
          )}
        </div>
      </Link>
    </li>
  );
};

export default RecipeList;
