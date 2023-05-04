import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import PersonalAccount from './pages/PersonalAccount';

import './App.scss';
import Posts from './pages/Posts';
import { api } from './api';
import { _API } from './api/makeRequest';

export const AppContext = React.createContext();

function App() {
  const [user, setUser] = React.useState();
  const [photoPost, setPhotoPost] = React.useState();
  const [photos, setPhotos] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleModalEdit, setVisibleModalEdit] = React.useState(false);

  // users
  React.useEffect(() => {
    async function userData() {
      const { data } = await axios.get(`${_API}/users`);
      setUser(data);
    }
    userData();
  }, []);

  // photos
  React.useEffect(() => {
    async function postsData() {
      try {
        const { data } = await api.photos.getPhotos({
          params: {
            _page: 0,
            _limit: 5,
          },
        });
        setPhotos(data);
        setIsLoading(false);
      } catch (error) {
        alert('Произошла ошибка при получении постов');
      }
    }
    postsData();
  }, []);

  // postsByUser
  React.useEffect(() => {
    async function photoData() {
      const { data } = await axios.get(`${_API}/postsByUser`);
      setPhotoPost(data[0].posts);
    }
    photoData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        photoPost,
        setPhotoPost,
        visibleModalEdit,
        setVisibleModalEdit,
      }}
    >
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<PersonalAccount />} />
        <Route path="/posts" element={<Posts photos={photos} isLoading={isLoading} />} />
      </Routes>
    </AppContext.Provider>
  );
}
export default App;
