import React, { useId } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { setMutatePhoto } from 'redux/slices/photoSlice';
import Messages from 'pages/Messages';

export const AppContext = React.createContext();

function App() {
  const [user, setUser] = React.useState({});
const dispatch = useDispatch();
  const [photoPost, setPhotoPost] = React.useState();
  const [photos, setPhotos] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [visibleModalEdit, setVisibleModalEdit] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [photosTotal, setPhotosTotal] = React.useState(0);
  const photosSlice = useSelector(state => state.photos.photos)

  const nextPage = () => {
    setPage(page + 1);
  };

  // const onLikeClick = (userId, photoId) => {
  //   mutatePhoto(userId, photoId)
  // }


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
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/account" element={<PersonalAccount  photos={photos} />} />
        <Route path="/messages" element={<Messages />} />
        <Route
          path="/posts"
          element={
            <Posts
            user={user}
              photos={photos}
              photosTotal={photosTotal}
              nextPage={nextPage}
              isLoading={isLoading}
              // onLikeClick={onLikeClick}
            />
          }
        />

      </Routes>
    </AppContext.Provider>
  );
}
export default App;
