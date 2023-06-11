import { useSelector } from 'react-redux';

export const useAuth = () => {
  const {email, token, id } = useSelector((state) => state.user);

  const getIsAuthLS = () => {
    const data = localStorage.getItem('auth');
    return data ? JSON.parse(localStorage.getItem('auth')) : null;
  }

  return {
    isAuth: getIsAuthLS(),
    email,
    token,
    id,
  }
};
