export const getIsAuthLS = () => {
  const data = localStorage.getItem('auth');
  return data ? JSON.parse(localStorage.getItem('auth')) : null;
};
