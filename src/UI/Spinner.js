import styles from './Spinner.module.css';
import icons from "../assets/icons.svg";

const Spinner = () => {
      return  <div className={styles.spinner}>
        <svg>
          <use href={ icons + '#icon-loader'}></use>
        </svg>
      </div>

}
export default Spinner;