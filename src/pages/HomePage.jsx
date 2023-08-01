import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchUsers } from 'api/users';

import PersonalAccount from './PersonalAccount';
import Messages from './Messages';
import Settings from './Settings';
import Posts from './Posts';
import PostsUser from './PostsUser';

const HomePage = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Routes>
      <Route path="/settings/*" element={<Settings />} />
      <Route path="/account" element={<PersonalAccount />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/postsByUser" element={<PostsUser />} />
    </Routes>
  );
};

export default HomePage;
