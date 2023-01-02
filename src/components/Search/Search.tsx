import styles from './Search.module.scss';
import {Cross} from "../../assets";

export const Search = () => {
  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        placeholder='Search...'
        type='text'/>
      <button className={styles.search__cross}>
        <Cross />
      </button>
    </div>
  );
};