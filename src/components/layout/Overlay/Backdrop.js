import { useNavigate } from "react-router-dom";
import styles from "./Backdrop.module.css";

const Backdrop = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return <div className={styles.backdrop} onClick={handleClick}></div>;
};

export default Backdrop;
