export const getIsAuthLS = () => {
  const data = sessionStorage.getItem('auth');
  return data ? JSON.parse(sessionStorage.getItem('auth')) : null;
};
