import React from 'react';
import { useSelector } from 'react-redux';

import HomePage from 'pages/HomePage';
import Authentication from 'pages/Authentication';

import './App.scss';

function App() {
  const { email } = useSelector((state) => state.user);

  return <>{email ? <HomePage /> : <Authentication />}</>;
}
export default App;
