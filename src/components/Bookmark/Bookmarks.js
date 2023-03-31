import styles from "./Bookmarks.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RecipeList from "../../UI/RecipeList/RecipeList";
import PagMessage from "../../UI/Message/PagMessage";

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
    <PagMessage
      iconPoint={"#icon-smile"}
      messageTxt={"No bookmarks yet. Find a nice recipe and bookmark it"}
    />
  );


  return (
    <ul className={styles["bookmarks"]}>
      {bookmarkList.length !== 0 ?  bookmarkList :  bookmarksNotFound}
    </ul>
  );
};

export default Bookmarks;
