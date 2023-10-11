import React from 'react';
import MinimalLayout from './layout/MinimalLayout';

import Home from './page/home';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import pageRoutes from './page.routes';

const App = () => {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }
      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });
  return (
    <>
      <MinimalLayout>
        {/* <Outlet /> */}
        <Routes>
          {getRoutes(pageRoutes)}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MinimalLayout>
    </>
  );
};

export default App;
