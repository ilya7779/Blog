import React, {FC} from 'react';

import styles from './AppLayout.module.scss';
import {Footer, Header} from "../components";
import {Routes} from "../routing";

export const AppLayout: FC = () => {
  return (
    <div className={styles.app__wrapper}>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};
