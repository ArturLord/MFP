import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import PersonalAccount from './pages/PersonalAccount';

import './App.scss';
import Posts from './pages/Posts';

export const AppContext = React.createContext();

function App() {

  const [user, setUser] = React.useState();
  const [photoPost, setPhotoPost] = React.useState();

  const _API = 'http://localhost:3000';

  React.useEffect(() => {
    async function userData() {
      const { data } = await axios.get(`${_API}/users`);
      setUser(data);
    }
    userData();
  }, []);

  React.useEffect(() => {
    async function photoData() {
      const { data } = await axios.get(`${_API}/postsByUser`);
      setPhotoPost(data[0].posts);
    }
    photoData();
  }, []);

  const [visibleModalEdit, setVisibleModalEdit] = React.useState(false);

  return (
    <AppContext.Provider value={{ user, setUser, photoPost, setPhotoPost, visibleModalEdit, setVisibleModalEdit }}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<PersonalAccount />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </AppContext.Provider>
  );
}
export default App;
