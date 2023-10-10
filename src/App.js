import React from 'react';
import MinimalLayout from './layout/MinimalLayout';

import Home from './page/home';

const App = () => {
  return (
    <>
      <MinimalLayout>
        <Home />
      </MinimalLayout>
    </>
  );
};

export default App;
