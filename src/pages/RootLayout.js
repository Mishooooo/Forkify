import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import SearchResults from "../components/layout/SearchResults/SearchResults";
import Container from "../UI/Container";



const RootLayout = function () {
  return (
    <Container>
      <Header />
    <SearchResults />
      <Outlet /> 
        
    </Container>
  );
};

export default RootLayout;

