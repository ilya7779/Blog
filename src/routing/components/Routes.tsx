import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {SignIn} from "../../pages";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<SignIn />}/>
      {/*<Route path='/:isbn13' element={}/>*/}
    </RoutesSource>
  );
};
