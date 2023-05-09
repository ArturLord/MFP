import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import PersonalAccount from './pages/PersonalAccount';

import './App.scss';
import Posts from './pages/Posts';
import { api } from './api';
import { _API } from './api/makeRequest';

export const AppContext = React.createContext();

function App() {
  const [user, setUser] = React.useState({});
  // const [authorizedUser, setAuthorizedUser] = React.useState(undefined);

  const [photoPost, setPhotoPost] = React.useState();
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleModalEdit, setVisibleModalEdit] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [photosTotal, setPhotosTotal] = React.useState(0);

  const nextPage = () => {
    setPage(page + 1);
  };

  // users
  React.useEffect(() => {
    async function userData() {
      try {
        const { data } = await api.users.getUser()
      setUser(data);
      } catch (error) {
        alert('Произошла ошибка при получении пользователя')
      }
    }
    userData();
  }, []);


  // photos
  React.useEffect(() => {
    async function postsData() {
      try {
        const prevPhotos = photos;
        const { data, headers } = await api.photos.getPhotos({
          params: {
            _page: page,
            _limit: 5,
          },
        });
        if (page === 1) {
          setPhotosTotal(headers['x-total-count']);
          setPhotos([...data]);
          setIsLoading(false);
        } else {
          setPhotosTotal(headers['x-total-count']);
          setPhotos([...prevPhotos, ...data]);

        }

      } catch (error) {
        alert('Произошла ошибка при получении постов');
      }
    }
    postsData();
  }, [page]);

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
        <Route exact path="/" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/account" element={<PersonalAccount />} />
        <Route
          path="/posts"
          element={
            <Posts
              photos={photos}
              photosTotal={photosTotal}
              nextPage={nextPage}
              isLoading={isLoading}
            />
          }
        />
      </Routes>
    </AppContext.Provider>
  );
}
export default App;
