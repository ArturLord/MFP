import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import PersonalAccount from './pages/PersonalAccount';
import Posts from './pages/Posts';
import Messages from 'pages/Messages';

import './App.scss';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/account" element={<PersonalAccount />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
}
export default App;
