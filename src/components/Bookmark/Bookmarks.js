import styles from "./Bookmarks.module.css";
import icons from "../../assets/icons.svg";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeList from "../../UI/RecipeList/RecipeList";

let isInitial = true;
const Bookmarks = () => {
  const storage = useSelector(selec => selec.bookmarkList.storage);

 const [bookmarks, setBookmarks] = useState(storage.length !==0 ? JSON.parse(storage) : []);

 useEffect(() => {
  if(isInitial){
    isInitial = false;
    return;
  }
  
   if (storage !== null && storage.length !== 0) {
     setBookmarks(JSON.parse(storage));
   }
 }, [storage]);

  const bookmarkList = bookmarks?.map((bookmark) => (

 <RecipeList key={bookmark.id} rec={bookmark}/>
  ));

  const bookmarksNotFound = (
    <div className={styles["message"]}>
      <div>
        <svg>
          <use href={icons + "#icon-smile"}></use>
        </svg>
      </div>
      <p>No bookmarks yet. Find a nice recipe and bookmark it</p>
    </div>
  );


  return (
    <ul className={styles["bookmarks"]}>
      {bookmarkList.length !== 0 ?  bookmarkList :  bookmarksNotFound}
    </ul>
  );
};

export default Bookmarks;
