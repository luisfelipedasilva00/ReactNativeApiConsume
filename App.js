import React from 'react';
import { StatusBar } from 'react-native';

import './src/config/ReactotronConfig';
import Routes from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#B22222" />
      <Routes />
    </>
  );
}
