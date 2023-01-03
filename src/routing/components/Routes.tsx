import React, {FC} from 'react';
import {Route, Routes as RoutesSource} from 'react-router-dom';

import {SignUp} from "../../pages";

export const Routes: FC = () => {
  return (
    <RoutesSource>
      <Route path='/' element={<SignUp />}/>
      {/*<Route path='/:isbn13' element={}/>*/}
    </RoutesSource>
  );
};
