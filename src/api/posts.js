import { createAsyncThunk, rejected } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPostsStatus',
  async ({ currentPage, setPhotosTotal, posts }) => {
    const prevPosts = posts;

    const res = await axios.get(
      `https://deebf77f001a3003.mokky.dev/posts?page=${currentPage}&limit=5`,
    );

    if (currentPage === 1) {
      setPhotosTotal(res.data.meta['total_items']);
      return res.data.items;
    } else {
      return [...prevPosts, ...res.data.items];
    }
  },
);

export const toggleLike = createAsyncThunk(
  'photos/toggleLike',
  async ({ userId, photoId }, { getState }) => {
    try {
      const state = getState();
      const photo = state.posts.posts.find((elem) => elem.id === photoId);

      const newPhoto = {
        ...photo,
        likes: [...photo.likes],
      };

      if (newPhoto.likes.includes(userId)) {
        newPhoto.likes = newPhoto.likes.filter((like) => like !== userId);
      } else {
        newPhoto.likes.push(userId);
      }

      await axios.patch(`https://deebf77f001a3003.mokky.dev/posts/${photoId}`, newPhoto);

      return newPhoto;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);

export const sendComment = createAsyncThunk(
  'photos/sendComment',
  async ({ nickname, photoId, text, idComment }, { getState }) => {
    try {
      const state = getState();

      const photo = state.posts.posts.find((elem) => elem.id === photoId);
      console.log(photo);

      const newPosts = {
        ...photo,
        comments: [...photo.comments],
      };

      const newComment = { id: idComment, nickname, text };
      newPosts.comments.push(newComment);

      await axios.patch(`https://deebf77f001a3003.mokky.dev/posts/${photoId}`, newPosts);

      return newPosts;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);

export const deleteComment = createAsyncThunk(
  'photos/deleteComment',
  async ({ photoId, commentId }, { getState }) => {
    try {
      const state = getState();
      const photo = state.posts.posts.find((elem) => elem.id === photoId);
      console.log(photo);

      const newPosts = {
        ...photo,
        comments: photo.comments.filter((comment) => comment.id !== commentId),
      };

      await axios.patch(`https://deebf77f001a3003.mokky.dev/posts/${photoId}`, newPosts);

      return newPosts;
    } catch (error) {
      throw new Error(error.response.data);
    }
  },
);
