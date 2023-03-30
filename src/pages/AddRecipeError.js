import PagMessage from "../UI/Message/PagMessage";
import WindowOverlay from "../UI/Overlay/Window";

const AddRecipeErrorPage = () => {

  
  return (
    <WindowOverlay>
      <PagMessage
        iconPoint={"#icon-alert-triangle"}
        messageTxt={`Something went wrong! Could not add recipe! `}
      />
    </WindowOverlay>
  );
};

export default AddRecipeErrorPage;
