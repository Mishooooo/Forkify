import { useRouteError } from "react-router-dom";
import Container from "../UI/Container";
import PagMessage from "../UI/Message/PagMessage";

const RecipeErrorPage = () => {
  const error = useRouteError();

  return (
    <Container>
      <PagMessage
        iconPoint={"#icon-alert-triangle"}
        messageTxt={`Something went wrong,
        restart the page ${error.status} `}
      />
    </Container>
  );
};

export default RecipeErrorPage;
