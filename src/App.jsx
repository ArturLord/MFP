import React, { useId } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Login from './pages/Login';
import Registration from './pages/Registration';
import Settings from './pages/Settings';
import PersonalAccount from './pages/PersonalAccount';

import './App.scss';
import Posts from './pages/Posts';
import Messages from 'pages/Messages';

export const AppContext = React.createContext();

function App() {
  // photos
  // React.useEffect(() => {
    // async function postsData() {
    //   try {
    //     const prevPhotos = photos;
    //     const { data, headers } = await api.photos.getPhotos({
    //       params: {
    //         _page: page,
    //         _limit: 5,
    //       },
    //     });
    //     if (page === 1) {
    //       setPhotosTotal(headers['x-total-count']);
    //       setPhotos([...data]);
    //       setIsLoading(false);
    //     } else {
    //       setPhotosTotal(headers['x-total-count']);
    //       setPhotos([...prevPhotos, ...data]);

    //     }

  //     } catch (error) {
  //       alert('Произошла ошибка при получении постов');
  //     }
  //   }
  //   postsData();
  // }, [page]);

  // mutatePhoto
  // async function mutatePhoto(userId, photoId) {
  //   const prevPhotos = photos;
  //   const photo = photosSlice.find(elem => elem.id === photoId);

  //   const newPhoto = {
  //     ...photo,
  //     likes: [...photo.likes]
  //   };

  //   if (newPhoto.likes.includes(userId)) {
  //     newPhoto.likes = newPhoto.likes.filter(like => like !== userId);
  //   } else {
  //     newPhoto.likes.push(userId)
  //   }

  //   try {

  //     await api.photos.mutatePhoto({
  //       data: newPhoto,
  //     });
  //     dispatch(setMutatePhoto())

  //   } catch (error) {
  //     alert('Произошла ошибка при установки лайка');
  //   }
  // }
  // mutatePhoto();

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
