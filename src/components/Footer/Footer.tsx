import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__blogfolio}>©2022 Blogfolio</div>
      <div className={styles.footer__rightsReserved}>All rights reserved</div>
    </footer>
  );
};
