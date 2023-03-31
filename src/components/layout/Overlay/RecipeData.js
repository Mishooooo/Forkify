import { useEffect,  useState } from "react";
import classes from "./RecipeData.module.css";

const RecipeData = function ({ errorData }) {
  const [titleError, setTitleError] = useState("");
  const [urlError, setUrlError] = useState("");
  const [imageUrlError, setImageUrlError] = useState("");
  const [publisherError, setPublisherError] = useState("");
  const [prepTimeError, setPrepTimeError] = useState("");
  const [servingsError, setServingsError] = useState("");

  useEffect(() => {
    if (errorData) {
      const messages = errorData
        .replace("Invalid input data. ", "")
        .split(". Path")
        .map((errMsg) => errMsg.replace(/`/g, ""));

      // returns index of error title  if there is one
      const errorMsgIndex = (title) =>
        messages.findIndex((msg) => msg.includes(title));

      const titleErrorMsg = messages[errorMsgIndex("title")];
      const sourceUrlErrorMsg = messages[errorMsgIndex("source_url")];
      const imageUrlErrorMsg = messages[errorMsgIndex("image_url")];
      const publisherErrorMsg = messages[errorMsgIndex("publisher")];
      const cookingTimeError = messages[errorMsgIndex("cooking_time")];
      const servingError = messages[errorMsgIndex("serving")];

      setTitleError(titleErrorMsg || false);
      setUrlError(sourceUrlErrorMsg || false);
      setImageUrlError(imageUrlErrorMsg || false);
      setPublisherError(publisherErrorMsg || false);
      setPrepTimeError(
        cookingTimeError ? "Enter valid preparation time" : false
      );
      setServingsError(servingError ? "Enter valid servings amount" : false);
    }
  }, [errorData]);

  return (
    <div className={classes["upload__column"]}>
      <h3 className={classes["upload__heading"]}>Recipe data</h3>

      <label>Title</label>
      <input name="title" type="text" />
      {titleError && <p>{titleError}</p>}

      <label>URL</label>
      <input name="sourceUrl" type="url" />
      {urlError && <p>{urlError}</p>}

      <label>Image URL</label>
      <input name="image" type="url" />
      {imageUrlError && <p>{imageUrlError}</p>}

      <label>Publisher</label>
      <input name="publisher" type="text" />
      {publisherError && <p>{publisherError}</p>}

      <label>Prep time</label>
      <input name="cookingTime" type="number" />
      {prepTimeError && <p>{prepTimeError}</p>}

      <label>Servings</label>
      <input name="servings" type="number" />
      {servingsError && <p>{servingsError}</p>}
    </div>
  );
};

export default RecipeData;
