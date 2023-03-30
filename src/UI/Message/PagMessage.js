import styles from './PagMessage.module.css'
import icons from "../../assets/icons.svg";


const PagMessage = function ({iconPoint, messageTxt}){

 

return (
  <div className={styles.message}>
    <div>
      <svg >
        <use href={icons + iconPoint}></use>
      </svg>
    </div>
  
    <p>{messageTxt}</p>
  </div>
);

}

export default PagMessage;