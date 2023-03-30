import classes from "./Header.module.css";
import logo from "../../../assets/logo.png";
import NavSecton from "./NavSection";
import SearchForm from "./SearchForm/SearchForm";

const Header = function () {
  return (
    <header className={classes["header"]}>
      <img src={logo} alt="Logo" className={classes["header__logo"]} />
      <SearchForm />

      <NavSecton />
    </header>
  );
};

export default Header;


