import styles from './Header.module.scss';
import {Burger, MagnifyingGlass, User} from "../../assets";
import {Search} from "../Search";




export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <button className={styles.header__burger} type="button">
          <Burger/>
        </button>
        <div className={styles.header__searchContainer}>
          <Search />
        </div>
        <button className={styles.header__buttonSearch}>
          <MagnifyingGlass />
        </button>
        <button className={styles.header__user}>
          <User />
        </button>
      </div>
    </header>
  );
};
