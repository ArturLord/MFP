import { useSelector } from 'react-redux';

import { getIsAuthLS } from 'utils/getisAuthLS';

export const useAuth = () => {
  const { email, token, id } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
};
