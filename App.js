/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import AppNavigator from './source/navigator/AppNavigator';

import { ProvideAuth } from './source/hooks/useAuth';

const App = () => {
  return (
    <ProvideAuth>
      <AppNavigator />
    </ProvideAuth>
  );
};

export default App;
